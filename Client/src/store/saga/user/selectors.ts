import { createSelector } from 'reselect'

export const shopCartSelector = (state: any) => {
    return state.AuthReducer.cart.items;
};
export const getProducts = (state: any) => {
    return state.ProductReducer;
};
export const cartSelector = createSelector(
    [shopCartSelector, getProducts ],
    (items, products) => {
        return items.map((element: any) => {
            const filteredArray = products.filter((product: any) => product._id === element.productId)
            return {
                name: filteredArray[0].title,
                quantity: element.quantity,
                price: filteredArray[0].price,
                imageUrl: filteredArray[0].imageUrl,
                _id: filteredArray[0]._id,
            }
        });
    }
)