export default function App() {
  // Served from /public; BASE_URL makes it work on GitHub Pages subpath
  const pdfFile = 'Tafsik_Report_2025-CRF_Bias_Strategic_Audit.pdf';
  const pdfUrl = `${import.meta.env.BASE_URL}${pdfFile}`;

  return (
    <main style={{ maxWidth: 980, margin: '40px auto', padding: '0 20px' }}>
      <h1>Misaligned Priorities: A Strategic Audit</h1>

      <p>
        Download the full report:&nbsp;
        <a href={pdfUrl} download>
          Tafsik Report 2025 — CRF Bias Strategic Audit (PDF)
        </a>
        &nbsp;|&nbsp;
        <a href={pdfUrl} target="_blank" rel="noreferrer">
          Open in browser
        </a>
      </p>

      {/* Your existing content/components go here */}
    </main>
  );
}
