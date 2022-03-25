const reducer = (state, action) => {

  switch (action.type) {
    case "DELETE_ITEM": {
      return {
        ...state,
        item: state.item.filter((items) => items.id !== action.payload),
      };
    }
    case "INCREMENT": {
      const updateQuantity = state.item.map((currItem) => {
        if (currItem.id === action.itemId) {
          return { ...currItem, quantity: currItem.quantity + 1 };
        }
        return currItem;
      });
      return { ...state, item: updateQuantity };
    }
    case "DECREMENT": {
      const updateQuantity = state.item.map((currItem) => {
        if (currItem.id === action.itemId) {
          return { ...currItem, quantity: currItem.quantity - 1 };
        }
        return currItem;
      }).filter((currItem) =>currItem.quantity!==0);
      return { ...state, item: updateQuantity };
    }

    case "CLEAR_ALL": {
      return { ...state, item: [] };
    }
    case "TOTAL_QUANTITY": {
      let { totalItems,totalAmount } = state.item.reduce(
        (accumulate, currval) => {
          let {price, quantity } = currval;
          let  updatedtotalPrice=price * quantity;
          accumulate.totalAmount += updatedtotalPrice
          accumulate.totalItems += quantity;
          return accumulate;
        },
        { totalItems: 0,
          totalAmount:0,
        }
      );
      return { ...state, totalItems,totalAmount };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
