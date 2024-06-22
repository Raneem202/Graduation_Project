import {
  Edit_Password,
  Edit_Profile,
  New_Password,
  Post_Code,
  Write_Code,
  account_Login,
  account_Register,
} from "../type";

const intialstate = {
  signup: [],
  signin: [],
  code: [],
  writecode: [],
  newpasswords: [],
  editpassword: [],
  editprofile: [],
  loading: true,
};
export const Authentication = (state = intialstate, action) => {
  switch (action.type) {
    case account_Register: {
      return { ...state, signup: action.data, loading: false };
    }
    case account_Login: {
      return { ...state, signin: action.data, loading: false };
    }
    case Post_Code: {
      return { ...state, code: action.data, loading: false };
    }
    case Write_Code: {
      return { ...state, writecode: action.data, loading: false };
    }
    case New_Password: {
      return { ...state, newpasswords: action.data, loading: false };
    }
    case Edit_Password: {
      return { ...state, editpassword: action.data, loading: false };
    }
    case Edit_Profile: {
      return { ...state, editprofile: action.data, loading: false };
    }
    default: {
      return state;
    }
  }
};
