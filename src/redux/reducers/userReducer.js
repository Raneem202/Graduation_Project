import {
  Add_React,
  ApartmentRequest,
  Get_Apartment_Detailss,
  Post_Comment,
  payment,
} from "../type";

const statein = { Details: [], comment: [], requestApart: [], payment: [] };
export const UserReducer = (state = statein, action) => {
  switch (action.type) {
    case Get_Apartment_Detailss: {
      return { Details: action.data };
    }
    case Post_Comment: {
      return { comment: action.data };
    }
    case Add_React: {
      return { comment: action.data };
    }
    case ApartmentRequest: {
      return { requestApart: action.data };
    }
    case payment: {
      return { payment: action.data };
    }
    default: {
      return state;
    }
  }
};
