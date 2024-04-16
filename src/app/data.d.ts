export interface ICta {
  text: string;
  link?: string;
}
export interface ISettings {
  colors: IColorTheme;
  buttonBorderRadius: number;
}
export interface IColorTheme {
  primary: IHexType;
  dark: IHexType;
  light: IHexType;
}

export interface IHexType {
  hex: string;
}

export interface ICustomImage {
  alt: string;
  image: IImage;
}
export interface IImage {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

export interface ISlug {
  current: string;
  _type: string;
}
export interface IFancyText {
  part1: string;
  part2: string;
  part3?: string;
}

export interface IHero {
  subTitle?: string;
  title: string;
  desc: string;
  customImage: ICustomImage;
  ctas?: {
    cta1: ICta;
    cta2?: ICta;
  };
  quote: IQuote;
}

export interface IQuote {
  leftText: string;
  rightText: string;
}

export interface IServices {
  services: IService[];
}

export interface IService {
  title: string;
  description: string;
  customImage: ICustomImage;
}

export interface IFeatures {
  features: IFeature[];
}

export interface IFeature {
  customImage: ICustomImage;
  title: string;
  desc: string;
}

export interface IProcesses {
  processes: IProcess[];
}

export interface IProcess {
  title: string;
  desc: string;
  features: IFeature[];
}

export interface IValues {
  values: ValueProps[];
}

export interface IValue {
  title: string;
  desc: string;
}

export interface IAboutContent {
  customImage: ICustomImage;
  name?: string;
  title1: FancyTextProps;
  desc1: string;
  title2?: string;
  desc2?: string;
  cta?: boolean;
}

export interface IAbout {
  content: IAboutContent;
}

export interface IWorkBlock {
  works: IWork[];
}

export interface IWork {
  customImage: ICustomImage;
  title: string;
  desc: string;
  primaryLink: ICta;
}

export interface INavLink {
  title: string;
  ctaArray: ICta[];
}

export interface INavBar {
  logo: ICustomImage;
  links: string[];
  lang: string;
}

export interface ISocials {
  title?: string;
  links: ICta[];
}

export interface IBlock {
  _key: string;
  _type: string;
  children: { _key: string; _type: string; marks: string[]; text: string }[];
}

export interface ILegalPage {
  path: string;
  title: string;
  data: IBlock[];
}
export interface IFooter {
  legals: { title: string; path: string }[];
  trademark: string;
  socials: ISocials;
}

export interface INotFound {
  title: string;
  desc: string;
}

export enum LocalPaths {
  HOME = "/home",
  ABOUT = "/about-work",
  WORK = "/work",
  CONTACT = "/contact",
  TERMS = "/terms-and-conditions",
  PRIVACY = "/privacy-policy",
  SERVICE = "/service",
  BRANDING = "/branding",
  LANDING = "/landing-page",
  PACKAGE = "/total-package",
  CUSTOM = "/custom-work",
}
