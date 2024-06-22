import {
  Edit_Apartment,
  Get_Apartment_Details,
  Get_Notifications,
  Get_User_Details,
  accept_user,
  getnumbers,
  user_request,
} from "../type";

const intialstate = {
  getnotifi: [],
  userdetails: [],
  apartmentdetails: [],
  editapartment: [],
  userrequst: [],
  accept: [],
  getnumbers: [],
  loading: true,
};
export const OwnerReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Get_Notifications: {
      return { ...state, getnotifi: action.data, loading: false };
    }
    case Get_User_Details: {
      return { ...state, userdetails: action.data, loading: false };
    }
    case user_request: {
      return { ...state, userrequst: action.data, loading: false };
    }
    case Get_Apartment_Details: {
      return { ...state, apartmentdetails: action.data, loading: false };
    }
    case getnumbers: {
      return { ...state, getnumbers: action.data, loading: false };
    }
    case Edit_Apartment: {
      return { ...state, editapartment: action.data, loading: false };
    }
    case accept_user: {
      return { ...state, accept: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
