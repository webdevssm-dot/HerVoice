/**
 * Utility to download or print an A4 Brief for HerVoice content.
 * Formats the document with proper margins, typography, official citations, and print styles.
 */

interface BriefData {
  title: string;
  subtitle?: string;
  category?: string;
  publisherOrCountry?: string;
  officialCitation?: string;
  sourceUrl?: string;
  bodyText: string;
  highlights?: string[];
}

export function downloadA4Brief(data: BriefData) {
  // Create a blob containing formatted printable HTML document
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${data.title} - HerVoice Summary Document</title>
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
      padding: 20px;
    }
    .header {
      border-bottom: 3px solid #e040a0;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .brand {
      font-size: 22pt;
      font-weight: 900;
      color: #e040a0;
      margin: 0;
    }
    .badge {
      display: inline-block;
      background: #fce8f5;
      color: #e040a0;
      font-size: 8pt;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 12px;
      text-transform: uppercase;
      margin-left: 8px;
    }
    .title {
      font-size: 18pt;
      font-weight: 800;
      color: #2e1a28;
      margin: 10px 0 4px 0;
    }
    .subtitle {
      font-size: 11pt;
      color: #7c52aa;
      font-weight: 600;
      margin-bottom: 15px;
    }
    .section-title {
      font-size: 10pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #7c52aa;
      border-bottom: 1px solid #f2e8f2;
      padding-bottom: 4px;
      margin-top: 18px;
      margin-bottom: 8px;
    }
    .body-text {
      font-size: 10.5pt;
      color: #333333;
      white-space: pre-wrap;
      margin-bottom: 15px;
    }
    .highlight-box {
      background: #f0e5ff;
      border: 1px solid #d8beff;
      border-radius: 8px;
      padding: 12px 15px;
      margin: 15px 0;
    }
    .highlight-box ul {
      margin: 5px 0 0 18px;
      padding: 0;
    }
    .highlight-box li {
      margin-bottom: 4px;
      font-weight: 600;
      color: #2e1a28;
    }
    .citation-box {
      background: #fcf7fc;
      border: 1px solid #f2e8f2;
      border-radius: 8px;
      padding: 10px 14px;
      margin-top: 20px;
      font-size: 9pt;
      color: #604868;
    }
    .footer {
      margin-top: 30px;
      border-top: 1px solid #e040a0;
      padding-top: 10px;
      font-size: 8pt;
      color: #886690;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 class="brand">HerVoice <span class="badge">Summary</span></h1>
      <p style="margin: 4px 0 0 0; font-size: 9pt; color: #7c52aa; font-weight: 700;">
        Official Executive Summary & Document Pack
      </p>
    </div>
    <div style="text-align: right; font-size: 8.5pt; color: #604868;">
      <div><strong>Region:</strong> ${data.publisherOrCountry || 'Botswana'}</div>
      <div><strong>Category:</strong> ${data.category || 'General'}</div>
      <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
    </div>
  </div>

  <h2 class="title">${data.title}</h2>
  ${data.subtitle ? `<div class="subtitle">"${data.subtitle}"</div>` : ''}

  <div class="section-title">Key Content & Overview</div>
  <div class="body-text">${data.bodyText}</div>

  ${
    data.highlights && data.highlights.length > 0
      ? `
    <div class="highlight-box">
      <div style="font-weight: 800; font-size: 9pt; text-transform: uppercase; color: #7c52aa;">Key Milestones & Protections</div>
      <ul>
        ${data.highlights.map((h) => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `
      : ''
  }

  ${
    data.officialCitation
      ? `
    <div class="citation-box">
      <strong>Official Citation:</strong> ${data.officialCitation}<br/>
      ${data.sourceUrl ? `<strong>Source URL:</strong> <a href="${data.sourceUrl}" target="_blank">${data.sourceUrl}</a>` : ''}
    </div>
  `
      : ''
  }

  <div class="footer">
    © ${new Date().getFullYear()} HerVoice Empowerment Platform | Official Summary Document | www.hervoice.org.bw
  </div>

  <script>
    window.onload = function() {
      window.print();
    };
  </script>
</body>
</html>
  `;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const blobUrl = URL.createObjectURL(blob);
  const printWindow = window.open(blobUrl, '_blank');

  if (!printWindow) {
    // If popups are blocked, download HTML/PDF brief directly
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${data.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}-summary.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
