export interface IUserData {
  name:string;
  email:string;
  age:number | null ;
  contactNumber:number | null ;
  password:string;
  confirmPass:string;
}

export interface IUserLoginData {
  email:string;
  password:string;
}

interface IRelatedProduct {
  productID:string;
}

export interface IProducts {
  productID:string;
  productName:string;
  productPrice:number;
  productPriceFormatted:string;
  inStock:boolean;
  relatedProducts:IRelatedProduct[];
  productPriceDrop?:number
}


export interface IUserSignUpData {
  email:string;
  password:string;
  confirmPassword:string;
}

