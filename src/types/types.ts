export type MenuType = {
    id  : string;    
    title : string;
    desc?  : string;
    color  :string;
    img?  : string;
    slug   : string;    
 } []

 export type ProductType = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };