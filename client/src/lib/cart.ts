import { CartItem } from '@/redux/features/cart/cartSlice';

// TODO: get delivery fee from backend with coupon
export const deliveryFee: number = 0;

export const getCartQuantity = (cart: CartItem[]): number => {
  return cart.reduce((quantity, item) => quantity + (item.quantity || 0), 0);
};

export const getSubTotal = (cart: CartItem[]): number => {
  return cart.reduce((total, cartItem) => {
    const itemTotal = (cartItem.product.productPrice || 0) * (cartItem.quantity || 0);
    return total + itemTotal;
  }, 0);
};

export const getTotalAmount = (cart: CartItem[], discount: number = 0): number => {
  const subtotal = getSubTotal(cart);
  return subtotal - discount;
};

export const activeCoupon = (coupon: string): boolean => {
  return coupon === "FFF";
};

export const getCouponDiscount = (coupon: string, total: number): number => {
  if (activeCoupon(coupon)) {
 
    return total * 0.2; // 20% discount
  }
  return 0;
};

export const getTotalWithDiscount = (
  cart: CartItem[],
  coupon: string
): number => {
  const total = getSubTotal(cart);
  const discount = getCouponDiscount(coupon, total);
  return getTotalAmount(cart, discount);
};

export const getTotalWithDelivery = (total: number, discount: number = 0): number => {
  return total + deliveryFee - discount;
};