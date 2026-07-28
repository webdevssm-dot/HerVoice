import { ResourceAsset, Spotlight, DreamGoal, QuizQuestion, RightPillar } from '../types';
import unityDowImg from '../assets/images/unity_dow_portrait_1785073982568.jpg';
import lesegoChomboImg from '../assets/images/lesego_chombo_portrait_1785073995464.jpg';
import kgosiMosadiImg from '../assets/images/kgosi_mosadi_seboko_1785073791422.jpg';
import bogoloKenewendoImg from '../assets/images/bogolo_kenewendo_portrait_1785074006372.jpg';
import amantleMontshoImg from '../assets/images/amantle_montsho_portrait_1785074019835.jpg';
import drMatshidisoImg from '../assets/images/matshidiso_moeti_portrait_1785074033897.jpg';
import mpuleKwelagobeImg from '../assets/images/mpule_kwelagobe_portrait_1785074044601.jpg';

export const INITIAL_RESOURCES: ResourceAsset[] = [
  {
    id: 'res-1',
    title: 'Emang Basadi Legal Rights & Protection Handbook',
    type: 'Guidebook',
    format: 'PDF / Print-Ready Handbook',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Legal handbook for women rights in Botswana',
    fileSize: '2.8 MB',
    description: 'Comprehensive legal empowerment handbook published by Emang Basadi Women\'s Association. Provides plain-language explanations of Botswana\'s Domestic Violence Act (2008), Abolition of Marital Power Act (2004), Maintenance Act, child protection rights, and step-by-step guidance for obtaining court protection orders.',
    officialPublisher: 'Emang Basadi Women\'s Association Botswana',
    citation: 'Emang Basadi Legal Handbook Series Vol. 4 (Laws of Botswana Alignment)',
    sourceUrl: 'https://en.wikipedia.org/wiki/Emang_Basadi_Women%27s_Association',
    keyTakeaways: [
      'Step-by-step guide to applying for magistrate court protection orders in Botswana',
      'Equal property rights & financial autonomy under Abolition of Marital Power Act (2004)',
      'How to access free legal representation at Legal Aid Botswana clinics nationwide',
      'Child support & maintenance enforcement filing procedures'
    ],
    packSections: [
      {
        heading: '1. Domestic Violence Protections & Magistrate Orders',
        content: 'Under the Domestic Violence Act of 2008, any person experiencing physical, emotional, or economic abuse in Botswana can apply for an urgent Protection Order at any Magistrate Court. No legal fee or lawyer is required to initiate an application.',
        bulletPoints: [
          'Visit the clerk of court at your nearest Magistrate Court.',
          'Complete Form 1 detailing the emergency protection requirement.',
          'Interim protection orders can be granted within 24 hours prohibiting contact or harassment.'
        ]
      },
      {
        heading: '2. Marital Equality & Property Rights',
        content: 'Passed in 2004, the Abolition of Marital Power Act repealed traditional male legal supremacy in civil marriages. Married women have full legal capacity, can register property in their own name, and serve as equal legal guardians.',
        bulletPoints: [
          'Abolishes male marital power in civil marriages.',
          'Equal contractual rights to sign business loans and deeds.',
          'Joint administration of marital estate assets.'
        ]
      },
      {
        heading: '3. Legal Aid & Community Helpline Directory',
        content: 'Free legal advice and courtroom representation is available to qualifying Batswana citizens through Legal Aid Botswana offices in Gaborone, Francistown, Maun, Lobatse, Palapye, and Kasane.',
        bulletPoints: [
          'Legal Aid Botswana Toll-Free: 0800 600 240',
          'Emang Basadi Legal Clinic: (+267) 390 9335',
          'BONELA Rights Desk: (+267) 393 2516'
        ]
      }
    ]
  },
  {
    id: 'res-2',
    title: 'CEDA & LEA Youth Business Pitch & Funding Pack',
    type: 'Template',
    format: 'PowerPoint / PDF Pitch Pack',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Business pitch template for CEDA youth funding in Botswana',
    fileSize: '4.1 MB',
    description: 'Complete funding proposal & pitch presentation template aligned with the Citizen Entrepreneurial Development Agency (CEDA) youth funding framework and LEA business incubation standards in Botswana.',
    officialPublisher: 'Citizen Entrepreneurial Development Agency (CEDA) & LEA',
    citation: 'CEDA Youth Development Fund Proposal Standard (YDF 2026)',
    sourceUrl: 'https://www.ceda.org.bw',
    keyTakeaways: [
      '10-slide standard pitch presentation structure optimized for CEDA reviewers',
      '3-year financial cash flow projection template in spreadsheet format',
      'Youth business registration guide (CIPA online portal step-by-step)',
      'LEA incubation application checklist and market analysis outline'
    ],
    packSections: [
      {
        heading: '1. CEDA Pitch Presentation Structure',
        content: 'CEDA evaluates youth funding applications based on commercial viability, employment generation for Batswana, and financial sustainability.',
        bulletPoints: [
          'Slide 1: Executive Summary & Problem Statement',
          'Slide 2: Product / Service Value Proposition in Botswana',
          'Slide 3: Target Customer Demographics & Market Demand',
          'Slide 4: Operations Plan & Local Supply Chain',
          'Slide 5: 3-Year Cash Flow Projection & Funding Request'
        ]
      },
      {
        heading: '2. CIPA Registration & BURS Compliance Steps',
        content: 'Before submitting to CEDA or LEA, young entrepreneurs must register their company on the CIPA (Companies and Intellectual Property Authority) online portal.',
        bulletPoints: [
          'Reserve business name on CIPA portal (BW 50 fee).',
          'Obtain Tax Identification Number (TIN) from BURS.',
          'Open dedicated business bank account in Botswana.'
        ]
      }
    ]
  },
  {
    id: 'res-3',
    title: 'Youth Health & SRHR Empowerment Handbook',
    type: 'Handbook',
    format: 'PDF / Digital Guide',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Adolescent health and rights guide for young women in Botswana',
    wide: true,
    isNew: true,
    fileSize: '3.5 MB',
    description: 'Comprehensive health, wellbeing, and rights handbook developed with BOFWA and Ministry of Health. Explains adolescent health rights, school re-entry guidelines for young mothers, and confidential youth-friendly clinic networks across Botswana.',
    officialPublisher: 'Botswana Family Welfare Association (BOFWA) & Ministry of Health',
    citation: 'Ministry of Health Adolescent & Youth Friendly Services (AYFS) Standard',
    sourceUrl: 'https://www.bofwa.org.bw',
    keyTakeaways: [
      'School Re-entry Policy guidance for young mothers in Botswana secondary schools',
      'Directory of 25+ confidential youth-friendly health clinics across Botswana',
      'Mental health coping strategies and peer counselor facilitation outline',
      'Reproductive health rights under Botswana public healthcare guidelines'
    ],
    packSections: [
      {
        heading: '1. School Re-Entry Policy Rights for Young Mothers',
        content: 'Under Ministry of Basic Education Policy Circular No. 2 of 1999, every adolescent mother has the legal right to resume secondary education post-childbirth without academic penalty or administrative refusal.',
        bulletPoints: [
          'Schools must re-admit adolescent mothers upon application.',
          'Flexible attendance allowances during infant care transition.',
          'Access to school guidance and counseling officers.'
        ]
      },
      {
        heading: '2. Confidential Youth Clinic Directory',
        content: 'BOFWA operates youth-friendly centers offering free health screenings, counseling, and wellness education in a supportive environment.',
        bulletPoints: [
          'Gaborone BOFWA Youth Center: (+267) 390 0489',
          'Francistown Youth Clinic: (+267) 241 2802',
          'Maun Adolescent Health Corner: (+267) 686 0231'
        ]
      }
    ]
  },
  {
    id: 'res-4',
    title: 'National Anti-GBV Emergency Hotline & Safety Poster Directory',
    type: 'Directory',
    format: 'Printable Poster & Directory Pack',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Emergency contacts and helpline directory poster for Botswana',
    fileSize: '1.9 MB',
    description: 'Verified emergency helpline directory and safety planning guide. Contains 24/7 toll-free contacts for Childline Botswana (116), Police GBV Helpline (0800 600 144), medical rescue, and safe crisis shelter locations in Gaborone, Francistown, and Maun.',
    officialPublisher: 'Botswana Police Service & Childline Botswana',
    citation: 'Republic of Botswana Emergency Response & Anti-GBV Inter-Agency Directory',
    sourceUrl: 'https://www.gov.bw',
    keyTakeaways: [
      '24/7 Toll-free emergency numbers for police, child protection, and medical aid',
      'Printable A3/A4 community safety posters for schools, kgotla boards, and youth centers',
      'Personal emergency safety planning checklist for immediate crisis situations',
      'Locations and contact details for safe shelters and legal escort desks'
    ],
    packSections: [
      {
        heading: '1. Primary Toll-Free Emergency Hotlines in Botswana',
        content: 'Emergency assistance is accessible nationwide in Botswana free of charge from any mobile network or landline.',
        bulletPoints: [
          'Childline Botswana (24/7 Toll-Free Child & Youth Helpline): 116',
          'Botswana Police Service GBV Toll-Free Helpline: 0800 600 144',
          'Botswana Police General Emergency Hotline: 999',
          'Medical Emergency & Ambulance Services: 997'
        ]
      },
      {
        heading: '2. Crisis Shelters & Psychosocial Support Services',
        content: 'Temporary emergency shelter, trauma counseling, and legal escort services are coordinated through the Gender Affairs Department and civil society partners.',
        bulletPoints: [
          'Gaborone Emergency Safe House Network',
          'Francistown Crisis Support Desk',
          'LifeLine Botswana Counseling Hotline: (+267) 391 1290'
        ]
      }
    ]
  },
  {
    id: 'res-5',
    title: 'Botswana Innovation Hub STEM Career & Mentorship Roadmap',
    type: 'Toolkit',
    format: 'PDF Career & Mentorship Pack',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Young women participating in STEM workshop in Botswana',
    fileSize: '3.2 MB',
    description: 'Comprehensive STEM career roadmap and mentorship guide designed by Botswana Digital & Innovation Hub (BDIH) and University of Botswana scholars to guide young women entering technology, engineering, data science, and digital entrepreneurship.',
    officialPublisher: 'Botswana Digital & Innovation Hub (BDIH) & University of Botswana',
    citation: 'BDIH Women in Innovation & Digital Transformation Framework',
    sourceUrl: 'https://www.bih.co.bw',
    keyTakeaways: [
      'Career pathways in software engineering, data science, renewable energy, and biotech',
      'Directory of tertiary STEM scholarships (DTEF, BDIH Innovation Fund, Mastercard Foundation)',
      'Step-by-step guide to joining university coding bootcamps and hackathons in Gaborone',
      'Mentorship outreach template for connecting with senior female tech leaders'
    ],
    packSections: [
      {
        heading: '1. High-Growth Tech & Engineering Pathways in Botswana',
        content: 'Botswana\'s digital transformation agenda prioritizes software engineering, cybersecurity, agricultural technology, clean energy, and health tech innovation.',
        bulletPoints: [
          'Software Development & Mobile App Architecture',
          'Renewable Energy Engineering (Solar & Clean Tech)',
          'Data Analytics & FinTech Solutions for Southern Africa'
        ]
      },
      {
        heading: '2. Innovation Hub Incubation & Funding',
        content: 'Young Batswana innovators can apply for seed funding, prototyping facilities, and business incubation support at BDIH Science Park in Gaborone.',
        bulletPoints: [
          'BDIH Innovation Fund seed grants for tech startups.',
          'Free co-working space and high-speed internet for selected youth projects.',
          'University of Botswana Computer Science mentorship circles.'
        ]
      }
    ]
  },
  {
    id: 'res-6',
    title: 'Community Youth Leadership & Workshop Facilitation Guide',
    type: 'Guidebook',
    format: 'A4 Action Guide & Workshop Kit',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Young Batswana women in leadership workshop',
    fileSize: '2.6 MB',
    description: 'Grassroots leadership and community workshop facilitation kit created by HerVoice Youth Empowerment Network. Includes ready-to-use 60-minute workshop outlines, discussion cue cards, MYSC youth grant application guides, and volunteer management forms.',
    officialPublisher: 'HerVoice Youth Empowerment Network & Ministry of Youth',
    citation: 'HerVoice Community Leadership & Facilitator Handbook (2026 Edition)',
    sourceUrl: 'https://www.gov.bw',
    keyTakeaways: [
      'Ready-to-use 60-minute workshop agendas on girls\' rights and peer leadership',
      'Ministry of Youth, Sport & Culture (MYSC) Youth Grant Proposal Template',
      'Printable discussion cue cards for school and kgotla youth sessions',
      'Community project evaluation form and volunteer tracking sheet'
    ],
    packSections: [
      {
        heading: '1. 60-Minute Youth Workshop Facilitation Module',
        content: 'Step-by-step guide for facilitating empowering, interactive discussions with junior and senior secondary school girls.',
        bulletPoints: [
          '00-15 Min: Icebreaker & Rights Awareness Warm-up',
          '15-35 Min: Case Study Discussion (Education, Legal Protections & Health)',
          '35-50 Min: Action Planning & Goal Setting Canvas',
          '50-60 Min: Reflection, Support Hotlines & Mentorship Connections'
        ]
      },
      {
        heading: '2. MYSC Youth Grant Application Guidance',
        content: 'Instructions for filling out Ministry of Youth, Sport & Culture funding forms to support community youth projects in Botswana villages and towns.',
        bulletPoints: [
          'Formulating project objectives and community impact targets.',
          'Preparing itemized project budget breakdowns.',
          'Obtaining local leadership and kgotla endorsement letters.'
        ]
      }
    ]
  }
];

