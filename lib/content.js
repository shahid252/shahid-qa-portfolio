export const profile = {
  name: "Shahid Rasheed",
  first: "Shahid",
  last: "Rasheed",
  role: "SQA Automation Engineer",
  location: "Karachi, Pakistan",
  email: "shahid.rasheed252@gmail.com",
  phone: "+92 345 2764252",
  phoneHref: "tel:+923452764252",
  linkedin: "https://www.linkedin.com/in/shahidrasheed252",
  github: "https://github.com/shahid252",
  resume: "/Shahid-Rasheed-Resume.pdf",
  summary:
    "SQA Automation Engineer with 4+ years of experience in manual and automation testing across FinTech, e-commerce,\n" +
      "ride-hailing, and recruitment platforms. Skilled in designing automation frameworks and executing comprehensive testing for\n" +
      "web applications, mobile apps, and APIs. Proficient in AI assisted test automation using Cursor and Claude, integrating\n" +
      "automated test suites into CI/CD pipelines with Jenkins and GitHub Actions, and implementing testing strategies to improve\n" +
      "software quality, reduce risks, and accelerate release cycles",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
];

export const stats = [
  { value: "4+", label: "Years in SQA" },
  { value: "3", label: "Layers automated", detail: "UI · API · Mobile" },
  { value: "10", label: "Certifications" },
];

export const tools = [
  "Playwright",
  "Selenium",
  "Appium",
  "Mocha",
  "Chai",
  "Axios",
  "RestSharp",
  "REST Assured",
  "SpecFlow",
  "Cucumber",
  "Jenkins",
  "GitHub Actions",
  "TestRail",
  "Postman",
  "JMeter",
  "Cursor",
];

export const roles = [
  {
    company: "VentureDive",
    title: "SQA Automation Engineer",
    dates: "Sep 2025 — Sep 2026",
    place: "Remote, Pakistan",
    summary:
      "Quality for Savoya, a ride-hailing platform, and Dawlati, a hiring platform — covering web, mobile, API, and Flutter, with frameworks in CI.",
    points: [
      "Wrote test cases and ran functional, regression, smoke, and exploratory testing across web, mobile, API, and Flutter.",
      "Built Savoya’s UI automation framework in Playwright and JavaScript with the Page Object Model, and executed the manual suite alongside it.",
      "Built Savoya’s API automation framework with Mocha and Axios for multiple HTTP methods, and Chai for assertions.",
      "Built a mobile automation framework for the Dawlati jobseeker app with Appium (Python) on Android and iOS, including XCUITest for iOS.",
      "Developed Flutter integration tests for end-to-end cross-platform checks.",
      "Tested Stripe payment flows: successful and failed charges, status updates, and error handling.",
      "Connected suites to Jenkins, GitHub Actions, and Bitbucket Pipelines, with scheduled regression and TestRail for execution and traceability.",
      "Used Cursor and Claude — custom rules, reusable skills, and templates — to speed up test authoring, debugging, and consistency.",
      "Routed run updates through Slack, Google Chat, and email.",
    ],
    tags: ["Playwright", "Mocha", "Axios", "Chai", "Appium", "Python", "Jenkins", "TestRail"],
  },
  {
    company: "TPS Worldwide",
    title: "SQA Automation Engineer",
    dates: "Aug 2024 — Sep 2025",
    place: "Karachi, Pakistan",
    summary:
      "Digital banking team. System integration testing for transaction flows, plus a hybrid UI, API, and mobile framework.",
    points: [
      "Ran system integration testing for fund transfers, transaction status, response validation, and record checks across banking services.",
      "Maintained a hybrid framework: Selenium with C# for web UI, RestSharp for API payloads, status codes, business rules, and errors, and Appium for mobile.",
      "Extended the Appium framework for a digital wallet, with reusable helpers and Appium Inspector for faster element identification.",
      "Added SpecFlow feature files and step definitions so new banking behaviour was covered in a BDD style.",
      "Worked with development, product, and QA to trace integration defects, confirm fixes, and keep services talking to each other.",
    ],
    tags: ["Selenium", "C#", "RestSharp", "Appium", "SpecFlow", "SIT"],
  },
  {
    company: "Small World Financial Services",
    title: "QA Automation Engineer",
    dates: "Aug 2023 — Aug 2024",
    place: "Karachi, Pakistan",
    summary:
      "Agile testing on the Omnex product, focused on fund transfers, fees, and tax calculations.",
    points: [
      "Joined sprint planning, standups, and retrospectives and delivered checks incrementally.",
      "Executed positive, negative, and boundary scenarios for transfers, fee and tax amounts, and financial calculations.",
      "Automated web flows with Selenium WebDriver and Cucumber, using Gherkin so cases stayed readable for the team.",
      "Tracked defects in Jira and built test plans in Xray, linking cases to requirements.",
      "Ran smoke and regression after releases and kept the regression suite current.",
      "Raised pull requests and ran the suite through GitHub Actions.",
    ],
    tags: ["Selenium", "Cucumber", "Gherkin", "Xray", "Jira", "GitHub Actions"],
  },
  {
    company: "HashPotato",
    title: "Associate SQA Engineer",
    dates: "Jan 2023 — Aug 2023",
    place: "Karachi, Pakistan",
    summary:
      "Manual and performance testing on web and mobile products, from localhost builds to live releases.",
    points: [
      "Ran smoke, regression, functional, and non-functional testing on web and mobile in multiple environments.",
      "Wrote bug reports and managed them in ClickUp so developers had a clear queue.",
      "Ran performance tests with Apache JMeter and BlazeMeter.",
      "Tested localhost and live projects, using GitHub for the work.",
    ],
    tags: ["Manual testing", "JMeter", "BlazeMeter", "ClickUp"],
  },
  {
    company: "Qisstpay",
    title: "SQA Intern",
    dates: "Oct 2022 — Dec 2022",
    place: "Remote, Pakistan",
    summary:
      "Hands-on testing across devices, browsers, and phases, with ownership of defect reporting.",
    points: [
      "Created test cases and executed them on multiple devices, platforms, and browsers.",
      "Covered UI, functional, regression, integration, and sanity phases.",
      "Documented results and bug reports, and followed up on inconsistent behaviour in web and mobile apps.",
    ],
    tags: ["Test cases", "Cross-browser", "Bug reports"],
  },
];

