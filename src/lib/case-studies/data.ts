export type CaseVisualKind = "visa" | "retail" | "edtech" | "automation" | "travel";

export type CaseStudy = {
  id: string;
  number: string;
  category: string;
  filter: string;
  title: string;
  description: string;
  tags: string[];
  challenge: string;
  approach: string;
  outcome: string;
  features: string[];
  visual: CaseVisualKind;
  status: "case-study" | "selected-work";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "visa-filing-platform",
    number: "01",
    category: "Immigration Technology",
    filter: "Technology",
    title: "Simplifying the Visa Filing Experience",
    description:
      "We designed and built a fully automated visa filing platform that makes it easier for individuals to discover, apply and track their applications — without the usual confusion, delays or manual follow-ups.",
    tags: ["Strategy", "UX/UI Design", "Product Development", "Automation"],
    challenge:
      "A visa application journey can involve multiple forms, documents, communications and manual follow-ups. We set out to turn this fragmented process into one connected digital experience.",
    approach:
      "We designed a user-centric platform that brings eligibility assessment, guided applications, document management, application tracking and automated communication into one workflow.",
    outcome:
      "A smoother, more structured visa journey that allows applicants to complete their submissions with less friction while giving professionals a centralized way to manage applications.",
    features: [
      "Visa discovery",
      "Eligibility assessment",
      "Guided application",
      "Document collection",
      "Application tracking",
      "Automated updates",
      "Client dashboard",
      "Secure data management",
    ],
    visual: "visa",
    status: "case-study",
  },
  {
    id: "franchise-retail-crm",
    number: "02",
    category: "Retail Technology",
    filter: "CRM",
    title: "Run Your Entire Franchise From One Place",
    description:
      "We developed a fully functional CRM and retail management platform for franchise owners who want to manage their business without the hassle of separate systems for accounts, stock, staff and salaries.",
    tags: ["CRM", "Retail Technology", "Operations", "Business Management"],
    challenge:
      "Running a franchise often means managing sales, inventory, staff, salaries, expenses and reporting across different tools. This makes daily operations harder to control and gives owners limited visibility.",
    approach:
      "We built a centralized CRM that connects the major areas of franchise operations into one platform.",
    outcome:
      "From operational complexity to one connected management system. The platform gives franchise owners a single place to understand and manage their business.",
    features: [
      "Sales & store management",
      "Inventory & stock",
      "Staff & attendance",
      "Salary management",
      "Finance & expenses",
      "Reporting",
      "Store performance",
    ],
    visual: "retail",
    status: "case-study",
  },
  {
    id: "online-learning-platform",
    number: "03",
    category: "EdTech",
    filter: "EdTech",
    title: "A Better Way to Learn Online",
    description:
      "We designed and developed a modern EdTech website for an online course platform, making it easier for learners to discover programs, explore course content and begin their learning journey.",
    tags: ["Web Development", "UX/UI", "EdTech", "Conversion Design"],
    challenge:
      "Online learning platforms can quickly become difficult to navigate when learners have many courses and programs to choose from.",
    approach:
      "We structured the experience around the learner journey. From discovering a course to understanding its curriculum and moving toward enrollment, every section was designed to provide clarity.",
    outcome:
      "A modern digital learning experience that makes discovering and choosing courses simple.",
    features: [
      "Course discovery",
      "Categories",
      "Course detail pages",
      "Curriculum",
      "Instructor information",
      "Enrollment journey",
      "Responsive design",
      "Scalable content architecture",
    ],
    visual: "edtech",
    status: "case-study",
  },
  {
    id: "connected-workflows",
    number: "04",
    category: "Business Automation",
    filter: "Automation",
    title: "From Manual Work to Connected Workflows",
    description:
      "A selected business automation concept demonstrating how disconnected operational tasks can be brought into one streamlined digital workflow.",
    tags: ["Automation", "Workflow", "Web Application", "Business Systems"],
    challenge: "",
    approach: "",
    outcome: "",
    features: ["Input", "Process", "Approval", "Automation", "Reporting"],
    visual: "automation",
    status: "selected-work",
  },
  {
    id: "travel-discovery",
    number: "05",
    category: "Travel Technology",
    filter: "Web Development",
    title: "Making Travel Discovery Effortless",
    description:
      "A selected digital experience concept focused on simplifying destination discovery, travel planning and the journey toward booking.",
    tags: ["Travel Technology", "Web Development", "UX/UI", "Digital Experience"],
    challenge: "",
    approach: "",
    outcome: "",
    features: [
      "Destination discovery",
      "Travel cards",
      "Itinerary",
      "Experience pages",
      "Booking interface",
    ],
    visual: "travel",
    status: "selected-work",
  },
];

export const CASE_FILTERS = [
  "All",
  "Technology",
  "CRM",
  "Web Development",
  "Automation",
  "EdTech",
] as const;