export const FEATURED_SPOTLIGHT: Spotlight = {
  id: 'spotlight-featured',
  name: 'Hon. Unity Dow',
  category: 'Leadership',
  subCategory: 'Human Rights & Jurisprudence',
  quoteOrHeadline: 'If a law discriminates against a woman, it discriminates against the future of the nation.',
  description: 'First female High Court Judge in Botswana, acclaimed author, human rights attorney, and lead plaintiff in the historic 1992 Unity Dow citizenship case.',
  fullStory: `Unity Dow made history in Botswana as the lead plaintiff in the landmark 1992 case Attorney General of Botswana v. Unity Dow [1992] BLR 119 (CA). At the time, Botswana's Citizenship Act denied Batswana mothers married to non-citizens the right to pass Botswana citizenship to their children. Dow challenged the law as discriminatory under Section 3 and Section 15 of the Constitution of Botswana and won a historic victory in the Court of Appeal, establishing gender equality in Batswana nationality law.

Appointed as Botswana's first female High Court Judge in 1997, she later served as Minister of Education and Skills Development, Minister of Foreign Affairs and International Cooperation, and member of international human rights missions for the United Nations and the International Commission of Jurists. She is also an acclaimed novelist whose works, including 'Far and Beyon' and 'Juggling Truths', illuminate African youth and women's experiences.

"When women claim their constitutional rights, they build a more resilient democracy for every generation," says Unity Dow.`,
  image: unityDowImg,
  imageAlt: 'Hon. Unity Dow - Pioneer Human Rights Attorney and High Court Judge of Botswana',
  featured: true,
  country: 'Botswana',
  officialSource: 'Court of Appeal of Botswana, Attorney General v. Unity Dow [1992] BLR 119 (CA); Laws of Botswana (Cap 01:01).',
  sourceUrl: 'https://en.wikipedia.org/wiki/Unity_Dow',
  achievements: [
    'Lead Plaintiff in Landmark 1992 Citizenship Case',
    "Botswana's First Female High Court Judge (1997)",
    'Former Minister of Foreign Affairs & International Cooperation',
    'International Human Rights Commissioner (UN & ICJ)'
  ]
};