export const clientProjects = [
  {
    number: "01",
    name: "Savoya",
    kicker: "Ride-hailing · VentureDive",
    summary:
      "A ride-hailing platform. I owned test design, manual execution, and two automation frameworks that sit next to each other: UI and API.",
    highlights: [
      {
        title: "UI framework",
        text: "Playwright with JavaScript and the Page Object Model, so screens stay maintainable as the product moves.",
      },
      {
        title: "API framework",
        text: "Mocha and Axios for different HTTP methods, with Chai assertions on status, payload, and failure paths.",
      },
      {
        title: "Manual coverage",
        text: "Test cases and hands-on execution for functional, regression, smoke, and exploratory passes, run alongside the automated suites.",
      },
    ],
    tags: ["Playwright", "JavaScript", "POM", "Mocha", "Axios", "Chai"],
  },
  {
    number: "02",
    name: "Dawlati",
    kicker: "Hiring platform · VentureDive",
    summary:
      "Mobile automation for the jobseeker app. One Appium framework covers Android and iOS so the same journeys can be trusted on both.",
    highlights: [
      {
        title: "Jobseeker app",
        text: "Appium with Python for Android and iOS, with XCUITest support on iOS.",
      },
      {
        title: "One framework",
        text: "Shared flows for both platforms, so the jobseeker journeys are not maintained as two separate script piles.",
      },
    ],
    tags: ["Appium", "Python", "Android", "iOS", "XCUITest", "Flutter"],
  },
  {
    number: "03",
    name: "Digital banking",
    kicker: "TPS Worldwide · Digital banking team",
    summary:
      "A hybrid framework for banking transactions: web UI, API contracts, and a digital wallet, held together with SpecFlow.",
    highlights: [
      {
        title: "Web and API",
        text: "Selenium with C# for the UI. RestSharp for request and response payloads, status codes, business rules, and error handling.",
      },
      {
        title: "Mobile wallet",
        text: "Appium coverage for the digital wallet, with helpers and Appium Inspector to speed up locators.",
      },
      {
        title: "Integration",
        text: "System integration scenarios for fund transfers, status updates, and records across connected services.",
      },
    ],
    tags: ["Selenium", "C#", "RestSharp", "Appium", "SpecFlow"],
  },
  {
    number: "04",
    name: "Omnex",
    kicker: "Payments · Small World Financial Services",
    summary:
      "Financial correctness on a transfer product: fees, tax, and calculation checks, automated with Selenium and Cucumber.",
    highlights: [
      {
        title: "What was validated",
        text: "Positive, negative, and boundary cases for fund transfers and mismatches in fee and tax amounts.",
      },
      {
        title: "How it shipped",
        text: "Gherkin scenarios, Jira and Xray traceability, and GitHub Actions on the regression suite.",
      },
    ],
    tags: ["Selenium", "Cucumber", "Xray", "GitHub Actions"],
  },
];

