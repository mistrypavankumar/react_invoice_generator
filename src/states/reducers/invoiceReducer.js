export const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CLIENT_DETAILS": {
      return {
        ...state,
        clientDetails: action.payload,
      };
    }

    case "ADD_COMPANY_DETAILS": {
      return {
        ...state,
        companyDetails: action.payload,
      };
    }

    case "ADD_PRODUCT_ITEM": {
      return {
        ...state,
        productItem: action.payload,
      };
    }

    case "ADD_LIST_OF_PRODUCTS": {
      return {
        ...state,
        listOfProducts: [...state.listOfProducts, action.payload],
      };
    }
    case "ADD_INVOICE_DETAILS": {
      return {
        ...state,
        invoiceDetails: action.payload,
      };
    }

    default:
      return state;
  }
};