export const SPOTLIGHTS_LIST: Spotlight[] = [
  {
    id: 'spotlight-1',
    name: 'Lesego Chombo',
    category: 'Leadership',
    quoteOrHeadline: 'Empowerment begins when a young woman realizes her education and voice can uplift whole communities.',
    description: 'Miss World Africa 2024, Miss Botswana 2022, practicing Attorney at Law, and founder of The Genesis Project for underprivileged children and single mothers.',
    fullStory: 'Lesego Chombo graduated with a Bachelor of Laws (LL.B) from the University of Botswana and practices as an attorney of the High Court of Botswana. Crowned Miss Botswana 2022 and Miss World Africa 2024 (placing in the top 4 at Miss World), she launched The Genesis Project to provide developmental tools, entrepreneurship workshops, and legal guidance for single mothers and children across rural Botswana.',
    image: lesegoChomboImg,
    imageAlt: 'Lesego Chombo - Attorney at Law and Miss World Africa 2024 from Botswana',
    officialSource: 'High Court of Botswana Roll of Legal Practitioners; Miss World Organization 2024 Official Archives; The Genesis Project Botswana.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Miss_World_2023',
    achievements: [
      'Miss World Africa 2024 & Top 4 Finalist',
      'Attorney of the High Court of Botswana (LL.B, University of Botswana)',
      'Founder of The Genesis Project for Rural Families',
      'Miss Botswana 2022 Titleholder'
    ]
  },
  {
    id: 'spotlight-2',
    name: 'Kgosi Mosadi Seboko',
    category: 'Leadership',
    quoteOrHeadline: 'Customary governance must honor human dignity and champion the full participation of women.',
    description: 'First female Paramount Chief (Kgosi) in Botswana history, leading the Balete nation and breaking traditional gender barriers in customary law.',
    fullStory: 'In 2002, Kgosi Mosadi Seboko made history as the first woman installed as a Paramount Chief in Botswana, succeeding her brother to lead the Balete people of Ramotswa. Sitting in the Ntlo ya Dikgosi (House of Chiefs of Botswana), she has used her traditional authority to fight gender-based violence, defend girls\' education rights, and modernize customary inheritance frameworks.',
    image: kgosiMosadiImg,
    imageAlt: 'Kgosi Mosadi Seboko - First Female Paramount Chief in Botswana',
    officialSource: 'Ntlo ya Dikgosi (House of Chiefs of Botswana); Tribal Administration Records of Ramotswa, Republic of Botswana.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Mosadi_Seboko',
    achievements: [
      'First Female Paramount Chief in Botswana History (2002)',
      'Leader of the Balete Nation (Ramotswa)',
      'Member of Ntlo ya Dikgosi (House of Chiefs)',
      'National Champion Against Gender-Based Violence'
    ]
  },
  {
    id: 'spotlight-3',
    name: 'Bogolo Kenewendo',
    category: 'Business',
    quoteOrHeadline: 'Economic policies must create active opportunities for young women entrepreneurs to lead.',
    description: 'Economist, former Minister of Investment, Trade and Industry of Botswana, and global advisor on climate finance and digital economies.',
    fullStory: 'Appointed to Botswana\'s Cabinet at age 29, Bogolo Kenewendo served as Minister of Investment, Trade and Industry, becoming one of Africa\'s youngest cabinet ministers. An alumna of the University of Botswana and the University of Sussex (MSc International Economics), she introduced key trade digitalization initiatives, youth enterprise funds, and currently advises the United Nations and global climate institutions.',
    image: bogoloKenewendoImg,
    imageAlt: 'Bogolo Kenewendo - Economist and Former Minister of Investment, Trade and Industry of Botswana',
    officialSource: 'Ministry of Investment, Trade and Industry (MITI Botswana); United Nations High-Level Advisory Board on Economic Affairs.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Bogolo_Kenewendo',
    achievements: [
      'Minister of Investment, Trade & Industry at Age 29',
      'MSc International Economics (University of Sussex)',
      'UN High-Level Climate Champion Special Advisor',
      'Founder of Kenewendo Advisory'
    ]
  },
  {
    id: 'spotlight-4',
    name: 'Amantle Montsho',
    category: 'Sports',
    quoteOrHeadline: 'When you run for Botswana, you carry the pride and dreams of every young girl watching from home.',
    description: '2011 World Athletics 400m Champion, 2x Commonwealth Gold Medalist, and Botswana\'s pioneer female Olympic athletics finalist.',
    fullStory: 'Hailing from Maun, Amantle Montsho became a national sports legend when she won Botswana\'s first-ever World Athletics Championship Gold Medal in Daegu 2011, winning the women\'s 400 metres in 49.56 seconds. A multi-time African Champion and 3-time Olympian, she continues to mentor young female track athletes across Botswana.',
    image: amantleMontshoImg,
    imageAlt: 'Amantle Montsho - World Champion Track Athlete from Botswana',
    officialSource: 'World Athletics Championships Daegu 2011 Official Records; Botswana National Olympic Committee (BNOC).',
    sourceUrl: 'https://en.wikipedia.org/wiki/Amantle_Montsho',
    achievements: [
      "2011 World Athletics 400m Gold Medalist (49.56s)",
      "Botswana's First World Track Gold Medalist",
      '2x Commonwealth Games Gold Medalist (2010, 2018)',
      '3x African Athletics Champion (2008, 2010, 2012)'
    ]
  },
  {
    id: 'spotlight-5',
    name: 'Dr. Matshidiso Moeti',
    category: 'Science',
    quoteOrHeadline: 'Public health is built on health equity—ensuring no woman or child is left behind in care.',
    description: 'Renowned Motswana physician, former WHO Regional Director for Africa, and international global health leader.',
    fullStory: 'Dr. Matshidiso Moeti earned her medical degree (MBBS) at the University of London and dedicated over 35 years to international public health. As the first woman elected WHO Regional Director for Africa (serving from 2015 to 2025), she spearheaded major continental health initiatives, wild polio eradication, and emergency response systems across 47 African member states.',
    image: drMatshidisoImg,
    imageAlt: 'Dr. Matshidiso Moeti - Motswana Physician and WHO Regional Director for Africa',
    officialSource: 'World Health Organization (WHO) Regional Office for Africa; Royal Free Hospital School of Medicine, University of London.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Matshidiso_Moeti',
    achievements: [
      'First Woman WHO Regional Director for Africa (2015–2025)',
      'Led Continental Wild Polio Certification in Africa (2020)',
      'Doctor of Medicine (MBBS, University of London)',
      'Honorary Doctorate of Laws from University of Botswana'
    ]
  },
  {
    id: 'spotlight-6',
    name: 'Mpule Kwelagobe',
    category: 'Creative Arts',
    quoteOrHeadline: 'Using global platforms to champion reproductive health, youth advocacy, and human dignity.',
    description: 'Miss Universe 1999, UNFPA Goodwill Ambassador, and advocate for youth health rights and sustainable agriculture in Botswana.',
    fullStory: 'Born in Gaborone, Mpule Kwelagobe gained global prominence when she was crowned Miss Universe in 1999—the first Black African woman to win the title. She used her platform as a United Nations Population Fund (UNFPA) Goodwill Ambassador to lead youth HIV/AIDS prevention, reproductive health education, and sustainable development initiatives in Botswana and internationally.',
    image: mpuleKwelagobeImg,
    imageAlt: 'Mpule Kwelagobe - Miss Universe 1999 and UN Goodwill Ambassador from Botswana',
    officialSource: 'United Nations Population Fund (UNFPA); Miss Universe 1999 Official Archives; MPULE Institute for Global Development.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Mpule_Kwelagobe',
    achievements: [
      'Miss Universe 1999 (First Black African Winner)',
      'UNFPA Goodwill Ambassador for Youth & SRHR',
      'Founder of the MPULE Institute for Sustainable Agriculture',
      'World Economic Forum Young Global Leader'
    ]
  }
];

