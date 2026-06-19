export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  tag: string;
  headline: string;
  highlight: string;
  description: string;
  cta: string;
  ctaHref: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface TeamMember {
  id: number;
  title: string;
  name: string;
  email: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: number;
  step: string;
  title: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/slide-jerseys.jpg",
    alt: "Custom sublimated sports jerseys",
    tag: "Team Apparel",
    headline: "Crafted for",
    highlight: "Champions",
    description:
      "Premium sublimated jerseys with vivid colors, sharp detail, and durable construction for every sport.",
    cta: "View Services",
    ctaHref: "#services",
  },
  {
    id: 2,
    image: "/images/slide-manufacturing.jpg",
    alt: "Custom sportswear manufacturing",
    tag: "Full Production",
    headline: "Built to Your",
    highlight: "Specifications",
    description:
      "End-to-end custom sportswear manufacturing — from concept sketches to finished uniforms on your doorstep.",
    cta: "Start a Project",
    ctaHref: "#contact",
  },
  {
    id: 3,
    image: "/images/slide-sublimated.png",
    alt: "Sublimated team uniforms",
    tag: "Sublimation",
    headline: "Unlimited",
    highlight: "Design Freedom",
    description:
      "Full-color sublimated uniforms with unlimited revisions, print-ready files, and fast turnaround.",
    cta: "Explore Sublimation",
    ctaHref: "#services",
  },
  {
    id: 4,
    image: "/images/slide-custom-wear.jpg",
    alt: "Custom wear collection",
    tag: "Multi-Sport",
    headline: "Every Sport,",
    highlight: "Every Style",
    description:
      "Soccer, basketball, baseball, tracksuits, and polos — tailored designs that define your team identity.",
    cta: "See Our Work",
    ctaHref: "#about",
  },
  {
    id: 5,
    image: "/images/image.png",
    alt: "Professional digitizing and patches",
    tag: "Digitizing & Patches",
    headline: "Precision",
    highlight: "In Every Stitch",
    description:
      "Expert embroidery digitizing and custom patches — optimized files, vibrant colors, flawless execution.",
    cta: "Get a Quote",
    ctaHref: "#contact",
  },
];

export const stats = [
  { value: 2500, suffix: "+", label: "Projects Delivered" },
  { value: 500, suffix: "+", label: "Teams Outfitted" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 48, suffix: "hr", label: "Avg. Turnaround" },
];

export const services: Service[] = [
  {
    id: "digitizing",
    title: "Embroidery Digitizing",
    description:
      "Machine-ready files with optimized stitch counts, proper underlay, and minimal thread changes for flawless production runs.",
    icon: "needle",
    stat: "24–48hr",
  },
  {
    id: "patches",
    title: "Custom Patches",
    description:
      "Embroidered, woven, PVC, and chenille patches — vibrant, durable, and built to represent your brand with pride.",
    icon: "patch",
    stat: "Any Qty",
  },
  {
    id: "vector",
    title: "Vector Artwork",
    description:
      "Clean, scalable vector conversions from any source — sharp lines and precise curves ready for print or embroidery.",
    icon: "pen",
    stat: "All Formats",
  },
  {
    id: "apparel",
    title: "Custom Apparel",
    description:
      "Sublimated and embroidered team wear from jerseys to hoodies — designed for performance and lasting visual impact.",
    icon: "shirt",
    stat: "Full Range",
  },
  {
    id: "promotional",
    title: "Promotional Products",
    description:
      "Branded merchandise including mugs, bags, and accessories — high-quality printing that keeps your name visible.",
    icon: "gift",
    stat: "Bulk OK",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: "01",
    title: "Share Your Vision",
    description:
      "Send us your logo, artwork, or concept. We review every detail and confirm specs before starting.",
  },
  {
    id: 2,
    step: "02",
    title: "Design & Digitize",
    description:
      "Our team creates or refines your design, producing optimized files ready for production.",
  },
  {
    id: 3,
    step: "03",
    title: "Proof & Revise",
    description:
      "You receive proofs for approval. Unlimited revisions until the result matches your vision exactly.",
  },
  {
    id: 4,
    step: "04",
    title: "Produce & Deliver",
    description:
      "Final production with quality checks, then fast shipping straight to you — on time, every time.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "The digitizing quality is unmatched. Clean runs on our machines every single time, with zero thread breaks or color issues.",
    name: "James Wilson",
    role: "Operations Manager",
    company: "Metro Athletics",
  },
  {
    id: 2,
    quote:
      "Our team uniforms turned out incredible. The sublimation colors are vibrant and the fit is perfect across all sizes.",
    name: "Sarah Chen",
    role: "Athletic Director",
    company: "Peak Performance Co.",
  },
  {
    id: 3,
    quote:
      "Fast, professional, and always responsive. Sublime has been our go-to partner for patches and apparel for over two years.",
    name: "Marcus Rivera",
    role: "Business Owner",
    company: "Rivera Custom Gear",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    title: "Founder & Owner",
    name: "Mr. Kashan",
    email: "kashan@sublimesportsapparel.com",
  },
  {
    id: 2,
    title: "Co-Owner",
    name: "Mr. Kashif",
    email: "azan@sublimesportsapparel.com",
  },
  {
    id: 3,
    title: "Director of Sales",
    name: "Mr. abc",
    email: "abc@sublimesportsapparel.com",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "quality",
    question: "What makes your embroidery digitizing different?",
    answer:
      "We focus on machine-ready files with optimized stitch counts, proper underlay, and minimal thread changes. Every design is tested for clean runs on commercial embroidery equipment before delivery.",
  },
  {
    id: "turnaround",
    question: "What is your typical turnaround time?",
    answer:
      "Standard digitizing orders are completed within 24–48 hours. Rush services are available for urgent projects. Apparel and patch orders vary by quantity — contact us for a precise timeline.",
  },
  {
    id: "formats",
    question: "What file formats do you provide?",
    answer:
      "We deliver in all major embroidery formats including DST, PES, EXP, JEF, VP3, and more. Vector files are provided in AI, EPS, PDF, and SVG formats.",
  },
  {
    id: "minimum",
    question: "Is there a minimum order quantity?",
    answer:
      "No minimum for digitizing and vector services. Apparel and patch orders may have quantity recommendations for best pricing — we work with orders of all sizes.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "Embroidery Digitizing",
  "Custom Patches",
  "Sublimated Uniforms",
  "Vector Artwork",
  "Team Apparel",
  "Promotional Products",
  "Fast Turnaround",
  "Unlimited Revisions",
];
