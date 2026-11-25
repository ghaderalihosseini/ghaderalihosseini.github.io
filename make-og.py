import base64
import os
import subprocess
import time

with open('d:/وب سایت بست/public/fonts/Shabnam-Bold.woff2', 'rb') as f:
    b64_bold = base64.b64encode(f.read()).decode('utf-8')
with open('d:/وب سایت بست/public/fonts/Shabnam.woff2', 'rb') as f:
    b64_reg = base64.b64encode(f.read()).decode('utf-8')

html_content = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    @font-face {{
      font-family: 'Shabnam';
      src: url('data:font/woff2;charset=utf-8;base64,{b64_bold}') format('woff2');
      font-weight: 700;
    }}
    @font-face {{
      font-family: 'Shabnam';
      src: url('data:font/woff2;charset=utf-8;base64,{b64_reg}') format('woff2');
      font-weight: 400;
    }}

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      width: 1200px;
      height: 630px;
      overflow: hidden;
      background: #000000;
      font-family: 'Shabnam', sans-serif;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }}

    .ambient-glow {{
      position: absolute;
      width: 700px;
      height: 700px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 65%);
      pointer-events: none;
    }}

    .glass-card {{
      width: 1080px;
      height: 520px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(0, 0, 0, 0.6) 100%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 38px;
      padding: 55px 65px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 40px 100px rgba(0, 0, 0, 0.95), inset 0 1px 0 rgba(255, 255, 255, 0.35);
    }}

    .card-sheen {{
      position: absolute;
      top: 0;
      left: 70px;
      right: 70px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.65), transparent);
    }}

    .top-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}

    .status-capsule {{
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 9px 20px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 17px;
      font-weight: 700;
      color: #ffffff;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    }}

    .status-dot {{
      width: 10px;
      height: 10px;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 14px #ffffff;
    }}

    .domain-tag {{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 19px;
      font-weight: 600;
      color: #94a3b8;
      letter-spacing: 0.5px;
    }}

    .hero-title {{
      font-size: 60px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1.15;
      margin-bottom: 14px;
      letter-spacing: -0.5px;
    }}

    .hero-subtitle {{
      font-size: 28px;
      font-weight: 700;
      background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 14px;
    }}

    .hero-desc {{
      font-size: 20px;
      color: #cbd5e1;
      line-height: 1.6;
      max-width: 880px;
      font-weight: 400;
    }}

    .badges-row {{
      display: flex;
      align-items: center;
      gap: 14px;
    }}

    .badge {{
      padding: 10px 22px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.16);
      font-size: 17px;
      font-weight: 700;
      color: #ffffff;
    }}
  </style>
</head>
<body>
  <div class="ambient-glow" style="top:-200px; right: 100px;"></div>
  <div class="ambient-glow" style="bottom:-250px; left: 100px;"></div>

  <div class="glass-card">
    <div class="card-sheen"></div>

    <div class="top-bar">
      <div class="status-capsule">
        <span class="status-dot"></span>
        <span>مهندس قادر علی حسینی شام اسبی</span>
      </div>
      <div class="domain-tag">ghaderalihosseini.github.io</div>
    </div>

    <div>
      <h1 class="hero-title">قادر علی حسینی</h1>
      <div class="hero-subtitle">مهندس برق | متخصص و مشاور آسانسور و پله‌برقی</div>
      <p class="hero-desc">طراحی، محاسبات ترافیک، راه‌اندازی و بازرسی استاندارد سیستم‌های آسانسور، پله‌برقی و اتوماسیون برق صنعتی</p>
    </div>

    <div class="badges-row">
      <span class="badge">استاندارد EN 81</span>
      <span class="badge">استاندارد EN 115</span>
      <span class="badge">درایوهای VVVF و MRL</span>
      <span class="badge">اتوماسیون و ارتینگ</span>
    </div>
  </div>
</body>
</html>
"""

temp_html = 'd:/وب سایت بست/public/og-embedded.html'
with open(temp_html, 'w', encoding='utf-8') as f:
    f.write(html_content)

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
out_png = r'd:\وب سایت بست\public\og.png'

cmd = [
    chrome,
    '--headless=new',
    '--disable-gpu',
    '--window-size=1200,630',
    '--device-scale-factor=2',
    f'--screenshot={out_png}',
    f'file:///{temp_html}'
]

res = subprocess.run(cmd, capture_output=True, text=True)
time.sleep(2)

print('Generated og.png size:', os.path.getsize(out_png), 'bytes')
