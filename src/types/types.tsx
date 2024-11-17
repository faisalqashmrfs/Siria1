export interface SectionHeaderProps {
  title: string,
  directionclass: string
}

export interface ContactSocialProps {
  icon: string | undefined,
  title: string | undefined,
  details?: string | undefined,
  Link?: string | undefined
}

export type TContactSocialMediaData = {
  data: any;
  id: string,
  email: string,
  phone_number: string,
  adresses: string,
  facebook_link: string,
  instegram_link: string,
  whatsApp_number: string,
  twitter_link: string,
  linkedin_link: string,
  youtube_link: string

}
export interface NavigationLinksProps {
  navigateMain: string;
  navigateLink: string;
  navigateLinkMain: string;
  navigateSubmain: string;
  navigateLinkSubmain: string;
  navigateSubmain2: string;

}


export interface Story {
  id: number;
  description: string;
  file: string;
}

export interface ProductsProps {
  brand_id: number | undefined,
  brandColor: string | undefined

}
export interface TProduct {
  main_image:string,
  additional_image: string,
  name: string,
  color: string
}

export type TBrandData = {
  id: number;
  name: string;
  description: string;
  brand_color: string;
  background_image: string;
  presentation_image: string;
  main_image: string;
  categories: TCategoryData[]
}

export type TCategoryData = {
  id: number;
  name: string;
  products: TProductData[]
}

export type TProductData = {
  name: string;
  main_image: string;
  additional_image: string;
}
