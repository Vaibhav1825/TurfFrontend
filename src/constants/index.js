import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefiteImg6,
  benefiteImg5,
  benefiteImg4,
  benefiteImg3,
  benefiteImg2,
  benefiteImg1,
  canteenmp4,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  bowlingball,
  cricketball,
  tennis,
  football,
  basketball,
  golfball,
  bat
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Booking",
    url: "/booking",
  },
  {
    id: "2",
    title: "canteen",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "sports",
    url: "/sports",
  },
  {
    id: "4",
    title: "New account",
    url: "/registration",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    // title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    // title: "Smart Automation",
    text: collabText,
  },
  {
    id: "2",
    // title: "Top-notch Security",
    text: collabText,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: bowlingball,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: football,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: tennis,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: cricketball,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: golfball,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: basketball,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: bat,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Effortless Ground Booking",
    text: "Simplify your sports ground reservations with our intuitive platform, ensuring you spend less time booking and more time playing.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefiteImg1,
  },
  {
    id: "1",
    title: "Wide Range of Venues",
    text: "Access a variety of top-notch sports grounds in your area, tailored to meet the needs of different sports and activities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefiteImg2,
    light: true,
  },
  {
    id: "2",
    title: "Real-Time Availability",
    text: "Check real-time availability and secure your preferred time slots instantly, avoiding the hassle of double bookings or last-minute changes.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefiteImg3,
  },
  {
    id: "3",
    title: "User-Friendly Interface",
    text: "Navigate through our platform with ease, thanks to a user-friendly interface designed to provide a seamless booking experience for all users.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefiteImg4,
    light: true,
  },
  {
    id: "4",
    title: "Secure Payment Options",
    text: "Enjoy peace of mind with secure, multiple payment options, ensuring your transactions are safe and convenient.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefiteImg5,
  },
  {
    id: "5",
    title: "Customer Support",
    text: "Rely on our dedicated customer support team for any assistance you need, making your booking experience smooth and stress-free.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefiteImg6,
  },
];


export const sportsDetails = [
  {
    id: 1,
    title: "Football",
    description: "Experience the thrill of football with our top-notch facilities and equipment.",
    imageUrl: "/path/to/football-image.jpg" // Replace with actual image path
  },
  {
    id: 2,
    title: "Basketball",
    description: "Shoot some hoops in our state-of-the-art basketball courts designed for all skill levels.",
    imageUrl: "/path/to/basketball-image.jpg" // Replace with actual image path
  },
  {
    id: 3,
    title: "Tennis",
    description: "Play tennis on our well-maintained courts, suitable for both recreational and competitive play.",
    imageUrl: "/path/to/tennis-image.jpg" // Replace with actual image path
  },
  {
    id: 4,
    title: "Swimming",
    description: "Dive into our Olympic-sized swimming pools, perfect for laps, training, or leisure.",
    imageUrl: "/path/to/swimming-image.jpg" // Replace with actual image path
  }
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
