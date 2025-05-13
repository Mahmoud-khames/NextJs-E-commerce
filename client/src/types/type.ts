export interface IProduct {
  _id: string;
  productName: string;
  productSizes: string[];
  productPrice: number;
  productDescription: string;
  productImage: string;
  productCategory: string;
  productRating: number;
  productReviews: []; 
  productQuantity: number;
  productStatus: boolean;
  productImages: string[];
  oldProductPrice: number;
  productDiscount: number;
  productDiscountPrice: number;
  productColors: string[];
  productSlug: string;  
}