export const INITIAL_GOALS: DreamGoal[] = [
  {
    id: 'goal-major-1',
    tier: 'Major Initiative',
    category: 'Education',
    title: 'Botswana National Girls STEM & Digital Mentorship Network',
    description: 'Establishing a nationwide peer mentorship & coding accelerator across 12 secondary schools in Gaborone, Francistown, and Maun.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Young African female students collaborating on computer coding project in classroom',
    targetDate: 'Dec 2026',
    progressPercent: 75,
    impactMetric: '1,200 High School Girls Targeted',
    location: 'Nationwide (Gaborone, Francistown, Maun)',
    cheersCount: 342,
    contributors: ['BITRI', 'BIUST', 'Ministry of Education'],
    completedTasks: [
      { id: 'm1', text: 'Launch mentor training portal with female tech leaders', done: true },
      { id: 'm2', text: 'Deploy 50 donated laptops to Maun Secondary School', done: true },
      { id: 'm3', text: 'Host National Young Women Tech Hackathon', done: false }
    ]
  },
  {
    id: 'goal-major-2',
    tier: 'Major Initiative',
    category: 'Legal & Health',
    title: 'Emang Basadi Mobile Legal Aid & Rights Safehouse Clinic',
    description: 'Providing confidential legal counseling, GBV court protection guidance, and emergency hotline support for rural communities.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Legal books, gavel and scales of justice symbolizing legal protection in Botswana',
    targetDate: 'Oct 2026',
    progressPercent: 85,
    impactMetric: '450 Women Supported Pro-Bono',
    location: 'Gaborone, Lobatse & Kweneng District',
    cheersCount: 512,
    contributors: ['Emang Basadi', 'Botswana Law Society'],
    completedTasks: [
      { id: 'l1', text: 'Secure 2 mobile legal consultation vehicles', done: true },
      { id: 'l2', text: 'Train 25 pro-bono volunteer paralegals', done: true },
      { id: 'l3', text: 'Distribute 2,000 Know Your Rights pocket handbooks', done: false }
    ]
  },
  {
    id: 'goal-community-1',
    tier: 'Community Project',
    category: 'Leadership',
    title: 'Francistown Youth Agri-Tech Enterprise Cooperative',
    description: 'Empowering young female farmers with climate-resilient hydroponic technology and CEDA micro-grant financing.',
    image: 'https://images.unsplash.com/photo-1595838787019-3831ec5e5f5f?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Young African woman tending to sustainable agricultural greenhouse crops',
    targetDate: 'Nov 2026',
    progressPercent: 60,
    impactMetric: '30 Youth Enterprises Incubated',
    location: 'Francistown & North East District',
    cheersCount: 189,
    contributors: ['CEDA', 'LEA Botswana'],
    completedTasks: [
      { id: 'a1', text: 'Submit CEDA Youth Enterprise Group application', done: true },
      { id: 'a2', text: 'Construct pilot solar-powered greenhouse in Francistown', done: false }
    ]
  },
  {
    id: 'goal-community-2',
    tier: 'Community Project',
    category: 'Creative Arts',
    title: 'Okavango Voices: Young Women Storytelling & Documentary Film',
    description: 'Training young Batswana women in visual media, documentary filming, and digital publishing to preserve Indigenous culture and climate resilience.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Young photographer holding professional camera in lush natural landscape',
    targetDate: 'Aug 2026',
    progressPercent: 40,
    impactMetric: '15 Short Films Produced',
    location: 'Maun & Okavango Delta',
    cheersCount: 210,
    contributors: ['Botswana National Cultural Council'],
    completedTasks: [
      { id: 'c1', text: 'Conduct 3-day video editing & camera workshop', done: true },
      { id: 'c2', text: 'Premiere short films at Gaborone International Film Showcase', done: false }
    ]
  },
  {
    id: 'goal-personal-1',
    tier: 'Personal Goal',
    category: 'Education',
    title: 'LL.B Law Degree & Constitutional Rights Advocacy at UB',
    description: 'Completing law studies at University of Botswana Gaborone, specializing in gender equality litigation and human rights policy.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Students reading in University of Botswana law library',
    targetDate: 'Nov 2026',
    progressPercent: 50,
    impactMetric: 'Personal Legal Career Milestone',
    location: 'University of Botswana, Gaborone',
    cheersCount: 145,
    completedTasks: [
      { id: 'p1', text: 'Pass Constitutional & Administrative Law examinations', done: true },
      { id: 'p2', text: 'Publish research paper on Abolition of Marital Power Act', done: false }
    ]
  },
  {
    id: 'goal-personal-2',
    tier: 'Personal Goal',
    category: 'Leadership',
    title: 'Childline Botswana Youth Peer Mentor Certification',
    description: 'Completing advocacy peer training with Childline Botswana (Toll-Free 116) to mentor junior secondary school girls against bullying & GBV.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Group of young women smiling and embracing outdoors in unity',
    targetDate: 'Sep 2026',
    progressPercent: 90,
    impactMetric: '5 Junior Secondary Schools Reached',
    location: 'Lobatse & Gaborone South',
    cheersCount: 178,
    completedTasks: [
      { id: 't1', text: 'Register for Childline Advocate Training', done: true },
      { id: 't2', text: 'Complete Youth Mentorship Workshop', done: true },
      { id: 't3', text: 'Host School Rights Awareness Session', done: false }
    ]
  }
];

