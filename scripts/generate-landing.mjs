import fs from 'fs';
import path from 'path';
const root=path.resolve('/Users/admin/workspace/holatiger');
const outDir=path.join(root,'previews');
const indexPath=path.join(root,'index.html');
const kwMd=fs.readFileSync(path.join(root,'keywords.md'),'utf-8');
const tinypassHtml=fs.readFileSync(path.join(root,'tinypass.html'),'utf-8');
const webdavyHtml=fs.readFileSync(path.join(root,'webdavy.html'),'utf-8');
const svgHtml=fs.readFileSync(path.join(root,'svg-studio.html'),'utf-8');
function parseKeywords(md){
 const lines=md.split('\n');
 const clusters={brand:[],tinypass:[],webdavy:[],svg:[],intent:[]};
 let current='';
 for(const l of lines){
  const s=l.trim();
  if(s.startsWith('- Brand/Generic')) current='brand';
  else if(s.startsWith('- TinyPass')) current='tinypass';
  else if(s.startsWith('- WebDavy')) current='webdavy';
  else if(s.startsWith('- SVG Studio')) current='svg';
  else if(s.startsWith('- Intent')) current='intent';
  else if(s.startsWith('- ')){} else if(s.startsWith(' - ')||s.startsWith('  - ')){
   const list=s.replace(/^\s*-\s*/,'');
   const arr=list.split(',').map(x=>x.trim()).filter(Boolean);
   clusters[current].push(...arr);
  }
 }
 return clusters;
}
const clusters=parseKeywords(kwMd);
function extractParagraphAfter(html,marker){
 const idx=html.indexOf(marker);
 if(idx<0) return '';
 const rest=html.slice(idx+marker.length);
 const m=rest.match(/([\s\S]*?)<\/p>/);
 return m?m[1]:' ';
}
function summarize(text,limit=220){
 const plain=text.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
 return plain.slice(0,limit)+(plain.length>limit?'…':'');
}
function productContent(kind){
 if(kind==='tinypass'){
  const intro=extractParagraphAfter(tinypassHtml,'data-i18n="tinypass.description">');
  const feats=[];
  ['tinypass.feature1','tinypass.feature2','tinypass.feature3'].forEach((key)=>{
    const titleMarker=`data-i18n="${key}.desc">`;
    const p=extractParagraphAfter(tinypassHtml,titleMarker);
    if(p.trim()) feats.push(p.replace(/<[^>]+>/g,' ').trim());
  });
  const screenshots=['generator','history','trash'];
  return {intro:summarize(intro),features:feats,shots:screenshots.map(x=>`/assets/images/tinypass/screenshot/zh/store-screenshot-1280x800-${x}.png`)};
 }
 if(kind==='webdavy'){
  const intro=extractParagraphAfter(webdavyHtml,'data-i18n="webdavy.description">');
  const feats=[];
  ['webdavy.feature1','webdavy.feature2'].forEach((key)=>{
    const titleMarker=`data-i18n="${key}.desc">`;
    const p=extractParagraphAfter(webdavyHtml,titleMarker);
    if(p.trim()) feats.push(p.replace(/<[^>]+>/g,' ').trim());
  });
  const screenshots=['login-page','detail-page'];
  return {intro:summarize(intro),features:feats,shots:screenshots.map(x=>`/assets/images/webdavy/screenshot/zh/${x}.jpg`)};
 }
 if(kind==='svg'){
  const metaDescMatch=svgHtml.match(/<meta name="description" content="([^"]+)"/);
  const intro=metaDescMatch?metaDescMatch[1]:'';
  const features=[
   'Real‑time preview','Export PNG/ICO/WebP/JPG','Batch processing','Chrome icon pack generation'
  ];
  return {intro:summarize(intro),features,shots:[]};
 }
 return {intro:'',features:[],shots:[]};
}
function section(titleHtml,inner){
 return `<section class="py-16"><div class="max-w-6xl mx-auto px-6">${titleHtml}${inner}</div></section>`;
}
function hero(kind,title,desc,ctaUrl){
 const ns=kind;
 return `<section class="py-20"><div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10"><div><h1 class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"><span data-i18n="${ns}.landing.hero.title">${title}</span></h1><p class="text-lg text-gray-600 md:text-xl leading-relaxed mb-8 max-w-3xl"><span data-i18n="${ns}.landing.hero.subtitle">${desc}</span></p><div class="flex gap-3"><a href="${ctaUrl}" class="btn primary" data-i18n="btn.try-tool">Get Started</a><a href="/" class="btn" data-i18n="hero.btn2">Learn More</a></div></div><div><div class="rounded-2xl bg-gradient-to-tr from-indigo-50 to-violet-50 p-6 shadow"><img src="/assets/images/social/holatiger-svg-studio-1200x630.png" class="w-full h-80 object-cover rounded-xl" alt="Preview" loading="lazy"></div></div></div></section>`;
}
function heading(ns,block){
 const map={
  overview:{badge:`${ns}.landing.overview.badge`,title:`${ns}.landing.overview.title`},
  features:{badge:`${ns}.landing.features.badge`,title:`${ns}.landing.features.title`},
  usecases:{badge:`${ns}.landing.usecases.badge`,title:`${ns}.landing.usecases.title`},
  faq:{badge:`${ns}.landing.faq.badge`,title:`${ns}.landing.faq.title`},
  screenshots:{badge:`${ns}.landing.screenshots.badge`,title:`${ns}.landing.screenshots.title`}
 };
 const keys=map[block]||{badge:'landing.section.badge',title:'landing.section.title'};
 return `<div class="text-center mb-10"><div class="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4"><span class="text-sm font-medium" data-i18n="${keys.badge}">Section</span></div><h2 class="text-3xl md:text-4xl font-bold text-gray-900">`+
        `<span data-i18n="${keys.title}">Title</span></h2></div>`;
}
function proseBlock(html){
 return `<div class="prose prose-lg max-w-3xl mx-auto text-gray-700">${html}</div>`;
}
function cardList(items){
 return `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">${items.map(x=>`<div class="p-6 rounded-xl border border-gray-100 bg-white shadow-sm"><h3 class="text-lg font-semibold mb-2">${x.title||x.split(':')[0]}</h3><p class="text-gray-600">${x.desc|| (x.includes(':')?x.split(':').slice(1).join(':'):x)}</p></div>`).join('')}</div>`;
}
function imageGrid(imgs){
 return `<div class="grid grid-cols-1 md:grid-cols-2 gap-6">${imgs.map(src=>`<figure class="rounded-2xl overflow-hidden shadow"><img src="${src}" class="w-full h-72 md:h-80 object-cover" alt="Screenshot" loading="lazy"><figcaption class="p-3 text-sm text-gray-500">Screenshot</figcaption></figure>`).join('')}</div>`;
}
function buildBody(kind){
 const titleMap={tinypass:'TinyPass — Random Password Generator',webdavy:'WebDavy — WebDAV Client',svg:'SVG Studio — SVG Converter'};
 const descMap={tinypass:'Generate secure random passwords locally.',webdavy:'Manage remote files via WebDAV.',svg:'Convert and preview SVGs online.'};
 const primary=titleMap[kind];
 const ctaUrl=kind==='tinypass'?'/tinypass.html':kind==='webdavy'?'/webdavy.html':'/svg-studio.html';
 const pc=productContent(kind);
 const heroBlock=hero(kind,primary,descMap[kind],ctaUrl);
 const overview=section(heading(kind,'overview'),proseBlock(`<p>${pc.intro}</p><p>This page summarizes core value, features, and use cases.</p>`));
 const features=section(heading(kind,'features'),cardList(pc.features.length?pc.features.map(x=>({title:x.split(':')[0],desc:x.includes(':')?x.split(':').slice(1).join(':'):x})) : clusters[kind].slice(0,6).map(x=>({title:x.split(':')[0],desc:x.includes(':')?x.split(':').slice(1).join(':'):x}))));
 const useCases=section(heading(kind,'usecases'),proseBlock(`<ul><li>Practical scenarios tailored to ${primary}.</li><li>Tips to get results fast.</li></ul>`));
 const shots=pc.shots.length?section(heading(kind,'screenshots'),imageGrid(pc.shots)):'';
 const faq=section(heading(kind,'faq'),proseBlock(`<h3>Is it free?</h3><p>Yes.</p><h3>Does it work offline?</h3><p>${kind==='tinypass'?'Yes, entirely local.':kind==='svg'?'Yes, the converter runs in‑browser.':'Configuration is stored locally; server connection required.'}</p>`));
 const keywords=section('<div class="text-center mb-10"><h2 class="text-3xl md:text-4xl font-bold text-gray-900">Keywords</h2></div>',cardList(clusters[kind].slice(0,9).map(x=>({title:x}))));
 return heroBlock+overview+features+useCases+shots+faq+keywords;
}
const index=fs.readFileSync(indexPath,'utf-8');
function inject(html,kind){
 const headMatch=html.match(/<head>[\s\S]*?<\/head>/);
 if(!headMatch) throw new Error('index head not found');
 let head=headMatch[0]
  .replace(/<title[\s\S]*?<\/title>/,`<title>${kind} Preview | HolaTiger</title>`)
  .replace(/<meta name="description"[^>]*>/,`<meta name="description" content="Preview for ${kind}">`)
  .replace(/src="\/assets\//g,'src="./assets/')
  .replace(/href="\/assets\//g,'href="./assets/');
 const before=html.split('<main>')[0];
 const after=html.split('<\/main>')[1];
 const body=`<main>${buildBody(kind)}</main>`;
 return `${before}${head}${body}${after}`;
}
const pages=[{id:'landing-tinypass.html',kind:'tinypass'},{id:'landing-webdavy.html',kind:'webdavy'},{id:'landing-svg-studio.html',kind:'svg'}];
for(const p of pages){
 const out=inject(index,p.kind);
 fs.writeFileSync(path.join(outDir,p.id),out,'utf-8');
}
console.log('Regenerated previews with i18n keys and relative assets:',pages.map(x=>x.id).join(', '));