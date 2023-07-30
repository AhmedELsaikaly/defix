export interface IServices {
  TitleOurServicesAr: string,
  TitleOurServicesEn: string
  descriptionOurServicesAr: string;
  descriptionOurServicesEn: string;
  business: IBusinessItem[];
  services: IServiceItem[];
}

export interface IBusinessItem {
  id: number;
  title_ar: string;
  title_en: string;
  status: string;
  created_at: string;
  updated_at: string;
  //TODO: needed keys
  icon: string;
  description_ar: string;
  description_en: string;
}

export interface IServiceItem {
  id: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  icon: string;
  image: string;
  business_id: number;
  status: string;
  created_at: string;
  updated_at: string;
  description_inside_details_ar: string;
  description_inside_details_en: string;
}
