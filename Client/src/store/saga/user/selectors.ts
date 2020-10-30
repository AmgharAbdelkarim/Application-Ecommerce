import { createSelector } from 'reselect'

export const shopCartSelector = (state: any) => {
    console.log(state)
    return state.AuthReducer.cart.items;
};
export const getProducts = (state: any) => {
    console.log(state.ProductReducer)
    return state.ProductReducer;
};
export const cartSelector = createSelector(
    [shopCartSelector, getProducts ],
    (items, products) => {
        return items.map((element: any) => {
            const filteredArray = products.filter((product: any) => product._id === element.productId)
            return {
                productName: filteredArray[0].title,
                quantity: element.quantity,
                prix : filteredArray[0].price,
            }
        });
    }
)