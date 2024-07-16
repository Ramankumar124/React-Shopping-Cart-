export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.map((c) =>
          c.id === action.payload.id ? { ...c, qty: action.payload.qty } : c
        ),
      };

    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_ASCENDING":
      return {
        ...state,
        FilterProducts: [...state.FilterProducts].sort(
          (a, b) => a.price - b.price
        ),
      };
    case "SORT_DESCENDING":
      return {
        ...state,
        FilterProducts: [...state.FilterProducts].sort(
          (a, b) => b.price - a.price
        ),
      };
    case "FILTER_BY_STOCK":
      if (action.payload) {
        return { ...state, FilterProducts: state.product };
      } else {
        return {
          ...state,
          FilterProducts: state.FilterProducts.filter((p) => p.instock == true),
        };
      }
    case "FILTER_BY_DELIVERY":
      if (action.payload) {
        return {
          ...state,
          FilterProducts: state.FilterProducts.filter(
            (p) => p.fastDelivery === action.payload
          ),
        };
      }
      else{
        return {
          ...state,
          FilterProducts: state.product.filter((pd) => pd.instock == true),
        };
      }
    case "CLEAR_FILTERS":
      return {
        ...state,
        FilterProducts: state.product.filter((pd) => pd.instock == true),
      };
    case "SEARCH":
      if (action.payload.trim() === "") {
        return {
          ...state,
          FilterProducts: state.product.filter((pd) => pd.instock == true),
        };
      }
      // Filter products according to search query
      return {
        ...state,
        FilterProducts: state.FilterProducts.filter((pd) =>
          pd.name.toLowerCase().startsWith(action.payload.toLowerCase())
        ),
      };
      case "SORT_BY_RATING":
        return {
          ...state,
          FilterProducts: state.FilterProducts.filter((pd) => pd.ratings >= action.payload)
        }
    default:
      return state;
  }
};
