export interface HeaderData {
  email: string;
  logoAr: string;
  logoEn: string;
  phone: string;
  whatsApp: string;
}
export interface FooterData {
  logoAr: string;
  logoEn: string;
  footerAr: string;
  footerEn: string;
  instagram: string;
  snapChat: string;
  twitter: string;
}

// models of body request
export interface BodySliderData {
  titleSliderAr: string;
  titleSliderEn: string;
  sliderTextAr: string;
  sliderTextEn: string;
  cvAr: string;
  cvEn: string;
  sliders: Slider[];
  aboutHome: AboutHome[];
  descriptionOurServicesAr: string;
  descriptionOurServicesEn: string;
  businessHome: ServicesItem[];
  servicesHome: ServicesItem[];
  facility: string;
  maintenanceService: string;
  certifiedEmployee: string;
  successRate: string;
  descriptionOurProjectsAr: string;
  descriptionOurProjectsEn: string;
  projectsHome: ProjectsHome[];
  clients: Client[];
  descriptionOurSayAboutUsAr: string;
  descriptionOurSayAboutUsEn: string;
  sayAboutUs: SayAboutU[];
}

export interface Slider {
  id: number;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface AboutHome {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  image: string;
  show: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface ServicesItem {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  description_ar: string;
  description_en: string;
  icon: string;
}

export interface ProjectsHome {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  master_image: string;
  sub_image: string;
  business_id: number;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: number;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface SayAboutU {
  id: number;
  name: string;
  jop_name: string;
  message: string;
  image: string;
  status: string;
  created_at: string;
  updated_at: string;
}
