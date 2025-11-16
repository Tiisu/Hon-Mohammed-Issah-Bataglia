export type SocialLink = {
  platform: "facebook" | "twitter" | "instagram" | "tiktok" | "youtube" | "website" | "whatsapp" | "linkedin";
  url: string;
};

export type SiteConfig = {
  candidateName: string;
  role: string;
  party: string;
  constituency: string;
  slogan?: string;
  email?: string;
  phone?: string;
  address?: string;
  social?: SocialLink[];
  nav: { label: string; href: string }[];
};

export const siteConfig: SiteConfig = {
  candidateName: "Hon. Mohammed Issah Bataglia",
  role: "Member of Parliament",
  party: "National Democratic Congress (NDC)",
  constituency: "Sissala East Constituency",
  slogan: "Progress, Unity, and Service",
  email: "info@example.com",
  phone: "+233 00 000 0000",
  address: "Sissala East, Upper West Region, Ghana",
  social: [
    { platform: "facebook", url: "https://facebook.com/" },
    { platform: "twitter", url: "https://twitter.com/" },
    { platform: "instagram", url: "https://instagram.com/" },
    { platform: "youtube", url: "https://youtube.com/" }
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // { label: "Agenda", href: "/agenda" },
    { label: "News", href: "/news" },
    // { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};