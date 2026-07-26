import { ResourceAsset, Spotlight, DreamGoal, QuizQuestion, RightPillar } from '../types';

export const INITIAL_RESOURCES: ResourceAsset[] = [
  {
    id: 'res-1',
    title: 'Unity & Support Pack',
    type: 'Illustration',
    format: 'High-res PNG & SVG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkIc6lU5qqCDLNHlsLcAMY7S-jDie09-OBCIb1-5YPYyiP0amKVLsdczW0yN2Qsiz0mJ4dLJoGqIhxCXlU1-4ZcJb4F_h1wtRd6LPakZ3Zw8V6wSkgjqxxO5j0gtCsvzhVtdjzAZBy9N9UAFtedArVtTWSjVNaEFs22Z5ntshWK-Dxi6Kdvubbuvo6cVYv6DtVWxphs9fzbbxv1ThBUX-Ga0bGb_N9Gyu7Xq_pOwoEKzetM11EUcDFbGtnonBR1S2TnmYjRsZmJWfh',
    imageAlt: 'Vibrant illustration of three diverse women standing together in a playful pop-art aesthetic.',
    description: 'A cheerful, vector-based illustration collection showcasing sisterhood, solidarity, and empowerment for HerVoice creators.'
  },
  {
    id: 'res-2',
    title: 'Brand Pitch Deck',
    type: 'Template',
    format: 'Keynote / PowerPoint',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc6UO2jcIpXkF24ci_OiEzcMfSbPxN_40TM6yWzgUBELW7bmrEnYczXQCTwJeXLkuw7qPTC4XSg7bMFWUhIG8tdrP5zSzKA0IlXVn3u7WLF5zdjkBRo9RkE6yBazfxVOzjM2K7abZKJDFeN7qOkYeu7LhxR5mwMe5orZcbI6xb55l4z1ms-5hFahvFQHNsmrMC2L9t-rIkLmdDyZQXbz9Bj-WXbWz6QFTunaa7apJdkKiTaT6kqzdjw9w1Sjg4vKefCDv9HvkhzFZL',
    imageAlt: 'Modern professional presentation template layout displayed on a tablet screen.',
    description: 'A complete 25-slide presentation template styled with HerVoice typography and candy color accents for pitching non-profit initiatives.'
  },
  {
    id: 'res-3',
    title: 'Universal Symbols Pro',
    type: 'Icon Set',
    format: '500+ Vectorized Icons',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJVU9F_BBu2Dll51fujt97S-BZsI19wOH2gPv17LHrN-iJOyPqJ-5K72m0oFDexiF444OeqoqqWlqOXiZfFZxLE0xDyZUhJZq26t0u6ISiJgv36NC-MfeydzjuJJLBhQgAVeNEmiQbg6CV8wMpo4Yg1dD5UEPniFgS_0vvbkQcR-YRpNHsJMKQS54JbPmLwlO5jgUjUROk4LAlLF77xxGEIkmksjqbsAl7k5gqbSkAhE05ZsIItPJ6NVah018RZhhDY_lWn7Zxqc_P',
    imageAlt: 'Large collection of minimalist icons designed with rounded edges and soft pastel colors.',
    wide: true,
    isNew: true,
    itemCount: '500+ Icons',
    description: 'Extensive icon library covering education, leadership, health, tech, and community building in SVG and Figma component formats.'
  },
  {
    id: 'res-4',
    title: 'Creative Workspace',
    type: 'Photo',
    format: 'RAW / JPEG',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRXDU3WjVNqhr4gJBxkxb9y_pKKSS0vXjQ2GezAXrXVVR1M-mqI9Jt76YJaLs1SC-XC9qMaQvGlonFnP5FP3vcqKNRDqPvn6JyszygXRfGP1X3_yaPrDWjryLk--HKgqUJfMbzYxHMRfLAaD9IVeXhvNf4XTlxAJ9wC6AYiGsB4VMv5vVPqLKUKnZSJixY62RizJQbex5lUI8OtE7_r390VWWJhOqVPDQdDpuwJ-syp5N2qb-vuxn50TdXABgKy2Vf1JLE1lUOrgtn',
    imageAlt: 'High quality photograph of a sun-drenched workspace with laptop and stationery.',
    description: 'High-resolution stock photography collection featuring productive female modern work environments.'
  },
  {
    id: 'res-5',
    title: 'Whimsical Doodles',
    type: 'Sketches',
    format: 'Vector AI / PDF',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOePPYwks0eSHDEA5ff5aqIDUJg5T9fJ7X38HMU5o_iIGvpyod_qjUWLdZiEmk3l113lRYMuvZ-xDQqkSDihYYvNf9W7vo5U1PNCy_yBEOcZwGwgSpQ3PI_q5vAOlZIEIXyHMkAYH7vfFELYOtRt-5l22-jcbUWjq7SGTJjpTIHGeE95h9P6_-_0skIlQ1_y5etnS5PmsjJtuuZBhIDp1701hHqYnQj61clEqHmYWc_JT1K5dEbDpIinTPIu20VaaeRWg_y5Dpj1rM',
    imageAlt: 'Collection of hand-drawn sketches and doodles of clouds, stars, and speech bubbles.',
    description: 'Playful organic hand-drawn decorative elements to spice up social media graphics, banners, and vision boards.'
  },
  {
    id: 'res-6',
    title: 'Social Media Kit',
    type: 'Template',
    format: 'Canva Editable',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn9HyI7r02S-BqCR9e78KAAhBrPlPAbLtWsW4lM6PxPhRM_QuY2d-gj0SIGpRkHfmK_RtG6cWPFWa88-2hqxSSE0Q8rNeeWoGYQ5SeWu_rKPiqnvEYqlKIf9iuRjlWeiOhQCw6SqkLXCsYOvLQWenG1wEWNw8BzmQ8fcWAqrgIsVxUs19FrNbjNGW45OA_wgCXCc0GICgYiHzhVaWwIxcmdhBrDhjvx2vmhvdwy8iF_PIjgyMM38n9c7xBJKpqJsiswVWh1mz4__Ku',
    imageAlt: 'Digital calendar grid with mini icons for social media scheduling.',
    description: 'Pre-designed Instagram & TikTok story, reel cover, and post templates ready for quick content creators.'
  },
  {
    id: 'res-7',
    title: 'Leadership Series',
    type: 'Photos',
    format: 'High Res Gallery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF1wLDaYLUEd3LJ3LcA1F6PQn1PBiGqIdWhn-_FIBK62DYUud2YLLg4KZJAhOXZ0zFv8hodTNWhRdjEEGOn1uGKZs1XT8thzl1Y_vkYAlzkFJ-2-PEJLkH33jE6l_GzuODYfpoqRpvriqyoie1rtBXxP3yNp9stR6hIZjv4-XCcj4obASn8USzsw7BIBCOvgGqFYqrqz3Zfy2pDLtGJdqDjxp8Zzbe5k3WWncjpH4k5bkXmwit9oeh98Ref9QDFV3i8Le2hpW8loXy',
    imageAlt: 'Series of stock photos of women in conference and leadership roles.',
    description: 'Curated editorial gallery celebrating women in governance, STEM, legal advocacy, and grassroots movements.'
  }
];

