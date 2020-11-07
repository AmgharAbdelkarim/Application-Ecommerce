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
        const filteredArray = products.filter(
          (product: any) => product._id === element.productId,
        );
        return {
          name: filteredArray[0].title,
          quantity: element.quantity,
          price: filteredArray[0].price,
          description: filteredArray[0].description,
          imageUrl: filteredArray[0].imageUrl,
          _id: filteredArray[0]._id,
        };
      });
  },
);
