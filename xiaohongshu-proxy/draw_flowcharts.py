from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

OUT = Path(__file__).resolve().parent
W, H = 1200, 1600

BG = "#F5F7FC"
INK = "#17213A"
MUTED = "#667085"
BLUE = "#5267E8"
BLUE_LIGHT = "#E9EDFF"
TEAL = "#159A88"
TEAL_LIGHT = "#E4F6F2"
ORANGE = "#E89335"
ORANGE_LIGHT = "#FFF1DF"
RED = "#D95C64"
RED_LIGHT = "#FDECEF"
WHITE = "#FFFFFF"
LINE = "#D9E0EF"

FONT_CANDIDATES = [
    "/System/Library/Fonts/PingFang.ttc",
    "/System/Library/Fonts/STHeiti Medium.ttc",
    "/Library/Fonts/Arial Unicode.ttf",
]


def font_path():
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return path
    raise RuntimeError("未找到可用中文字体")


FONT_PATH = font_path()


def f(size):
    return ImageFont.truetype(FONT_PATH, size)


def canvas():
    im = Image.new("RGB", (W, H), BG)
    return im, ImageDraw.Draw(im)


def rr(d, box, radius=28, fill=WHITE, outline=None, width=1):
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def txt(d, x, y=None, text=None, size=30, fill=INK, anchor="la", spacing=8, align="left"):
    if text is None:
        xy, text = x, y
    else:
        xy = (x, y)
    d.multiline_text(xy, text, font=f(size), fill=fill, anchor=anchor,
                     spacing=spacing, align=align)


def centered(d, box, text, size=30, fill=INK, spacing=8):
    x1, y1, x2, y2 = box
    txt(d, ((x1+x2)/2, (y1+y2)/2), text, size=size, fill=fill,
        anchor="mm", spacing=spacing, align="center")


