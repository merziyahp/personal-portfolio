
export const projectsContent = {
  title: "Side Projects",
  description: "Personal experiments in product, AI, and rapid prototyping",
  projects: [
    {
      id: "receipt-parser",
      title: "Receipt Parser",
      tagline: "Fast AI MVP for Personal Expense Tracking",
      tags: ["AI/ML", "MVP", "No-code"]
      media: [
        {
          type: "image",
          url: "/images/projects/receipt-parser-1.png",
          alt: "App Splash Page",
        },
        {
          type: "image",
          url: "/images/projects/receipt-parser-2.jpg",
          alt: "Parsed receipt data",
        },
      ],
      content: [
        {
          type: "heading",
          level: 2,
          content: "Overview",
        },
        {
          type: "paragraph",
          content: "A friend wanted a simple way to track their day-to-day spending from grocery and retail receipts. They were manually keeping receipts and struggled with collecting receipts to analyze total spending. Unsurprisingly, the process was slow, error-prone, and easy to abandon.",
        },
        {
          type: "paragraph",
          content: "I set out to build a lean, AI-powered MVP that would answer one question:",
        },
        {
          type: "quote",
          content: "Can we make it fast and painless enough to scan receipts that the user will actually keep up with it?",
        },
        {
          type: "heading",
          level: 2,
          content: "Context & Problem",
        },
        {
          type: "heading",
          level: 3,
          content: "User problem:",
        },
        {
          type: "paragraph",
          content: "Capture key spending data from paper receipts quickly enough that tracking doesn't feel like work.",
        },
        {
          type: "paragraph",
          content: "From a few short conversations and walkthroughs of their current process, I defined the initial problem as:",
        },
        {
          type: "list",
          content: [
            "Turning paper or photo receipts into structured data",
            "With as few taps and as little manual entry as possible",
            "While still giving them enough insight to see patterns in their spending",
          ],
        },
        {
          type: "heading",
          level: 3,
          content: "Key constraints",
        },
        {
          type: "list",
          content: [
            "Single-user product, primarily mobile",
            "Seamless/quick receipt scanning",
            "Basic analytics only: totals, date and store filters",
            "Minimal backend complexity – this is a personal tool, not an enterprise platform",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Goals & Success Metrics",
        },
        {
          type: "paragraph",
          content: "For the MVP, I focused on:",
        },
        {
          type: "list",
          content: [
            "Speed of capture: target 'feel' of ~3 seconds per receipt from scan to stored record (v1 landed closer to ~5 seconds in practice, including LLM latency and validation).",
            "Retention signal: do they come back to use it multiple times a week (DAU/WAU as a simple proxy)?",
          ],
        },
        {
          type: "paragraph",
          content: "The idea wasn't to perfect the analytics, but to validate that receipt capture could be made 'lightweight enough to be a habit.'",
        },
        {
          type: "heading",
          level: 2,
          content: "Approach",
        },
        {
          type: "paragraph",
          content: "Given the constraints, I deliberately chose a simple, 'boring' stack:",
        },
        {
          type: "list",
          content: [
            "Front-end / App shell: AppSheet PWA",
            "Database: Google Sheets",
            "OCR: Google Vision via AppSheet's built-in OCR",
            "Text parsing: Gemini, invoked via Google Apps Script",
          ],
        },
        {
          type: "paragraph",
          content: "This let me move quickly with a spreadsheet backend I could inspect, use out-of-the-box OCR instead of wiring it from scratch, and swap in LLM-based parsing once I hit the limits of in-tool models.",
        },
        {
          type: "heading",
          level: 2,
          content: "Solution",
        },
        {
          type: "paragraph",
          content: "The resulting MVP is a small PWA receipt scanner that:",
        },
        {
          type: "list",
          content: [
            "Opens directly into a 'scan receipt' flow on mobile",
            "Uses AppSheet + Vision OCR to read the receipt text",
            "Sends the OCR text to Gemini, which returns: Store name, Date and time, Total purchase amount",
            "Writes structured data into a Google Sheet",
            "Lets the user quickly review and correct any misread fields, filter receipts by date range and store, and view total spend over a period",
          ],
        },
        {
          type: "paragraph",
          content: "In practice, the user can scan, validate, and save a receipt in around five seconds, with most of the work handled by OCR + Gemini.",
        },
        {
          type: "heading",
          level: 2,
          content: "Outcome",
        },
        {
          type: "paragraph",
          content: "The MVP achieved its main goals:",
        },
        {
          type: "list",
          content: [
            "Fast capture: receipt entry dropped from 'open spreadsheet, type numbers' to a few taps and a quick glance.",
            "Usable data: receipts are consistently stored with the same core fields, making simple analysis possible without extra work.",
            "Clear product direction: building the MVP surfaced the real-world quirks of receipt data, where human review is needed, and how the stack behaves under latency and variation.",
          ],
        },
        {
          type: "heading",
          level: 2,
          content: "Thinking Beyond the MVP",
        },
        {
          type: "paragraph",
          content: "While AppSheet + Sheets was perfect for this v1, it's not where I'd scale the product. A V2 roadmap could include richer analysis, deeper parsing of line items, and an upgraded architecture with a more flexible front-end framework and database backend.",
        },
        {
          type: "paragraph",
          content: "This case is a good example of how I like to work: start with a narrow, real user problem, build the simplest possible AI-powered MVP that can prove (or disprove) the concept, and then use what we've learned to decide how – and whether – to evolve it into a more robust product.",
        },
      ],
    },
  ],
};
