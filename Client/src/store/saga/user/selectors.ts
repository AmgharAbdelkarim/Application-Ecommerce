import { createSelector } from 'reselect';

export const shopCartSelector = (state: any) => {
  return state.AuthReducer.cart.items;
};
export const getProducts = (state: any) => {
  return state.ProductReducer;
};
export const cartSelector = createSelector(
  [shopCartSelector, getProducts],
  (items, products) => {
    
    if (items)
      return items.map((element: any) => {
        const filteredArray = products &&  products.filter(
          (product: any) => product._id === element.productId,
        );
        
        return {
          name: (filteredArray.length > 0 && filteredArray[0].title) || element.productId.title,
          quantity: element.quantity,
          price: (filteredArray.length > 0 && filteredArray[0].price) || element.productId.price,
          description: (filteredArray.length > 0 && filteredArray[0].description) || element.productId.description,
          imageUrl: (filteredArray.length > 0 && filteredArray[0].imageUrl )|| element.productId.imageUrl,
          _id: (filteredArray.length > 0 && filteredArray[0]._id ) || element.productId._id,
        };
      });
  },
);
