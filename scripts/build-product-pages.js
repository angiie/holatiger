#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 产品配置
const productConfigs = {
  'tinypass': {
    name: 'TinyPass',
    icon: '../assets/images/tinypass/svg-export-40x40.png',
    gradient: 'from-blue-100 to-indigo-100',
    actions: `
      <a href="https://chromewebstore.google.com/detail/tinypass/jjfmaihmmbclkonnkkipbplhklepopne" target="_blank" 
         class="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md" 
         style="text-decoration: none !important;">
        🔧 安装扩展
      </a>
      <a href="../index.html#extensions" 
         class="px-8 py-3 border-2 border-blue-600 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 shadow-md" 
         style="text-decoration: none !important;">
        📖 查看更多
      </a>
    `,
    additionalSections: ''
  },
  'webdavy': {
    name: 'WebDavy',
    icon: '../assets/images/webdavy/svg-export-40x40.png',
    gradient: 'from-gray-100 to-gray-200',
    actions: `
      <span class="inline-flex items-center px-8 py-3 bg-gray-100 text-gray-500 rounded-xl font-semibold cursor-not-allowed shadow-md">
        🚧 开发中
      </span>
      <a href="../index.html#extensions" 
         class="px-8 py-3 border-2 border-gray-400 bg-white text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md" 
         style="text-decoration: none !important;">
        📖 查看更多
      </a>
    `,
    additionalSections: `
    <!-- 支持的服务器 -->
    <section class="py-16 px-6 bg-gradient-to-br from-orange-50/50 to-red-50/50">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">支持的WebDAV服务器</h2>
          <p class="text-gray-600 text-lg">兼容主流WebDAV服务，满足不同使用场景</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-lg flex items-center justify-center">
              <span class="text-blue-600 font-bold text-sm">NC</span>
            </div>
            <span class="text-sm font-medium text-gray-700">NextCloud</span>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="w-12 h-12 mx-auto mb-2 bg-green-100 rounded-lg flex items-center justify-center">
              <span class="text-green-600 font-bold text-sm">OC</span>
            </div>
            <span class="text-sm font-medium text-gray-700">OwnCloud</span>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="w-12 h-12 mx-auto mb-2 bg-red-100 rounded-lg flex items-center justify-center">
              <span class="text-red-600 font-bold text-sm">AP</span>
            </div>
            <span class="text-sm font-medium text-gray-700">Apache</span>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-lg flex items-center justify-center">
              <span class="text-purple-600 font-bold text-sm">NG</span>
            </div>
            <span class="text-sm font-medium text-gray-700">Nginx</span>
          </div>
          <div class="text-center p-4 bg-white rounded-lg shadow-sm">
            <div class="w-12 h-12 mx-auto mb-2 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span class="text-yellow-600 font-bold text-sm">IIS</span>
            </div>
            <span class="text-sm font-medium text-gray-700">IIS</span>
          </div>
        </div>
      </div>
    </section>
    `
  }
};

// 解析 Markdown 文件
function parseMarkdown(content) {
  const lines = content.split('\n');
  let result = {
    title: '',
    version: '{{VERSION_PLACEHOLDER}}',
    intro: '',
    features: []
  };
  
  let currentSection = null;
  let featureBuffer = [];
  
  for (let line of lines) {
    // 解析标题
    if (line.startsWith('# ') && !result.title) {
      result.title = line.substring(2).trim();
    }
    
    // 解析版本
    if (line.includes('**版本**:')) {
      const versionMatch = line.match(/\*\*版本\*\*:\s*(.+)/);
      if (versionMatch) {
        result.version = versionMatch[1].trim();
      }
    }
    
    // 解析简介
    if (line.startsWith('## 简介')) {
      currentSection = 'intro';
      continue;
    }
    
    // 解析产品特性
    if (line.startsWith('## 产品特性') || line.startsWith('## 核心特性')) {
      currentSection = 'features';
      continue;
    }
    
    // 其他二级标题结束当前section
    if (line.startsWith('## ') && !line.includes('简介') && !line.includes('特性')) {
      currentSection = null;
    }
    
    // 收集内容
    if (currentSection === 'intro' && line.trim() && !line.startsWith('#')) {
      result.intro += line.trim() + ' ';
    }
    
    if (currentSection === 'features' && line.startsWith('- **')) {
      const featureMatch = line.match(/- \*\*(.+?)\*\* - (.+)/);
      if (featureMatch) {
        result.features.push({
          title: featureMatch[1],
          description: featureMatch[2]
        });
      }
    }
  }
  
  result.intro = result.intro.trim();
  return result;
}

