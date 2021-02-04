
export  interface User {
  email: string;
  password: string;
  // returnSecureToken?: boolean;
}

export  interface Message {
  message: string;
}



export interface Post {
  _id: string;
  title: string;
  titleRo: string;
  titleEn: string;
  img: string;
  preview: string;
  previewRo: string;
  previewEn: string;
  content: string;
  contentRo: string;
  contentEn: string;
  category: string;
  date: Date;
}


export interface PostCategory {
  _id?: string;
  name: string;
  nameRo: string;
  nameEn: string;
}

export interface Category {
  _id?: string;
  name: string;
  nameRo: string;
  nameEn: string;
  imageSrc?: string;
  user?: string;
}

export interface SubCategory {
  _id?: string;
  name: string;
  nameRo: string;
  nameEn: string;
  desc: string;
  descRo: string;
  descEn: string;
  num: number;
  category: string;
  imageSrc?: string;
  user?: string;
}

export interface Product {
  _id?: string;
  name: string;
  nameRo: string;
  nameEn: string;
  code?: string;
  cost: number;
  oldCost?: number;
  img?: any;
  imgOne?: any;
  imgTwo?: any;
  imgThree?: any;
  imgFour?: any;
  content?: string;
  contentRo?: string;
  contentEn?: string;
  spec?: string;
  specRo?: string;
  specEn?: string;
  certificate?: string;
  functions?: string;
  functionsRo?: string;
  functionsEn?: string;
  option?: boolean;
  active?: boolean;
  sale?: boolean;
  user?: string;
  date: Date;
  subcategory: string;
  quantity?: number;
  casa?: any;
  pandus?: any;
  indicator?: any;


}




export interface Order{
  date?: Date;
  order?: number;
  user?: string;
  list?: OrderProduct[];
  _id?: string;
  order_number?: string;
  c_name?: string;
  c_phone?: string;
  c_email?: string;
  c_type_shipping?: string;
  c_address_shipping?: string;
  c_company_name?: string;
  c_comment?: string;
  total_cost?: number;



}


export interface ListOption {
  casa?: CasaOption[];
  indicator?: IndicatorOption[];
  pandus?: PandusOption[];
  _id?: string;
}

export interface OrderProduct {
  name: string;
  img: string;
  cost: number;
  quantity: number;
  casa?: CasaOption[];
  indicator?: IndicatorOption[];
  pandus?: PandusOption[];
  _id?: string;
}

export interface CasaOption {
  _id?: string;
  name: string;
  nameRo?: string;
  nameEn?: string;
  price: number;
  user?: string;
}

export interface IndicatorOption {
  name: string;
  nameRo?: string;
  nameEn?: string;
  img: string;
  content: string;
  contentRo?: string;
  contentEn?: string;
  price: number;
  _id?: string;
}

export interface PandusOption {
  name: string;
  nameRo?: string;
  nameEn?: string;
  img: string;
  content: string;
  contentRo?: string;
  contentEn?: string;
  price: number;
  _id?: string;
}


export  interface FbCreateResponse {
  name: string;
}

