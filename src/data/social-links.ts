export type SocialLink = {
  label: string;
  iconName: string;
  url: string;
};

export type SocialLinks = SocialLink[];

export const links: SocialLinks = [
  {
    label: "Instagram",
    iconName: "ph:instagram-logo",
    url: "https://instagram.com/ppiaachen",
  },
  {
    label: "TikTok",
    iconName: "ph:tiktok-logo",
    url: "https://tiktok.com/@ppiaachen",
  },
  {
    label: "Youtube",
    iconName: "ph:youtube-logo",
    url: "https://www.youtube.com/c/PPIAachen",
  },
  {
    label: "Facebook",
    iconName: "ph:facebook-logo",
    url: "https://www.facebook.com/ppiaachen",
  },
  {
    label: "LinkedIn",
    iconName: "ph:linkedin-logo",
    url: "https://www.linkedin.com/company/ppiaachen",
  },
];