export const FEATURED_SPOTLIGHT: Spotlight = {
  id: 'spotlight-featured',
  name: 'Mmakgotla Ketsile',
  category: 'Leadership',
  subCategory: 'Leadership & Innovation',
  quoteOrHeadline: 'Pioneering the tech landscape in Gaborone',
  description: 'Pioneering the tech landscape in Gaborone, Mmakgotla has founded three successful social enterprises dedicated to bridging the digital divide for young girls across Southern Africa. Her story is one of resilience, vision, and the power of local mentorship.',
  fullStory: `Mmakgotla Ketsile grew up in Gaborone with an insatiable curiosity for science and technology. Seeing the stark digital gap between urban centers and rural villages, she founded "TechSisters Botswana", an initiative that has trained over 4,000 young women in web development, robotics, and digital literacy.

"When you teach a young woman to code, you aren't just teaching her syntax—you are handing her the key to shape her own destiny," says Mmakgotla.

Today, her social enterprises collaborate with schools across Southern Africa, providing hardware labs, internet connectivity, and mentorship networks that match teenage girls with women leaders in STEM.`,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVhzm72td4TnMsBtDlZCs3Yb7ue6bxjjOtUpWNIMW7HjHFknqZ-d_3OQHAjJ3Ymnmh2aitnWhBgoEKdXvCo46z1IJxaZ4f9nSRLW7FyH_E4gEHvx_6N0OhTiV4pFTxFNwdYlZ751XzGdGeXGSIzTXYvRg2VqoDBp0xU2X-ik7awQOJ__rjPxQY-hdo2_rvPt07ZAOFKv7A0-qks92YxuvPCpQ8tY43Gfa46B7U9DJBoxMQBe8X6jwq4rYbiE4s2TrrezDfCWQXhYY',
  imageAlt: 'Portrait of Mmakgotla Ketsile standing confidently against a sunset skyline in Gaborone.',
  featured: true,
  country: 'Botswana'
};

