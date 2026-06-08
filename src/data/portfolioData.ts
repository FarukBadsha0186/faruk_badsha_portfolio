export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  emoji: string;
  color: string;
}

export interface QACard {
  id: number;
  icon: string;
  title: string;
  description: string;
  badge: string;
  github?: string;
  hasModal: boolean;
  modalType: 'bugReport' | 'testCase' | 'framework' | 'generic';
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  tags: string[];
  content: string;
}

export interface CaseBug {
  id: number;
  title: string;
  type: string;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  method: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Shop – Full Stack E-Commerce",
    description: "Browse products, manage cart, checkout flow, order history, JWT auth, and admin dashboard — a complete e-commerce solution.",
    techStack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Tailwind"],
    liveDemo: "https://your-eshop-demo.vercel.app",
    github: "https://github.com/yourusername/eshop",
    emoji: "🛒",
    color: "from-brand-600 to-brand-800",
  },
  {
    id: 2,
    title: "BizDash – Business Dashboard",
    description: "রিয়েলটাইম চার্ট, ডাটা টেবিল, ফিল্টার সিস্টেম, PDF রিপোর্ট ডাউনলোড, রোলবেসড অ্যাক্সেস কন্ট্রোল সহ এন্টারপ্রাইজ ড্যাশবোর্ড।",
    techStack: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript", "Chart.js"],
    liveDemo: "https://your-bizdash-demo.vercel.app",
    github: "https://github.com/yourusername/bizdash",
    emoji: "📊",
    color: "from-accent-600 to-purple-800",
  },
  {
    id: 3,
    title: "NewsHub – News Portal",
    description: "ক্যাটাগরিভিত্তিক নিউজ ফিড, ফুলটেক্সট সার্চ, কমেন্ট সিস্টেম, এডিটর প্যানেল, রিয়েলটাইম ব্রেকিং নিউজ ব্যানার।",
    techStack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Socket.io"],
    liveDemo: "https://your-newshub-demo.vercel.app",
    github: "https://github.com/yourusername/newshub",
    emoji: "📰",
    color: "from-blue-600 to-cyan-800",
  },
];

export const qaCards: QACard[] = [
  {
    id: 1,
    icon: "⚙️",
    title: "Selenium Automation",
    description: "Java + TestNG ব্যবহার করে E2E অটোমেশন টেস্ট স্যুট। পেজ অবজেক্ট মডেল, ডেটা ড্রিভেন টেস্টিং এবং HTML রিপোর্ট জেনারেশন।",
    badge: "Java + TestNG",
    github: "https://github.com/yourusername/selenium-automation",
    hasModal: true,
    modalType: 'generic',
  },
  {
    id: 2,
    icon: "📬",
    title: "Postman API Testing",
    description: "১২০+ API এন্ডপয়েন্ট টেস্ট করা কালেকশন। প্রি-রিকোয়েস্ট স্ক্রিপ্ট, অ্যাসার্শন, এনভায়রনমেন্ট ভেরিয়েবল এবং নিউম্যান CI ইন্টিগ্রেশন।",
    badge: "Newman + CI",
    github: "https://github.com/yourusername/postman-collections",
    hasModal: true,
    modalType: 'generic',
  },
  {
    id: 3,
    icon: "🐛",
    title: "Jira / Bug Reports",
    description: "রিয়েল প্রজেক্টে রিপোর্ট করা বাগ স্যাম্পল। Severity, Priority, Steps to Reproduce, Expected vs Actual Result সহ প্রফেশনাল টেমপ্লেট।",
    badge: "Jira + Zephyr",
    hasModal: true,
    modalType: 'bugReport',
  },
  {
    id: 4,
    icon: "⚡",
    title: "JMeter Load Testing",
    description: "500+ কনকারেন্ট ইউজার লোড সিমুলেশন। থ্রেড গ্রুপ, র‍্যাম্প-আপ পিরিয়ড, Response Time এবং Throughput অ্যানালাইসিস রিপোর্ট।",
    badge: "500 VUsers",
    github: "https://github.com/yourusername/jmeter-tests",
    hasModal: true,
    modalType: 'generic',
  },
  {
    id: 5,
    icon: "📋",
    title: "Manual Test Cases",
    description: "ই-কমার্স লগইন ফ্লোর ১৫টি টেস্ট কেস। Positive, Negative, Boundary Value Analysis কভার করা বিস্তারিত ডকুমেন্টেশন।",
    badge: "15 Test Cases",
    hasModal: true,
    modalType: 'testCase',
  },
  {
    id: 6,
    icon: "🏗️",
    title: "Automation Framework",
    description: "Hybrid Framework বিল্ড করা POM + Data-Driven + Keyword-Driven। Maven বিল্ড, Log4j লগিং, Extent Report জেনারেশন।",
    badge: "Hybrid POM",
    github: "https://github.com/yourusername/automation-framework",
    hasModal: true,
    modalType: 'framework',
  },
];