// 生成特性卡片HTML
function generateFeatureCards(features) {
  const icons = ['🔒', '⚙️', '📋', '🔗', '📁', '⚡'];
  
  return features.map((feature, index) => `
    <div class="feature-card fade-in-up" style="animation-delay: ${0.1 * (index + 1)}s;">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center flex-shrink-0">
          <span class="text-xl">${icons[index % icons.length]}</span>
        </div>
        <div>
          <h3 class="font-bold text-gray-900 text-lg mb-2">${feature.title}</h3>
          <p class="text-gray-600 leading-relaxed">${feature.description}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// 构建产品页面
function buildProductPage(productKey) {
  const config = productConfigs[productKey];
  if (!config) {
    console.error(`Product config not found for: ${productKey}`);
    return;
  }
  
  // 读取 Markdown 文件（可选）
  const mdPath = path.join(__dirname, `${productKey}-product-details.md`);
  let parsed = {
    version: '1.0.0',
    intro: `${config.name} Chrome扩展`,
    features: []
  };
  
  if (fs.existsSync(mdPath)) {
    const mdContent = fs.readFileSync(mdPath, 'utf8');
    parsed = parseMarkdown(mdContent);
  } else {
    console.log(`Markdown file not found: ${mdPath}, using default values`);
  }
  
  // 读取 HTML 模板
  const templatePath = path.join(__dirname, 'product-detail-template.html');
  if (!fs.existsSync(templatePath)) {
    console.error(`Template file not found: ${templatePath}`);
    return;
  }
  
  let template = fs.readFileSync(templatePath, 'utf8');
  
  // 替换占位符
  template = template.replace(/{{PRODUCT_NAME}}/g, config.name);
  template = template.replace(/{{PRODUCT_SLUG}}/g, productKey);
  template = template.replace(/{{PRODUCT_ICON}}/g, config.icon);
  template = template.replace(/{{PRODUCT_GRADIENT}}/g, config.gradient);
  template = template.replace(/{{PRODUCT_VERSION}}/g, parsed.version);
  template = template.replace(/{{PRODUCT_INTRO}}/g, parsed.intro);
  template = template.replace(/{{PRODUCT_ACTIONS}}/g, config.actions);
  template = template.replace(/{{PRODUCT_FEATURES}}/g, generateFeatureCards(parsed.features));
  template = template.replace(/{{ADDITIONAL_SECTIONS}}/g, config.additionalSections);
  
  // 写入 HTML 文件
  const outputPath = path.join(__dirname, `${productKey}.html`);
  fs.writeFileSync(outputPath, template, 'utf8');
  console.log(`✅ Generated: ${outputPath}`);
}

// 主函数
function main() {
  console.log('🚀 Building product detail pages...\n');
  
  // 构建所有产品页面
  Object.keys(productConfigs).forEach(productKey => {
    buildProductPage(productKey);
  });
  
  console.log('\n✨ Build completed!');
  console.log('\n📁 Generated files:');
  Object.keys(productConfigs).forEach(key => {
    console.log(`   - ${key}.html`);
  });
  
  console.log('\n💡 Usage:');
  console.log('   - Add these HTML files to your web server');
  console.log('   - Update index.html links to point to these pages');
  console.log('   - Run this script again when you update the markdown files');
}

// 运行构建
if (require.main === module) {
  main();
}

module.exports = { buildProductPage, parseMarkdown };