export const RIGHT_PILLARS: RightPillar[] = [
  {
    id: 'edu',
    title: 'Education & Re-Entry',
    description: 'The Ministry of Basic Education guarantees free basic education and enforces the School Re-entry Policy for young mothers in Botswana.',
    icon: 'school',
    colorClass: 'primary',
    points: ['School Re-entry Policy for Young Mothers', 'DTEF Tertiary Sponsorship Access'],
    fullDetails: 'Botswana\'s Ministry of Basic Education enforces a progressive School Re-entry Policy allowing young mothers to return to secondary school post-childbirth without penalty or administrative barriers. State-sponsored tertiary funding (DTEF) is available to qualifying Batswana youth for university and technical studies.',
    legalReference: 'Ministry of Basic Education Policy Circular No. 2 of 1999 (School Re-entry Policy for Adolescent Mothers); DTEF Tertiary Sponsorship Guidelines.',
    officialCitation: 'Republic of Botswana Education Act (Cap 58:01).',
    sourceUrl: 'https://www.gov.bw/ministries/ministry-basic-education'
  },
  {
    id: 'eq',
    title: 'Gender Equality & Citizenship',
    description: 'The Constitution of Botswana and landmark judicial rulings protect women against gender discrimination and marital inequality.',
    icon: 'balance',
    colorClass: 'secondary',
    points: ['Citizenship Act Amendment (Unity Dow Rule)', 'Abolition of Marital Power Act (2004)'],
    fullDetails: 'Under the Abolition of Marital Power Act of 2004, married women in Botswana possess full legal capacity to hold property, sign contracts, and act as equal financial decision-makers. Following the landmark 1992 Unity Dow Court of Appeal ruling, Batswana mothers have equal constitutional rights to pass citizenship to their children.',
    legalReference: 'Constitution of Botswana (Cap 01:01), Sections 3 & 15; Attorney General v. Unity Dow [1992] BLR 119 (CA).',
    officialCitation: 'Abolition of Marital Power Act No. 34 of 2004, Laws of Botswana.',
    sourceUrl: 'https://en.wikipedia.org/wiki/Unity_Dow'
  },
  {
    id: 'safe',
    title: 'Safety & Anti-GBV Protections',
    description: 'The Domestic Violence Act (2008) and Botswana Police Service GBV Unit provide legal protection and emergency hotlines.',
    icon: 'shield_with_heart',
    colorClass: 'tertiary',
    points: ['Domestic Violence Court Protection Orders', 'Childline Botswana 116 & Police 0800 600 144'],
    fullDetails: 'The Domestic Violence Act (2008) enables victims to obtain urgent interim protection orders from magistrate courts in Botswana. Free 24/7 assistance is accessible via Childline Botswana (Toll-Free 116) and the Police GBV Helpline (0800 600 144).',
    legalReference: 'Domestic Violence Act No. 10 of 2008, Laws of Botswana; Penal Code (Cap 08:01).',
    officialCitation: 'Botswana Police Service GBV Hotline 0800 600 144 & Childline Botswana Toll-Free 116.',
    sourceUrl: 'https://www.gov.bw'
  },
  {
    id: 'exp',
    title: 'Employment & Economic Rights',
    description: 'The Employment Act of Botswana protects female workers against discrimination and mandates paid maternity leave.',
    icon: 'campaign',
    colorClass: 'primary',
    points: ['12 Weeks Paid Maternity Leave', 'Prohibition of Workplace Sexual Harassment'],
    fullDetails: 'Botswana\'s Employment Act (Cap 47:01) entitles female employees to 12 weeks of paid maternity leave (6 weeks prior and 6 weeks after birth) and protects workers from unfair dismissal due to pregnancy or gender.',
    legalReference: 'Employment Act (Cap 47:01), Part X (Maternity Protection, Sections 113–116).',
    officialCitation: 'Laws of Botswana, Employment Regulations & Equal Pay Mandate.',
    sourceUrl: 'https://www.gov.bw'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Under Botswana\'s Citizenship Act, do Batswana mothers married to non-citizens have equal constitutional rights to pass Botswana citizenship to their children?',
    options: [
      { text: 'Yes, established by the historic Unity Dow Court of Appeal ruling.', isCorrect: true },
      { text: 'No, citizenship can only be passed down through the father.', isCorrect: false }
    ],
    explanation: 'The landmark 1992 Unity Dow case established that Section 3 of the Constitution of Botswana protects women from gender discrimination in nationality laws.'
  },
  {
    id: 2,
    question: 'What is the policy of Botswana\'s Ministry of Basic Education regarding teenage mothers returning to school?',
    options: [
      { text: 'Young mothers have an official legal right to return and complete secondary school.', isCorrect: true },
      { text: 'Teenage mothers are permanently prohibited from attending state schools.', isCorrect: false }
    ],
    explanation: 'Botswana\'s School Re-entry Policy actively enables adolescent mothers to resume their secondary education without academic penalty.'
  },
  {
    id: 3,
    question: 'Which law in Botswana abolished male marital legal dominance, granting married women equal property and contractual rights?',
    options: [
      { text: 'The Abolition of Marital Power Act of 2004', isCorrect: true },
      { text: 'The Companies Act of 1995', isCorrect: false }
    ],
    explanation: 'Enacted in 2004, the Abolition of Marital Power Act repealed traditional male legal supremacy in civil marriages, establishing full legal equality.'
  }
];