export const caseBugs: CaseBug[] = [
  {
    id: 1,
    title: "Breaking News লোডে ৫+ সেকেন্ড ল্যাগ",
    type: "Performance Bug",
    severity: "Critical",
    method: "JMeter Load Testing",
    description: "১০০+ কনকারেন্ট ইউজার থাকলে ব্রেকিং নিউজ API রেসপন্স টাইম ৫.২ সেকেন্ড হয়ে যায়। কারণ: ডাটাবেজ ইন্ডেক্সিং না থাকা, N+1 কোয়েরি প্রবলেম।",
    icon: "⚡",
  },
  {
    id: 2,
    title: "মোবাইলে 'Read More' বাটন ক্লিকযোগ্য নয়",
    type: "UI/UX Bug",
    severity: "High",
    method: "Cross-Browser Testing",
    description: "iOS Safari ও Android Chrome-এ ৩২০px–৪২০px viewport-এ 'Read More' বাটনের উপর নেভিগেশন ওভারলে পড়ে। z-index conflict এবং touch event ব্লকিং।",
    icon: "📱",
  },
  {
    id: 3,
    title: "ক্যাটাগরি ফিল্টার ভুল নিউজ দেখায়",
    type: "Functional Bug",
    severity: "High",
    method: "Functional Testing",
    description: "'Sports' ক্যাটাগরি সিলেক্ট করলে 'Politics' নিউজও আসে। URL পারামিটার এনকোডিং ইস্যু এবং সার্ভার-সাইড ফিল্টার লজিকে কেস-সেনসিটিভিটি বাগ।",
    icon: "🔍",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Every Developer Should Learn Basic Testing",
    excerpt: "ডেভেলপার হিসেবে টেস্টিং শেখা কেন আপনার ক্যারিয়ারে গেম-চেঞ্জার হতে পারে — এবং কীভাবে শুরু করবেন।",
    readTime: "6 min read",
    date: "March 2025",
    tags: ["Testing", "Career", "Developer"],
    content: `## Why Every Developer Should Learn Basic Testing

আপনি কি কখনো প্রোডাকশনে বাগ দেখে অবাক হয়েছেন যেটা লোকাল ডেভেলপমেন্টে ছিলই না? এটা প্রায় সব ডেভেলপারের সাথে হয়। কারণ একটাই — টেস্টিং।

### ১. টেস্টিং শিখলে কোড কোয়ালিটি বাড়ে

যখন আপনি জানেন টেস্টার কীভাবে বাগ খোঁজেন, তখন আপনি কোড লেখার সময়ই সেই দুর্বলতাগুলো এড়িয়ে চলেন। Boundary conditions চেক করেন, edge cases হ্যান্ডেল করেন।

### ২. QA + Dev = ডাবল ভ্যালু

বাংলাদেশের জব মার্কেটে যে ডেভেলপার বলতে পারেন "আমি কোড লিখতে এবং টেস্ট করতে দুটোই পারি" — তার মার্কেট ভ্যালু অনেক বেশি। রিমোট জবে এই স্কিল কম্বো প্রায়ই ডিসাইডিং ফ্যাক্টর।

### ৩. কীভাবে শুরু করবেন?

**Step 1:** Unit Testing শিখুন — Jest বা Vitest দিয়ে আপনার React কম্পোনেন্ট টেস্ট করুন।

**Step 2:** API Testing — Postman দিয়ে নিজের বানানো API টেস্ট করুন। প্রতিটি এন্ডপয়েন্টের জন্য Assertion লিখুন।

**Step 3:** Basic Selenium — যেকোনো একটি ওয়েব পেজের লগইন ফ্লো অটোমেট করুন।

### ৪. রিয়েল উদাহরণ

আমি নিজে NewsHub প্রজেক্টে ডেভেলপমেন্ট শেষে JMeter দিয়ে লোড টেস্ট করতে গিয়ে দেখলাম ৫০+ ইউজারে অ্যাপ ক্র্যাশ করছে। কারণ MongoDB-তে index ছিল না। ৫ মিনিটে ফিক্স — কিন্তু টেস্টিং না করলে প্রোডাকশনে যেত।

**উপসংহার:** টেস্টিং শেখা আপনার ডেভেলপার পরিচয় কমায় না, বরং সম্পূর্ণ করে।`,
  },
  {
    id: 2,
    title: "How I Automate API Testing with Postman",
    excerpt: "Postman শুধু API চেক করার টুল না — এটা দিয়ে পুরো টেস্ট স্যুট বানানো যায়। আমার প্র্যাকটিকাল গাইড।",
    readTime: "8 min read",
    date: "February 2025",
    tags: ["Postman", "API Testing", "Automation"],
    content: `## How I Automate API Testing with Postman

অনেকে মনে করেন Postman মানে শুধু API-তে রিকোয়েস্ট পাঠানো। কিন্তু Postman দিয়ে আপনি পুরো অটোমেটেড টেস্ট স্যুট বানাতে পারেন।

### Postman-এর মূল শক্তি

**১. Collections & Environments**

সব API রিকোয়েস্ট একটি Collection-এ গুছিয়ে রাখুন। Development, Staging, Production — আলাদা Environment বানান। \`{{base_url}}\` ভেরিয়েবল ব্যবহার করুন।

**২. Pre-request Scripts**

\`\`\`javascript
// টোকেন অটো-রিফ্রেশ
const tokenExpiry = pm.environment.get('tokenExpiry');
if (!tokenExpiry || Date.now() > tokenExpiry) {
  pm.sendRequest({
    url: pm.environment.get('base_url') + '/auth/refresh',
    method: 'POST',
    body: { mode: 'raw', raw: JSON.stringify({ refreshToken: pm.environment.get('refreshToken') }) }
  }, (err, res) => {
    pm.environment.set('accessToken', res.json().accessToken);
  });
}
\`\`\`

**৩. Test Scripts (Assertions)**

\`\`\`javascript
// Status code চেক
pm.test("Status 200", () => pm.response.to.have.status(200));

// Response time চেক
pm.test("Response under 500ms", () => pm.expect(pm.response.responseTime).to.be.below(500));

// Schema validation
pm.test("User has required fields", () => {
  const body = pm.response.json();
  pm.expect(body).to.have.property('id');
  pm.expect(body).to.have.property('email');
  pm.expect(body.email).to.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/);
});
\`\`\`

### Newman দিয়ে CI/CD Integration

\`\`\`bash
# Install Newman
npm install -g newman

# Run collection
newman run My-API-Collection.json -e Production.json --reporters html,cli

# GitHub Actions-এ
- name: Run API Tests
  run: newman run collection.json -e env.json
\`\`\`

### আমার Workflow

১. নতুন ফিচার → API ডিজাইন → Postman-এ টেস্ট কেস লিখি
২. ডেভেলপমেন্ট চলাকালে প্রতিটি এন্ডপয়েন্ট টেস্ট করি
৩. PR মার্জের আগে Newman দিয়ে ফুল স্যুট রান

**ফলাফল:** ১২০+ টেস্ট, ৯৮% পাস রেট, বাগ ধরা পড়ে প্রোডাকশনের আগেই।`,
  },
];
