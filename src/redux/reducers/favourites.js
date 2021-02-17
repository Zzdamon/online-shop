const initialState = {
    products: []
}


export function favouritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            // const updatedProducts = state.favourites.map(product => {
            // if (product.id !== action.payload.product.id)
            //         return product;
                
            // })

           
           
                return Object.assign({}, state, {
                    products:[...state.products, action.payload] 
                })
            

        case 'REMOVE_FROM_FAVOURITES':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}

