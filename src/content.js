export const profile = {
  name: 'Dwiky Christian Febriano',
  email: 'dwikychristianfebriano07@gmail.com',
  phone: '+62-895-0628-6364',
  whatsapp: 'https://wa.me/6289506286364',
  github: 'https://github.com/DwikyCF',
  linkedin: 'https://www.linkedin.com/in/dwiky-christian-febriano',
  cv: '/cv/Dwiky-Christian-Febriano-CV.pdf',
  photo: '/images/dwiky-profile.jpg',
  location: 'Tangerang, Banten, Indonesia',
  roles: ['Aspiring Software Engineer', 'AI & Deep Learning Enthusiast', 'Mobile Application Developer', 'Creative Problem Solver'],
};

export const skills = [
  { title: 'Programming Languages', icon: 'code', items: ['Kotlin', 'Python', 'JavaScript', 'C', 'C#', 'HTML', 'CSS'] },
  { title: 'Frameworks & Libraries', icon: 'layers', items: ['React Native', 'Jetpack Compose', 'PyTorch'] },
  { title: 'Databases & Backend Services', icon: 'database', items: ['MySQL', 'Supabase'] },
  { title: 'Development & Design Tools', icon: 'terminal', items: ['Git', 'GitHub', 'Android Studio', 'Unity', 'Figma'] },
];

export const interests = ['Software Engineering', 'Mobile Application Development', 'Web Development', 'Deep Learning', 'Computer Vision', 'Game Development', 'UI/UX Implementation'];

export const projects = [
  { id: 'coronary', title: 'Coronary Artery Stenosis Detector', category: 'AI / Deep Learning', eyebrow: 'COMPUTER VISION', period: 'Feb — Jun 2026', featured: true, visual: 'artery',
    description: 'Exploring intelligent medical image analysis. A deep learning model that detects coronary artery stenosis from angiogram images using EfficientNet-B4.',
    technologies: ['Python', 'PyTorch', 'EfficientNet-B4', 'Computer Vision'], metrics: [['99.12%', 'Test accuracy'], ['99.12%', 'Macro F1-score']],
    note: 'Reported experimental test evaluation; not guaranteed clinical performance.', url: 'https://github.com/DwikyCF/Coronary-Stenosis-Detector', action: 'View on GitHub' },
  { id: 'brain', title: 'Brain Tumor Segmentation & Classification', category: 'AI / Deep Learning', eyebrow: 'MEDICAL IMAGING', period: 'Aug — Dec 2026', featured: true, visual: 'brain',
    description: 'A two-stage computer-aided diagnosis pipeline pairing Attention U-Net segmentation with ResNet-50 and EfficientNet-B4 classification.',
    technologies: ['Python', 'PyTorch', 'Attention U-Net', 'ResNet-50', 'EfficientNet-B4'], metrics: [['94.81%', 'ResNet-50 accuracy'], ['74.06%', 'Attention U-Net Dice']],
    note: 'Reported project evaluation; not clinically validated or deployed in healthcare.', url: 'https://github.com/DwikyCF/Brain-Tumor-Segmentation-And-Classification', action: 'View on GitHub' },
  { id: 'salon', title: 'Romi Salon', subtitle: 'Website Management System', category: 'Web Development', eyebrow: 'WEB DEVELOPMENT', period: 'Aug — Dec 2025', visual: 'salon',
    description: 'A business-oriented website management system that streamlines salon operations and makes services more accessible through a convenient digital experience.',
    technologies: ['Web Application', 'Website Management'], highlights: ['Business-focused development', 'Digital accessibility for salon services'], url: 'https://romisalon.store/', action: 'Visit Live Website' },
  { id: 'budget', title: 'Budget Lens', subtitle: 'Personal Finance Application', category: 'Mobile', eyebrow: 'ANDROID APPLICATION', visual: 'budget',
    description: 'An Android application for tracking income and expenses, managing budgets, reviewing summaries, and splitting bills with groups.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'CameraX'], highlights: ['Budget tracking & group expenses', 'Receipt scanning interface', 'Light & dark themes'],
    note: 'Uses local dummy data and simulated receipt extraction. No payment processing or production OCR.', url: 'https://github.com/DwikyCF/Budget-Lens-Application', action: 'View on GitHub' },
  { id: 'farm', title: 'Farm Guardian', subtitle: 'Unity Windows Game', category: 'Game Development', eyebrow: 'GAME DEVELOPMENT', visual: 'farm',
    description: 'A Windows desktop game built with Unity, bringing creative ideas to life through interactive gameplay and practical game development.',
    technologies: ['Unity', 'C#', 'Game Development'], highlights: ['Windows desktop game build', 'Interactive Unity experience'], note: 'Repository contains a downloadable Windows build; Unity source and a browser-playable demo are not provided.',
    url: 'https://github.com/DwikyCF/Farm-Guardian-Game', action: 'View Game Repository' },
];

export const experience = [
  { title: 'IT Support — National Civics Seminar', organization: 'Universitas Multimedia Nusantara', period: 'Mar — Jun 2025', type: 'Organizational experience', description: 'Contributed to technical operations for a national-scale university seminar attended by more than 1,000 participants.', details: ['Assisted with development of the event registration website.', 'Supported seminar technical operations and Zoom-based event operations.'], tags: ['IT Support', 'Web Development', 'Event Operations'] },
  { title: 'Front-End Team — ISFEST', organization: 'International UI/UX Competition', period: 'Sep — Oct 2026', type: 'Competition involvement', description: 'Participated in an international UI/UX competition as part of the front-end team, gaining hands-on experience in collaborative design and development.', tags: ['Front-End', 'UI/UX', 'Team Collaboration'] },
  { title: 'Company Profile Website Development', organization: 'PT. Suya Energi Baru Teknologi', period: 'Sep — Dec 2026', type: 'Development project', ongoing: true, description: 'Developing a responsive company profile website to present company information, services, and brand identity through an accessible digital platform.', tags: ['Web Development', 'Responsive Design', 'Company Profile'] },
];
