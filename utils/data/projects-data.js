import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Laxmi Beauty Parlour - Omni-Channel Booking & Client Portal',
        description: "Architected a resilient full-stack scheduling platform with dual-layered database failover (Supabase + local fallback) ensuring zero downtime and 100% booking continuity during outages. Built a real-time notification broker using Telegram MTProto to syndicate customer details and cancellation routes to admin channels. Engineered an intelligent booking engine with collision prevention, dynamic duration calculation, and dual-barrier CAPTCHA review pipeline to block automated spam.",
        tools: ['React 18', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Telegram MTProto'],
        role: 'Full Stack Architect',
        code: '',
        demo: 'https://anita-beauty-parlour.vercel.app/',
        image: '',
    },
    {
        id: 2,
        name: 'Zoho Books & MySQL Real-Time Sync',
        description: "Reliable two-way sync for invoices, payments, and orders with idempotency, retry logic, and monitoring dashboards. Reduced reconciliation time and eliminated duplicate transactions.",
        tools: ['Python', 'Flask', 'MySQL', 'Zoho Books API', 'Webhooks', 'Redis'],
        role: 'Backend Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 3,
        name: 'E-Commerce Web App',
        description: "Responsive storefront with cart, order flow, PDF billing and cloud-hosted DB (MongoDB Atlas). Implemented secure APIs and server-side PDF generation.",
        tools: ['Node.js', 'Express', 'React', 'MongoDB', 'MUI'],
        role: 'MERN Stack Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 4,
        name: 'RedditReels',
        description: "Automated pipeline to fetch Reddit content, generate short videos, and upload to YouTube; includes metadata normalization and scheduling.",
        tools: ['Flask', 'Python', 'Reddit API', 'YouTube Data API', 'MoviePy', 'AWS'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 5,
        name: 'ChatPDF',
        description: "Q&A system for research PDFs with CLI and web interface; extracts, indexes, and answers questions from academic papers.",
        tools: ['Python', 'OpenAI API', 'Transformers', 'PyMuPDF'],
        role: 'AI / Backend Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 6,
        name: 'Amazon Telegram Publisher',
        description: "Pipeline to fetch Amazon listings, normalize metadata, and publish formatted Telegram posts with retry logic, logging, and scheduling.",
        tools: ['Python', 'Flask', 'PostgreSQL', 'Redis'],
        role: 'Backend Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 7,
        name: 'Branch IO Referral System',
        description: "Implemented dynamic link generation and server-side attribution handling to improve referral tracking and campaign analytics.",
        tools: ['Node.js', 'Redis', 'PostgreSQL', 'Branch IO'],
        role: 'Backend Engineer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 8,
        name: 'Scraper Optimization and Scaling',
        description: "Parallelized scraping jobs, added rate-limit handling and backoff strategies, and integrated a job queue to increase throughput and reliability.",
        tools: ['Python', 'Asyncio', 'Requests', 'Redis'],
        role: 'Python Developer',
        code: '',
        demo: '',
        image: '',
    },
    {
        id: 9,
        name: 'Q600 Industrial Ultrasonic Water Meter Calibration Dashboard',
        description: "Production-grade industrial test-bench system interfacing a web-based calibration UI with physical USB ACR1552U NFC Smartcard Readers. Implemented low-level hardware communication using Hexadecimal APDU commands to decode firmware barcodes, hardware versions, and modem statuses. Integrated a 15-Point Linear Splines (PWL) Math Solver to compute error percentage matrices and calibration factor offset curves (LUT) for precise water flow measurement. Designed real-time event logging via WebSockets for transponder tracking and automated secure data dumping into MySQL repositories.",
        tools: ['React.js', 'Python', 'FastAPI', 'Node Bridge', 'WebSockets', 'MySQL', 'Web-NFC', 'Core PCSC'],
        role: 'Full Stack Engineer',
        code: '',
        demo: '',
        image: crefin,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },