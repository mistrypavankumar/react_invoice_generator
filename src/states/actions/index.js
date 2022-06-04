export const addClientDetails = (clientDetails) => async (dispatch) => {
  dispatch({
    type: "ADD_CLIENT_DETAILS",
    payload: {
      name: clientDetails.name,
      address: clientDetails.address,
      phoneNumber: clientDetails.phoneNumber,
      notes: clientDetails.notes,
    },
  });
};

export const addCompanyDetails = (companyDetails) => async (dispatch) => {
  dispatch({
    type: "ADD_COMPANY_DETAILS",
    payload: {
      name: companyDetails.name,
      address: companyDetails.address,
      email: companyDetails.email,
      phoneNumber: companyDetails.phoneNumber,
      website: companyDetails.website,
      bankName: companyDetails.bankName,
      accountHolder: companyDetails.accountHolder,
      accountNumber: companyDetails.accountNumber,
    },
  });
};

export const addProductItem = (productItem) => async (dispatch) => {
  dispatch({
    type: "ADD_PRODUCT_ITEM",
    payload: productItem,
  });
};

export const addListOfProducts = (listOfProducts) => async (dispatch) => {
  dispatch({
    type: "ADD_LIST_OF_PRODUCTS",
    payload: {
      itemDescription: listOfProducts.itemDescription,
      quantity: listOfProducts.quantity,
      price: listOfProducts.price,
      amount: listOfProducts.amount,
    },
  });
};
