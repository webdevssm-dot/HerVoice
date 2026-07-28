import { ResourceAsset } from '../types';

/**
 * Utility to generate and trigger a download of a complete Resource Toolkit Pack.
 * Generates an official, beautifully formatted document containing full guidelines,
 * key takeaways, publisher metadata, emergency contacts, and actionable sections.
 */
export function downloadResourcePack(resource: ResourceAsset) {
  const sectionsHtml = (resource.packSections || [])
    .map(
      (sec) => `
    <div className="section-block" style="margin-bottom: 24px; padding: 18px; background: #faf5fc; border-left: 4px solid #e040a0; border-radius: 8px;">
      <h3 style="font-size: 13pt; font-weight: 800; color: #2e1a28; margin-top: 0; margin-bottom: 8px;">${sec.heading}</h3>
      <p style="font-size: 10.5pt; color: #4a3848; line-height: 1.6; margin-bottom: 10px;">${sec.content}</p>
      ${
        sec.bulletPoints && sec.bulletPoints.length > 0
          ? `<ul style="margin: 0; padding-left: 20px; color: #2e1a28; font-size: 10pt;">
              ${sec.bulletPoints.map((bp) => `<li style="margin-bottom: 6px;"><strong>${bp}</strong></li>`).join('')}
            </ul>`
          : ''
      }
    </div>
  `
    )
    .join('');

  const takeawaysHtml = (resource.keyTakeaways || [])
    .map((item) => `<li style="margin-bottom: 8px; color: #2e1a28; font-weight: 600;">✓ ${item}</li>`)
    .join('');

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${resource.title} - HerVoice Official Downloadable Pack</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 15mm 18mm 15mm;
    }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      color: #2e1a28;
      background: #ffffff;
      line-height: 1.6;
      font-size: 11pt;
      margin: 0;
      padding: 24px;
    }
    .header {
      border-bottom: 3px solid #e040a0;
      padding-bottom: 16px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .brand {
      font-size: 24pt;
      font-weight: 900;
      color: #e040a0;
      margin: 0;
    }
    .badge {
      display: inline-block;
      background: #fce8f5;
      color: #e040a0;
      font-size: 9pt;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 12px;
      text-transform: uppercase;
    }
    .meta-bar {
      background: #f0e5ff;
      border: 1px solid #d8beff;
      padding: 12px 18px;
      border-radius: 10px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 10pt;
    }
    .title {
      font-size: 20pt;
      font-weight: 900;
      color: #2e1a28;
      margin: 12px 0 6px 0;
      line-height: 1.25;
    }
    .description {
      font-size: 11pt;
      color: #523850;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .takeaways-box {
      background: #fff5fb;
      border: 1px solid #f2c2e5;
      border-radius: 10px;
      padding: 16px 20px;
      margin-bottom: 24px;
    }
    .takeaways-box h2 {
      font-size: 11pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #e040a0;
      margin-top: 0;
      margin-bottom: 12px;
    }
    .takeaways-box ul {
      margin: 0;
      padding-left: 0;
      list-style: none;
    }
    .footer {
      margin-top: 40px;
      padding-top: 16px;
      border-top: 1px solid #ebd8eb;
      font-size: 9pt;
      color: #7c52aa;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="no-print" style="margin-bottom: 20px; padding: 12px; background: #e040a0; color: #ffffff; text-align: center; border-radius: 8px; font-weight: bold; font-size: 11pt;">
    📄 Document Ready — Press Ctrl+P (or Cmd+P) to Save as PDF or Print This Toolkit Pack
  </div>

  <div className="header">
    <div>
      <h1 className="brand">HerVoice Botswana</h1>
      <p style="margin: 4px 0 0 0; font-size: 10pt; color: #7c52aa; font-weight: 700;">
        Youth Empowerment & Community Toolkit Series
      </p>
    </div>
    <div>
      <span className="badge">${resource.type}</span>
    </div>
  </div>

  <div className="meta-bar">
    <div>
      <strong>Publisher:</strong> ${resource.officialPublisher || 'HerVoice Network Botswana'}
    </div>
    <div>
      <strong>Format:</strong> ${resource.format} (${resource.fileSize || 'Standard Pack'})
    </div>
  </div>

  <h1 className="title">${resource.title}</h1>
  <p className="description">${resource.description || ''}</p>

  ${
    takeawaysHtml
      ? `<div class="takeaways-box">
          <h2>Key Contents & Capabilities Included in Pack:</h2>
          <ul>${takeawaysHtml}</ul>
        </div>`
      : ''
  }

  ${
    sectionsHtml
      ? `<div style="margin-top: 24px;">
          <h2 style="font-size: 12pt; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #7c52aa; border-bottom: 2px solid #f0e5ff; padding-bottom: 6px; margin-bottom: 16px;">
            Detailed Implementation Guide & Resources
          </h2>
          ${sectionsHtml}
        </div>`
      : ''
  }

  <div className="footer">
    <div>
      <strong>Citation:</strong> ${resource.citation || resource.officialPublisher || 'HerVoice Botswana Resource Library'}
    </div>
    <div>
      Official Portal: ${resource.sourceUrl || 'https://www.gov.bw'}
    </div>
  </div>
</body>
</html>
`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8;' });
  const blobUrl = URL.createObjectURL(blob);

  // Open formatted pack in window or trigger direct file download
  const win = window.open(blobUrl, '_blank');
  if (!win) {
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${resource.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-toolkit-pack.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