export const SPOTLIGHTS_LIST: Spotlight[] = [
  {
    id: 'spotlight-1',
    name: 'Dr. Elena Rodriguez',
    category: 'Science',
    quoteOrHeadline: '"Innovation isn\'t just about discovery; it\'s about the doors we open for others to follow."',
    description: 'Leading pioneering research in renewable bio-materials and mentoring young women across global research institutes.',
    fullStory: 'Dr. Elena Rodriguez leads a groundbreaking lab focused on sustainable polymers derived from indigenous plant species. Beyond her 15 patents, she dedicates 30% of her time to running science bootcamps for girls in underrepresented communities.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcaJ-9RtP4xwBiavrveoOa3_YKm1whOy7BWtuDeGqhKLaLr-XjuaLdYTWgS0mVXvqyW8G5cGpHmu1R55z9TCp89oMCCKDcLOD0jYmpQxWXfuJtGRVRFfWKdnXqGcjVnJoUVxqWj5gsT0cKDYzQqExZYaZdGCdUjgoa9gOkO_mnVkleQImwytC-lFS18Z3lw7XFuLEHStaRRhLFeGVhmcjG_OGNBHxt7qC6SpMTiZew-tyUF1CD21_yKAvYmMLbZ8ub0F5o3cnG3oIF',
    imageAlt: 'Dr. Elena Rodriguez conducting lab experiments with vibrant liquids.'
  },
  {
    id: 'spotlight-2',
    name: 'Maya Chen',
    category: 'Sports',
    quoteOrHeadline: 'Breaking world records and glass ceilings simultaneously on the global track stage.',
    description: 'Olympic sprinter and champion for equal funding in women athletics across national sports federations.',
    fullStory: 'Maya Chen broke the national 200m track record while balancing a degree in sports management. She launched the "RunHer" foundation, which provides athletic gear and nutrition coaching to aspiring female runners.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS6C-8Vd3Poj5WKN8JKej2lMbNqJ9K_zjrLXMSWuJrULdhSjb-jVsem9OH0_yxwKTsaRamhnOWV46eJdQrK6SeKdkFPeLXm9VkijGxa7jaVE_fbJ6xS1kJfFHI9pSGiaKL3wJSKecgAQWJv6wexzHjJTha98N_Dpsw2hLajMAIqFaPn0hmnI4CftqTocb72LXUITHAOMaI4XmjFhZPibEyCUKviO_fA6XnIiqxmCgRgb_g3k0UvnoQzcjVTFlDeupvLcW2kYABj_4R',
    imageAlt: 'Maya Chen sprinting on a sunlit track field.'
  },
  {
    id: 'spotlight-3',
    name: 'Sarah Al-Farsi',
    category: 'Business',
    quoteOrHeadline: 'Redefining sustainable fashion and circular economy for the next generation of retailers.',
    description: 'Founder of a zero-waste textile startup empowering artisanal craftswomen with fair wages.',
    fullStory: 'Sarah Al-Farsi built a sustainable fashion enterprise that recycles ocean plastics into high-end durable textiles. Her supply chain connects over 500 female artisans directly to global consumer markets.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqDaO9e3NNh3QcieZ26pqhnE5TU5IttvgxZG_hrT41UslRuQSq07bkviotFo1oGZHV8lkPVxVQTN5iQK1E72ho2Lu4Y-VUqerrMQaJwG-PS84MAngr774sdbIUhe08vDjXWEb_MMPxE3ZRYICNMYX-RG8jexRjFNBHcaHB1E4nTlT-X3l0ZFftKmJVUV3GK5XsqctnwCpB7uLrpLs44Mn-YiFsamyuro1YVs-uL9UmKxjTFqI5zxCTra-e9Ale8CGsnnEhMzz34zjd',
    imageAlt: 'Sarah Al-Farsi smiling in her modern eco-friendly office.'
  },
  {
    id: 'spotlight-4',
    name: 'Justice Amara Okafor',
    category: 'Leadership',
    quoteOrHeadline: 'A tireless advocate for human rights and equitable legislation across the continent.',
    description: 'Human rights legal scholar drafting landmark gender equality bills and pro-bono defense funds.',
    fullStory: 'Justice Amara Okafor has spent two decades fighting discrimination in employment, property rights, and education. Her landmark legal cases set precedent across regional constitutional courts.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp2bWf0zMw1qPYn6xCNr21kmNo-79UXvu2WQGltynfcW1MtkH0P_OriNgqAy4H445ikQeKUY933yElgh69pCspBfdbJcm68TkKsbAhT8NfXyI-zA_OnNivu9-UsNF7r5lRSOtGwQzot1u9uVHkS9Z90mx1MJztGCDnDPJi8JXhRDUSRtgh7wyuE74ql94mtj-wgAZr8hMoIkz3frJD-hM3CPQjXrQYuXUWosgCKXffD-C9iF-dXHkLfdb60Tnhojc-ieSp-YM8YD3T',
    imageAlt: 'Justice Amara Okafor speaking passionately at a leadership forum.'
  },
  {
    id: 'spotlight-5',
    name: 'Li Wei',
    category: 'Science',
    quoteOrHeadline: 'Architecting ethical AI frameworks that prioritize human dignity and inclusivity.',
    description: 'AI ethics scholar and software engineer developing bias detection algorithms for machine learning.',
    fullStory: 'Li Wei leads an international AI ethics coalition ensuring machine learning models do not perpetuate historical gender or racial biases. She regularly advises international policy groups.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2PGYtTwNpgBIPsMKZAfPEtjhaWYF9zdH3FV20LlIbldPqKcyBqkU0__dFIU9FQr2CxZvV9Mu7QxJIHYGfkzLVVUcx-fNbhMSLnSlcNbfa1e9ZQo29XiQtY5a_AIUT5HOU8hFg8iA03JOIOE2MBOtk_wDGiL1Ft5Sy79Zs7-PyNfTW9TiETtDmCcl8FfmI1tbVHW8GUP2FEl6RJ_NQZVQQ4yadIbxvQPTn3X1ipbMJyxAqWhMSRhQaztzUS20rKcxmPhVlMWadREw0',
    imageAlt: 'Li Wei interacting with glowing futuristic digital interfaces.'
  },
  {
    id: 'spotlight-6',
    name: 'Klara Jensen',
    category: 'Sports',
    quoteOrHeadline: 'Defying limits in the pool and advocating for accessible sports facilities globally.',
    description: 'Paralympic swimmer and universal design activist building inclusive aquatic centers.',
    fullStory: 'After winning gold in swimming, Klara dedicated her platform to auditing public recreation facilities, ensuring young girls with disabilities have equal access to coaching and competitive sports.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY4pK3evIPKR25qPefu4fFxxLmMPi8dlPPxlPd1PCzmgl_0_5RK5FLjcivMsuvalmiGVQh_f5M8loXY_q0kzcRd7mSmQfH_HaUOQmmrxnF6bEdjuz52qK8utXrGzZwcqQOXWlujZ19Y700zz3jgU3900sO0WPqeUsGY2bKPJ8Tk3eWLNUWgju23C21amIFwNzYDy1sQ8lDjnJY9jhnpwB1ooua55je3UXa5nF9SQ4wpaEFcOqe-fRbCvmnIEbSBOc8GbIOSM7g0HU_',
    imageAlt: 'Klara Jensen mid-stroke in a crystal clear swimming pool.'
  }
];