def pill(d, x, y, w, text, fill=BLUE_LIGHT, color=BLUE, h=54, size=25):
    rr(d, (x, y, x+w, y+h), radius=h//2, fill=fill)
    centered(d, (x, y, x+w, y+h), text, size=size, fill=color)


def arrow(d, x1, y1, x2, y2, color=BLUE, width=6, head=15):
    d.line((x1, y1, x2, y2), fill=color, width=width)
    import math
    ang = math.atan2(y2-y1, x2-x1)
    a1 = ang + math.pi * 0.82
    a2 = ang - math.pi * 0.82
    p1 = (x2 + head * math.cos(a1), y2 + head * math.sin(a1))
    p2 = (x2 + head * math.cos(a2), y2 + head * math.sin(a2))
    d.polygon([(x2, y2), p1, p2], fill=color)


def header(d, title, subtitle, index):
    pill(d, 80, 58, 238, "NAS 反代升级记", fill=BLUE_LIGHT, color=BLUE, h=48, size=23)
    txt(d, 1120, 82, f"{index} / 3", size=23, fill=MUTED, anchor="rm")
    txt(d, 80, 142, title, size=50, fill=INK)
    txt(d, 80, 213, subtitle, size=27, fill=MUTED)


def footer(d, text, page):
    d.line((80, 1490, 1120, 1490), fill=LINE, width=2)
    txt(d, 80, 1530, text, size=25, fill=MUTED, anchor="lm")
    txt(d, 1120, 1530, f"0{page}", size=25, fill=BLUE, anchor="rm")


def flow_boxes(d, y, labels, accent):
    xs = [110, 360, 610, 860]
    bw, bh = 200, 86
    for i, (x, label) in enumerate(zip(xs, labels)):
        rr(d, (x, y, x+bw, y+bh), radius=20, fill=BG)
        centered(d, (x, y, x+bw, y+bh), label, size=25)
        if i < 3:
            arrow(d, x+bw+10, y+bh/2, xs[i+1]-12, y+bh/2,
                  color=accent, width=5, head=12)


def evolution():
    im, d = canvas()
    header(d, "NAS 端口太多，怎么收敛？", "三代反代演进：从「端口为中心」到「域名 + 服务为中心」", 1)

    cards = [
        (250, 540, RED, RED_LIGHT, "01  DSM 自带反代", "端口驱动",
         ["互联网", "多个公网端口", "多条映射 /\n反代规则", "各个服务"],
         [("端口持续增长", 230), ("配置难版本化", 250), ("直连入口较多", 250)]),
        (625, 915, ORANGE, ORANGE_LIGHT, "02  Nginx Proxy Manager", "域名驱动",
         ["互联网", "统一 HTTPS\n入口", "按域名分流", "各个服务"],
         [("泛域名证书", 220), ("Web UI 过渡友好", 290), ("仍靠手工配置", 250)]),
        (1000, 1360, BLUE, BLUE_LIGHT, "03  Traefik", "声明式入口",
         ["互联网", "统一 HTTPS\n入口", "Host + Path\n+ 优先级", "各个服务"],
         [("Labels 自动发现", 270), ("File Provider", 240), ("中间件组合", 220)]),
    ]

    for y1, y2, accent, light, title, tag, labels, pills in cards:
        rr(d, (80, y1, 1120, y2), radius=30, fill=WHITE)
        d.rounded_rectangle((80, y1, 94, y2), radius=7, fill=accent)
        txt(d, 120, y1+42, title, size=36)
        pill(d, 850, y1+25, 220, tag, fill=light, color=accent, h=50, size=24)
        flow_boxes(d, y1+105, labels, accent)
        x = 120
        for label, width in pills:
            pill(d, x, y2-72, width, label, fill=light, color=accent, h=46, size=22)
            x += width + 18

    arrow(d, 600, 552, 600, 608, color=MUTED, width=5, head=13)
    txt(d, 630, 580, "先收口", size=24, fill=MUTED, anchor="lm")
    arrow(d, 600, 927, 600, 983, color=MUTED, width=5, head=13)
    txt(d, 630, 955, "再声明式化", size=24, fill=MUTED, anchor="lm")

    rr(d, (180, 1400, 1020, 1465), radius=30, fill=INK)
    centered(d, (180, 1400, 1020, 1465), "核心变化：新增服务 ≈ DNS + 一条路由", size=28, fill=WHITE)
    footer(d, "统一入口只是开始，配置可维护才是长期收益", 1)
    im.save(OUT / "01-evolution.png", quality=95)


def request_flow():
    im, d = canvas()
    header(d, "一次访问，会经过哪些环节？", "统一入口 = 路由匹配 + 证书自动化 + 可组合治理", 2)

    rr(d, (390, 275, 810, 355), radius=25, fill=INK)
    centered(d, (390, 275, 810, 355), "互联网用户", size=32, fill=WHITE)
    arrow(d, 600, 360, 600, 405, color=BLUE)

    rr(d, (300, 410, 900, 510), radius=25, fill=WHITE, outline=LINE, width=2)
    centered(d, (300, 410, 900, 510), "路由器 / 防火墙\n仅转发统一 HTTPS 入口", size=29)
    arrow(d, 600, 515, 600, 560, color=BLUE)

    rr(d, (100, 565, 1100, 910), radius=32, fill=WHITE)
    txt(d, 600, 612, "Traefik 统一入口", size=38, fill=BLUE, anchor="mm")
    boxes = [
        (140, "TLS 终止\n证书文件热加载"),
        (450, "路由匹配\nHost + Path + 优先级"),
        (760, "中间件\n登录 / 路径 / 维护"),
    ]
    for x, label in boxes:
        rr(d, (x, 665, x+300, 815), radius=24, fill=BLUE_LIGHT)
        centered(d, (x, 665, x+300, 815), label, size=27, fill=INK)
    centered(d, (140, 838, 1060, 890), "默认不暴露  ·  Docker API 只读代理  ·  管理面不直接公网开放",
             size=23, fill=MUTED)

    d.line((600, 915, 600, 955), fill=BLUE, width=6)
    d.line((245, 955, 955, 955), fill=BLUE, width=6)
    for cx in (245, 600, 955):
        arrow(d, cx, 955, cx, 1000, color=BLUE)

    backends = [
        (80, "Docker 容器", "Labels 自动发现\n内部网络直连", BLUE_LIGHT, BLUE),
        (435, "宿主 / 系统服务", "File Provider\n按服务静态接入", TEAL_LIGHT, TEAL),
        (790, "其他内网服务", "File Provider\n按需适配后端", ORANGE_LIGHT, ORANGE),
    ]
    for x, title, desc, light, accent in backends:
        rr(d, (x, 1005, x+330, 1215), radius=28, fill=WHITE)
        pill(d, x+30, 1030, 270, title, fill=light, color=accent, h=52, size=24)
        centered(d, (x+20, 1100, x+310, 1190), desc, size=26)

    rr(d, (100, 1260, 1100, 1410), radius=28, fill=WHITE)
    txt(d, 140, 1300, "证书闭环", size=28, fill=TEAL)
    pill(d, 140, 1340, 250, "DNS-01 申请 / 续期", fill=TEAL_LIGHT, color=TEAL, h=48, size=22)
    arrow(d, 410, 1364, 480, 1364, color=TEAL, width=5, head=12)
    pill(d, 500, 1340, 220, "输出证书文件", fill=TEAL_LIGHT, color=TEAL, h=48, size=22)
    arrow(d, 740, 1364, 810, 1364, color=TEAL, width=5, head=12)
    pill(d, 830, 1340, 220, "入口热加载", fill=TEAL_LIGHT, color=TEAL, h=48, size=22)

    footer(d, "后端只需在内部网络可达，不必为了反代直接暴露", 2)
    im.save(OUT / "02-request-flow.png", quality=95)


def migration():
    im, d = canvas()
    header(d, "不停机迁移：我的 8 步顺序", "核心原则：并行部署、逐项验证、每一步都保留回退", 3)

    steps = [
        ("盘点与备份", "记录入口、规则、证书与回退点"),
        ("并行部署过渡入口", "不停旧服务，先验证统一入口"),
        ("单服务迁移", "先验证复杂服务，再逐项迁移"),
        ("外网多节点验证", "内网访问成功 ≠ 公网可用"),
        ("并行部署 Traefik", "测试入口先行，补齐网络与路由"),
        ("切换正式入口", "逐项回归，旧入口暂时保留"),
        ("证书解耦与回归", "独立续期，验证证书热加载"),
        ("退役旧方案", "客户端验证后，逐个关闭旧入口"),
    ]
    accents = [BLUE, BLUE, ORANGE, ORANGE, TEAL, TEAL, BLUE, RED]
    lights = [BLUE_LIGHT, BLUE_LIGHT, ORANGE_LIGHT, ORANGE_LIGHT,
              TEAL_LIGHT, TEAL_LIGHT, BLUE_LIGHT, RED_LIGHT]

    start, step_h, gap = 275, 104, 143
    for i, ((title, desc), accent, light) in enumerate(zip(steps, accents, lights)):
        y = start + i * gap
        rr(d, (130, y, 1070, y+step_h), radius=26, fill=WHITE)
        rr(d, (160, y+19, 226, y+85), radius=22, fill=light)
        centered(d, (160, y+19, 226, y+85), str(i+1), size=32, fill=accent)
        txt(d, 260, y+34, title, size=31, fill=INK)
        txt(d, 1030, y+52, desc, size=24, fill=MUTED, anchor="rm")
        if i < len(steps)-1:
            arrow(d, 600, y+step_h+5, 600, y+gap-7, color="#A7B1C7", width=4, head=10)

    rr(d, (130, 1430, 1070, 1478), radius=22, fill=ORANGE_LIGHT)
    centered(d, (130, 1430, 1070, 1478), "旧入口只是临时回退，不是最终状态", size=25, fill=ORANGE)
    footer(d, "把一次高风险切换，拆成一串可回退的小步骤", 3)
    im.save(OUT / "03-migration.png", quality=95)


if __name__ == "__main__":
    evolution()
    request_flow()
    migration()
    print("已生成 3 张流程图：")
    for name in ("01-evolution.png", "02-request-flow.png", "03-migration.png"):
        path = OUT / name
        print(f"- {path.name}: {path.stat().st_size} bytes")
