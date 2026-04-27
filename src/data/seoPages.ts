export type SeoPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  serviceArea: string;
  intro: string;
  outcomes: string[];
  services: {
    title: string;
    text: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const seoPages: SeoPage[] = [
  {
    path: '/steinbach-ai',
    eyebrow: 'Steinbach AI',
    title: 'Steinbach AI systems for local business operations.',
    description:
      'AI agents, automation workflows, bookkeeping systems, and websites built for Steinbach businesses that need faster response and less admin drag.',
    primaryKeyword: 'Steinbach AI',
    metaTitle: 'Steinbach AI Services | Steinbots Automation Agency',
    metaDescription:
      'Steinbach AI services for local businesses: AI chatbots, booking agents, bookkeeping workflows, custom automation, internal tools, and website revamps.',
    serviceArea: 'Steinbach, Niverville, Hanover, and Southern Manitoba',
    intro:
      'Steinbots turns AI into practical local business systems. Instead of selling vague AI tools, we map one workflow, build the first useful version, keep human approval where it matters, and expand once the system is earning its keep.',
    outcomes: ['Faster lead response', 'Cleaner admin handoffs', 'Better booking flow', 'Human-reviewed automation'],
    services: [
      {
        title: 'AI lead and booking agents',
        text: 'Website chat, SMS, social messages, lead qualification, calendar handoff, and follow-up prompts.',
      },
      {
        title: 'Back-office AI workflows',
        text: 'Receipt intake, invoice follow-up, QuickBooks review queues, monthly close checklists, and reporting.',
      },
      {
        title: 'Custom automation builds',
        text: 'Dashboards, internal portals, forms, approval flows, and integrations around the tools you already use.',
      },
    ],
    faqs: [
      {
        question: 'What does Steinbach AI mean?',
        answer:
          'For Steinbots, Steinbach AI means practical AI systems built for real local workflows: leads, bookings, bookkeeping admin, dashboards, client follow-up, and custom software.',
      },
      {
        question: 'Do you only serve Steinbach?',
        answer:
          'No. Steinbots is based around Steinbach and Southern Manitoba, but can support nearby communities and remote clients when the workflow is a good fit.',
      },
    ],
  },
  {
    path: '/ai-automation-steinbach',
    eyebrow: 'AI automation Steinbach',
    title: 'AI automation for Steinbach businesses that repeat the same work every week.',
    description:
      'Automate lead intake, bookings, invoices, forms, reminders, reports, and approvals without forcing your team into a complicated tech project.',
    primaryKeyword: 'AI automation Steinbach',
    metaTitle: 'AI Automation Steinbach | Business Workflow Automation',
    metaDescription:
      'AI automation for Steinbach businesses. Automate lead capture, bookings, admin workflows, invoice follow-up, dashboards, approvals, and custom software.',
    serviceArea: 'Steinbach, Mitchell, Blumenort, Kleefeld, Grunthal, and Niverville',
    intro:
      'The best AI automation projects start with one painful workflow. We look for repeated steps, missed handoffs, copy-paste work, stale follow-ups, or admin tasks that pull your team away from real customer work.',
    outcomes: ['Less copy-paste work', 'Cleaner follow-up', 'Owner approval points', 'Simple operational dashboards'],
    services: [
      {
        title: 'Lead-to-booking automation',
        text: 'Capture inquiries, ask qualifying questions, notify the right person, and move serious leads toward a call or quote.',
      },
      {
        title: 'Admin workflow automation',
        text: 'Connect Gmail, Sheets, forms, calendars, CRMs, Stripe, Shopify, QuickBooks, and internal checklists.',
      },
      {
        title: 'Reporting and exception alerts',
        text: 'Show owners what is waiting, what is missing, what changed, and what needs human review.',
      },
    ],
    faqs: [
      {
        question: 'What can Steinbots automate first?',
        answer:
          'Good first workflows include missed lead follow-up, quote intake, appointment booking, invoice reminders, receipt collection, CRM updates, and weekly reporting.',
      },
      {
        question: 'Can automation pause for approval?',
        answer:
          'Yes. Sensitive steps like bookkeeping, payment actions, client messages, and final submissions can pause for human approval.',
      },
    ],
  },
  {
    path: '/ai-chatbots-steinbach',
    eyebrow: 'AI chatbots Steinbach',
    title: 'AI chatbots in Steinbach that capture leads instead of just answering questions.',
    description:
      'Website, SMS, Facebook, and Instagram chat agents that answer FAQs, qualify visitors, collect details, book appointments, and hand off to your team.',
    primaryKeyword: 'AI chatbots Steinbach',
    metaTitle: 'AI Chatbots Steinbach | Website Chat & Lead Capture',
    metaDescription:
      'AI chatbots for Steinbach businesses. Website chat, SMS, social messaging, lead qualification, appointment booking, and human handoff.',
    serviceArea: 'Steinbach, Niverville, Hanover, and Southern Manitoba',
    intro:
      'A useful chatbot should know your services, ask the right questions, collect contact details, and make the next step clear. Steinbots builds chat agents around one conversion goal first, then expands channels once the core flow is working.',
    outcomes: ['24/7 lead response', 'FAQ handling', 'Contact collection', 'Calendar or CRM handoff'],
    services: [
      {
        title: 'Website chat agents',
        text: 'Answer common questions, guide visitors to the right service, and collect serious inquiries.',
      },
      {
        title: 'SMS and social chat',
        text: 'Extend the same knowledge base into text, Facebook, Instagram, and other follow-up channels where useful.',
      },
      {
        title: 'Human handoff',
        text: 'Route complex questions, high-value leads, complaints, and sensitive situations to a real person.',
      },
    ],
    faqs: [
      {
        question: 'Can the chatbot book appointments?',
        answer:
          'Yes. It can collect the needed details, guide people toward a booking, and hand off to your calendar or team depending on the workflow.',
      },
      {
        question: 'Can it answer from my website content?',
        answer:
          'Yes. We typically start with your services, offers, FAQs, policies, service area, and intake questions, then tune the bot around real conversations.',
      },
    ],
  },
  {
    path: '/bookkeeping-automation-steinbach',
    eyebrow: 'Bookkeeping automation Steinbach',
    title: 'Bookkeeping automation for Steinbach businesses that need cleaner monthly routines.',
    description:
      'Receipt intake, invoice follow-up, QuickBooks review queues, monthly close checklists, and exception reports with human review built in.',
    primaryKeyword: 'bookkeeping automation Steinbach',
    metaTitle: 'Bookkeeping Automation Steinbach | QuickBooks Workflow Setup',
    metaDescription:
      'Bookkeeping automation in Steinbach: receipt intake, invoice follow-up, QuickBooks review queues, monthly close checklists, and exception reports.',
    serviceArea: 'Steinbach, Niverville, Hanover, and Southern Manitoba',
    intro:
      'Steinbots does not replace your bookkeeper or accountant. We automate the repetitive admin around the bookkeeping process so owners, staff, bookkeepers, and accountants get cleaner information with fewer missing pieces.',
    outcomes: ['Fewer missing receipts', 'Cleaner QuickBooks review', 'Invoice follow-up', 'Monthly close visibility'],
    services: [
      {
        title: 'Receipt and document intake',
        text: 'Create a consistent path for receipts, invoices, statements, emails, and payment proof before month-end.',
      },
      {
        title: 'QuickBooks workflow setup',
        text: 'Queue items for review, flag missing documents, surface unusual transactions, and prepare exception reports.',
      },
      {
        title: 'Monthly close checklist',
        text: 'Track what is waiting, what is done, what needs approval, and what should be sent to your bookkeeper or accountant.',
      },
    ],
    faqs: [
      {
        question: 'Is Steinbots a bookkeeping firm?',
        answer:
          'No. Steinbots builds bookkeeping workflows and reporting systems. Tax, audit, CPA, and legal advice should be reviewed by the appropriate qualified professional.',
      },
      {
        question: 'Can you work with QuickBooks?',
        answer:
          'Yes. Steinbots can design QuickBooks review queues, intake flows, close checklists, and exception reports around the way your business already handles books.',
      },
    ],
  },
  {
    path: '/website-revamp-steinbach',
    eyebrow: 'Website revamp Steinbach',
    title: 'Website revamps for Steinbach businesses that need clearer offers and stronger calls to action.',
    description:
      'A one-time website cleanup, rewrite, redesign, code update, and launch support service for businesses that want a sharper online presence.',
    primaryKeyword: 'website revamp Steinbach',
    metaTitle: 'Website Revamp Steinbach | $500 Website Redesign Service',
    metaDescription:
      'Website revamp for Steinbach businesses. Improve copy, layout, mobile flow, calls to action, conversion paths, and launch support on your existing platform.',
    serviceArea: 'Steinbach, Niverville, Hanover, Winnipeg, and Southern Manitoba',
    intro:
      'Many businesses do not need a giant rebuild first. They need clearer copy, stronger hierarchy, better mobile layout, and calls to action that connect the website to leads, bookings, quote requests, or applications.',
    outcomes: ['Sharper homepage copy', 'Cleaner mobile layout', 'Stronger CTAs', 'Automation-ready conversion paths'],
    services: [
      {
        title: 'Website audit',
        text: 'Review messaging, layout, mobile flow, service pages, calls to action, and the places visitors likely drop off.',
      },
      {
        title: 'Redesign and rewrite',
        text: 'Improve the page flow, copy, section hierarchy, visuals, and conversion path while keeping the project focused.',
      },
      {
        title: 'Platform-flexible setup',
        text: 'Support for WordPress, Shopify, Webflow, Wix, Squarespace, GoHighLevel, and most custom-coded sites.',
      },
    ],
    faqs: [
      {
        question: 'What is included in the $500 website revamp?',
        answer:
          'The revamp is for improving an existing website: audit, copy cleanup, design improvement, coding or setup support, and launch help on your current platform.',
      },
      {
        question: 'Can the revamp connect to AI automation later?',
        answer:
          'Yes. We can structure calls to action, forms, booking paths, and lead capture so the website can become part of a larger AI or automation system.',
      },
    ],
  },
  {
    path: '/custom-automation-manitoba',
    eyebrow: 'Custom automation Manitoba',
    title: 'Custom automation and small business software for Manitoba teams.',
    description:
      'Dashboards, portals, forms, reporting tools, CRM handoffs, approval workflows, and integrations around your actual business process.',
    primaryKeyword: 'custom automation Manitoba',
    metaTitle: 'Custom Automation Manitoba | Workflow Software by Steinbots',
    metaDescription:
      'Custom automation for Manitoba businesses: dashboards, portals, forms, workflow software, CRM handoffs, integrations, approvals, and reporting.',
    serviceArea: 'Manitoba businesses, with local focus in Steinbach and Southern Manitoba',
    intro:
      'Some workflows do not fit neatly inside an off-the-shelf app. Steinbots builds focused internal tools and automations around the process your team already uses, so the system supports the work instead of becoming another burden.',
    outcomes: ['Custom dashboards', 'Internal portals', 'Approval flows', 'Tool integrations'],
    services: [
      {
        title: 'Workflow discovery',
        text: 'Map the current process, repeated steps, handoffs, tools, bottlenecks, and decision points.',
      },
      {
        title: 'Internal tools and portals',
        text: 'Build practical staff dashboards, client portals, calculators, intake forms, and reporting views.',
      },
      {
        title: 'Integrations and automation',
        text: 'Connect Gmail, Sheets, CRMs, Stripe, Shopify, QuickBooks, calendars, forms, and other systems when useful.',
      },
    ],
    faqs: [
      {
        question: 'Do custom automation builds have to be large projects?',
        answer:
          'No. Steinbots usually starts with one painful workflow, builds a focused first version, and expands only when the value is clear.',
      },
      {
        question: 'Can you build custom software for a specific process?',
        answer:
          'Yes. Steinbots can build small internal apps, dashboards, forms, calculators, portals, and workflow tools around a specific business process.',
      },
    ],
  },
  {
    path: '/service-areas/niverville-ai-automation',
    eyebrow: 'Niverville AI automation',
    title: 'AI automation for Niverville businesses close to Steinbach and Winnipeg.',
    description:
      'AI chatbots, booking agents, workflow automation, bookkeeping intake, website revamps, and custom software for Niverville businesses.',
    primaryKeyword: 'Niverville AI automation',
    metaTitle: 'Niverville AI Automation | Steinbots Local AI Systems',
    metaDescription:
      'AI automation for Niverville businesses: chatbots, booking flows, bookkeeping workflows, website revamps, dashboards, and custom software.',
    serviceArea: 'Niverville, Steinbach, Hanover, Ritchot, and Southern Manitoba',
    intro:
      'Niverville businesses often sit between local service demand and Winnipeg-area growth. Steinbots builds practical AI systems that help small teams respond faster, organize admin work, and turn website traffic into booked conversations.',
    outcomes: ['Niverville service area visibility', 'Faster customer response', 'Better website conversion', 'Back-office automation'],
    services: [
      {
        title: 'AI chat and lead capture',
        text: 'Website and SMS agents that answer questions, qualify inquiries, and move serious prospects toward a call or quote.',
      },
      {
        title: 'Booking and follow-up workflows',
        text: 'Calendar handoff, reminders, CRM updates, email follow-up, and simple pipeline tracking.',
      },
      {
        title: 'Bookkeeping and admin support',
        text: 'Receipt intake, invoice follow-up, review queues, dashboards, and monthly checklist systems.',
      },
    ],
    faqs: [
      {
        question: 'Does Steinbots work with Niverville businesses?',
        answer:
          'Yes. Steinbots supports Niverville businesses as part of its Steinbach and Southern Manitoba service area.',
      },
      {
        question: 'What is the best first AI project for a Niverville business?',
        answer:
          'Good first projects are usually lead capture, booking support, missed follow-up, bookkeeping intake, or a website revamp with better calls to action.',
      },
    ],
  },
];

export const serviceAreas = [
  'Steinbach',
  'Niverville',
  'Hanover',
  'Blumenort',
  'Mitchell',
  'Kleefeld',
  'Grunthal',
  'New Bothwell',
  'La Broquerie',
  'Ste. Anne',
  'Landmark',
  'Southern Manitoba',
  'Winnipeg',
];