export const INITIAL_GOALS: DreamGoal[] = [
  {
    id: 'goal-1',
    category: 'Education',
    title: "Master's in Data Science",
    description: 'Apply for the 2025 international scholarship program. Focus on ethical AI and gender data gap studies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAU4dvGRU2DBc-EAEvbIRb7dhWUydOXHj3CL2MO5KEJS_sMTQnAgV14hQL8F5odWHLyZ7-GbsnnPPc9M1yn2URVTyr4Ctbgfju9ddjatyjG8njGKPFtv-JQPA35cBj7v0x0QWW73Y1655Ni_IXePeJiXQD0dEOS7rR99zZlepOsxDybrNgft3J1i6e_BOB7wZCryB08BEtP3TQzkxPor9SURCHs7xECjzM78GuK2yaImdHNc0VFRuQgsNVBLF_d9aMW6KFUkSDdKVM',
    imageAlt: 'Group of young women studying together in a modern library.',
    targetDate: 'Dec 2025',
    rotation: -1
  },
  {
    id: 'goal-2',
    category: 'Leadership',
    title: 'Lead the Tech Summit',
    description: 'Speak on the main stage about women in executive roles and mentor 5 junior developers.',
    rotation: 2,
    contributors: ['+5', 'MB']
  },
  {
    id: 'goal-3',
    category: 'Creative Arts',
    title: 'Publish First Graphic Novel',
    description: 'A story about a young girl who discovers she can talk to code, empowering her community through tech.',
    rotation: -2,
    hasIllustrationPlaceholder: true
  },
  {
    id: 'goal-4',
    category: 'Education',
    title: 'Learn Public Speaking',
    description: 'Master stage presence, storytelling, and legislative testimony.',
    rotation: 1,
    completedTasks: [
      { id: 't1', text: 'Register for Toastmasters', done: true },
      { id: 't2', text: 'Record 5-minute pitch', done: false },
      { id: 't3', text: 'Final Presentation', done: false }
    ]
  },
  {
    id: 'goal-5',
    category: 'Leadership',
    title: 'Board Membership',
    description: 'Secure a position on a non-profit board by Q4 to drive social impact for underprivileged girls.',
    rotation: -1
  }
];

