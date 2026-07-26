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
    title: 'Emang Basadi Legal Rights Guide',
    type: 'Guidebook',
    format: 'PDF Booklet',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Legal booklet for women rights in Botswana',
    description: 'Comprehensive legal guidebook published by Emang Basadi Women\'s Association covering domestic violence laws, maintenance claims, property rights, and legal aid in Botswana.',
    officialPublisher: 'Emang Basadi Women\'s Association Botswana',
    sourceUrl: 'https://en.wikipedia.org/wiki/Emang_Basadi_Women%27s_Association'
  },
  {
    id: 'res-2',
    title: 'CEDA & LEA Business Pitch Kit',
    type: 'Template',
    format: 'PowerPoint / PDF',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Business plan presentation template for CEDA funding',
    description: 'Complete presentation pitch template designed to meet the funding guidelines of CEDA Botswana and LEA for young women launching small businesses.',
    officialPublisher: 'Citizen Entrepreneurial Development Agency (CEDA Botswana)',
    sourceUrl: 'https://www.ceda.org.bw'
  },
  {
    id: 'res-3',
    title: 'Youth Health & SRHR Toolkit',
    type: 'Handbook',
    format: 'PDF / Digital Guide',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Youth health and wellness guide for young women in Botswana',
    wide: true,
    isNew: true,
    itemCount: 'Official Guide',
    description: 'Health and reproductive rights guide created in collaboration with BOFWA (Botswana Family Welfare Association) and Ministry of Health.',
    officialPublisher: 'Botswana Family Welfare Association (BOFWA) & Ministry of Health',
    sourceUrl: 'https://www.bofwa.org.bw'
  },
  {
    id: 'res-4',
    title: 'Anti-GBV Helpline Directory',
    type: 'Directory',
    format: 'Print / Digital Poster',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Emergency contacts and helpline list for Botswana',
    description: 'Emergency helpline contact directory for Childline Botswana (116), Police GBV Helpline (0800 600 144), BONELA, and legal aid clinics across Gaborone, Francistown, and Maun.',
    officialPublisher: 'Botswana Police Service & Childline Botswana',
    sourceUrl: 'https://www.gov.bw'
  },
  {
    id: 'res-5',
    title: 'Botswana Innovation Hub STEM Guide',
    type: 'Toolkit',
    format: 'PDF Roadmap',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Young women participating in STEM and technology workshop',
    description: 'Career roadmap for young Batswana women entering computer science, environmental engineering, and digital innovation, supported by BIH and UB mentors.',
    officialPublisher: 'Botswana Digital & Innovation Hub (BDIH) & University of Botswana',
    sourceUrl: 'https://www.bih.co.bw'
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
    id: 'goal-1',
    category: 'Education',
    title: 'LL.B Law Degree at University of Botswana',
    description: 'Study law at UB Gaborone, specializing in constitutional human rights and advocating for women\'s legal protection across Botswana.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
    imageAlt: 'Students studying at University of Botswana',
    targetDate: 'Nov 2026',
    rotation: -1
  },
  {
    id: 'goal-2',
    category: 'Leadership',
    title: 'Apply for CEDA Youth Enterprise Grant',
    description: 'Submit business plan to CEDA Botswana for a sustainable agri-tech startup in Francistown.',
    rotation: 2,
    contributors: ['CEDA', 'LEA']
  },
  {
    id: 'goal-3',
    category: 'Creative Arts',
    title: 'Launch Maun Secondary Girls Code Club',
    description: 'Establish a weekly digital skills and web development club for high school girls in Maun.',
    rotation: -2,
    hasIllustrationPlaceholder: true
  },
  {
    id: 'goal-4',
    category: 'Education',
    title: 'Volunteer with Childline Botswana',
    description: 'Complete community peer advocacy training with Childline Botswana (Toll-Free 116) to mentor junior secondary students.',
    rotation: 1,
    completedTasks: [
      { id: 't1', text: 'Register for Childline Advocate Training', done: true },
      { id: 't2', text: 'Complete Youth Mentorship Workshop', done: true },
      { id: 't3', text: 'Host School Rights Awareness Session', done: false }
    ]
  },
  {
    id: 'goal-5',
    category: 'Leadership',
    title: 'Join Young Women Legal Clinic Network',
    description: 'Collaborate with Emang Basadi to offer pro-bono legal awareness workshops for rural communities in Botswana.',
    rotation: -1
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