export const openSource = [
  {
    number: "05",
    name: "API automation with REST Assured",
    kicker: "API · BDD",
    summary:
      "An API testing framework using REST Assured and Cucumber, so scenarios stay readable while HTTP coverage stays strict.",
    url: "https://github.com/shahid252/API_Automation_task",
    tags: ["REST Assured", "Cucumber", "Java"],
  },
  {
    number: "06",
    name: "UI automation with Selenium and Cucumber",
    kicker: "UI · BDD",
    summary:
      "A client UI automation project using Selenium, TestNG, and Cucumber for a behaviour-driven web suite.",
    url: "https://github.com/shahid252/UI-Automation-Selenium-Cucumber",
    tags: ["Selenium", "TestNG", "Cucumber"],
  },
  {
    number: "07",
    name: "Selenium TestNG framework",
    kicker: "UI · Framework",
    summary:
      "A Selenium and TestNG project structured as a reusable UI automation framework.",
    url: "https://github.com/shahid252/Selenium-Framework",
    tags: ["Selenium", "TestNG", "Java"],
  },
  {
    number: "08",
    name: "Vinted product scraper",
    kicker: "Desktop automation",
    summary:
      "A Python and Playwright desktop tool that collects Vinted listings and exports structured data to Excel.",
    url: "https://github.com/shahid252/vinted-automation",
    tags: ["Python", "Playwright", "Excel"],
  },
  {
    number: "09",
    name: "AWS infrastructure with CloudFormation",
    kicker: "Infrastructure",
    summary:
      "CloudFormation templates that provision EC2, RDS (MySQL), and S3 as infrastructure as code.",
    url: "https://github.com/shahid252/Cloud-fromation-AWS",
    tags: ["AWS", "CloudFormation", "RDS", "S3"],
  },
];

export const skillGroups = [
  {
    title: "UI automation",
    text: "Frameworks I have designed and extended, usually with a page object or BDD layer.",
    items: ["Playwright", "Selenium", "TestNG", "NUnit", "Page Object Model", "JavaScript", "Java", "C#"],
  },
  {
    title: "API automation",
    text: "Contract checks across HTTP methods, payloads, status codes, and business rules.",
    items: ["Mocha", "Axios", "Chai", "REST Assured", "RestSharp", "Postman", "SoapUI"],
  },
  {
    title: "Mobile",
    text: "Native and cross-platform suites, from locator strategy through to device runs.",
    items: ["Appium", "Appium Inspector", "Android", "iOS", "XCUITest", "Flutter integration tests", "Python"],
  },
  {
    title: "BDD and languages",
    text: "Readable scenarios for teams that review tests the same way they review features.",
    items: ["Cucumber", "SpecFlow", "Gherkin", "JavaScript", "Java", "C#", "Python"],
  },
  {
    title: "Delivery",
    text: "Suites that run when the branch moves, not only when someone remembers to click.",
    items: ["Jenkins", "GitHub Actions", "Bitbucket Pipelines", "Azure DevOps", "Git", "GitHub", "TestRail"],
  },
  {
    title: "Quality practice",
    text: "The manual and investigative work that tells the frameworks what is worth automating.",
    items: [
      "Test case design",
      "Functional testing",
      "Regression and smoke",
      "Exploratory testing",
      "API testing",
      "SIT",
      "SQL",
      "JMeter",
      "BlazeMeter",
      "Stripe payments",
      "Jira",
      "Xray",
      "ClickUp",
    ],
  },
];

export const education = [
  {
    school: "Allama Iqbal Open University",
    program: "Bachelor of Education",
    detail: "Basics of IT, General Mathematics",
    year: "2022",
  },
  {
    school: "Hamdard College of Science, Karachi",
    program: "Intermediate",
    detail: "Pre-Engineering",
    year: "2014",
  },
  {
    school: "Contour, Karachi",
    program: "SQA Boot Camp",
    detail: "Manual testing, test design, defect reporting, and automation fundamentals.",
    year: "2022",
  },
];

export const certifications = [
  { name: "Introduction to JavaScript", by: "TestAutomationU", year: "2024" },
  { name: "Automation with Selenium WebDriver and TestNG", by: "10Pearls University", year: "2023" },
  { name: "SQL (Basic)", by: "HackerRank", year: "2023" },
  { name: "Cucumber with Java", by: "TestAutomationU", year: "2022" },
  { name: "Automating your API tests with REST Assured", by: "TestAutomationU", year: "2022" },
  { name: "Selenium 4 in Java", by: "TestAutomationU", year: "2022" },
  { name: "Introduction to TestNG", by: "TestAutomationU", year: "2022" },
  { name: "QA Fundamentals", by: "10Pearls University", year: "2022" },
  { name: "Software Testing", by: "MyGreatLearning", year: "2022" },
  { name: "API Testing Using Postman", by: "MindLuster", year: "2022" },
];