export const RIGHT_PILLARS: RightPillar[] = [
  {
    id: 'edu',
    title: 'Education',
    description: 'You have the right to learn, grow, and pursue any career path you choose without discrimination or barriers.',
    icon: 'school',
    colorClass: 'primary',
    points: ['Access to safe learning', 'Equal scholarships'],
    fullDetails: 'Every girl and young woman is entitled to accessible, quality, and safe education free from harassment or financial discrimination. This includes STEM opportunities, leadership training, and institutional support.'
  },
  {
    id: 'eq',
    title: 'Equality',
    description: 'Treating everyone with the same respect and providing the same opportunities, regardless of gender or background.',
    icon: 'balance',
    colorClass: 'secondary',
    points: ['Fair pay & leadership', 'Zero-bias treatment'],
    fullDetails: 'Constitutional and international rights guarantee equal pay for equal work, non-discriminatory hiring practices, and equal representation in boardrooms and government bodies.'
  },
  {
    id: 'safe',
    title: 'Safety',
    description: 'The right to live free from violence and harassment in your home, workplace, and public spaces.',
    icon: 'shield_with_heart',
    colorClass: 'tertiary',
    points: ['Bodily autonomy', 'Crisis support access'],
    fullDetails: 'You have absolute ownership over your body and well-being. Protections include strict legal enforcement against domestic abuse, workplace harassment, and universal access to emergency hotlines.'
  },
  {
    id: 'exp',
    title: 'Expression',
    description: 'Your voice matters. You have the right to speak up, share your ideas, and protest peacefully for change.',
    icon: 'campaign',
    colorClass: 'primary',
    points: ['Free speech & media', 'Creative freedom'],
    fullDetails: 'Freedom of expression protects peaceful assembly, digital publishing, artistic creation, and political advocacy without fear of censorship or retaliation.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Does a student have the right to wear a religious headscarf in a public school?',
    options: [
      { text: "Yes, it's protected expression.", isCorrect: true },
      { text: "No, it's not allowed.", isCorrect: false }
    ],
    explanation: 'Freedom of religion and expression protects symbolic attire in public educational institutions under international human rights frameworks.'
  },
  {
    id: 2,
    question: 'Are employers legally allowed to ask about pregnancy plans during job interviews?',
    options: [
      { text: 'Yes, for scheduling purposes.', isCorrect: false },
      { text: 'No, it is illegal gender bias.', isCorrect: true }
    ],
    explanation: 'Inquiries into family planning or marital status are strictly prohibited under employment non-discrimination laws.'
  },
  {
    id: 3,
    question: 'Do young women have a constitutional right to equal pay for work of equal value?',
    options: [
      { text: 'Yes, mandated by law.', isCorrect: true },
      { text: 'No, employers decide.', isCorrect: false }
    ],
    explanation: 'Equal remuneration laws mandate equal compensation regardless of gender for substantially similar work.'
  }
];
