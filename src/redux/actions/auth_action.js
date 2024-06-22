import {
  UsePostDataWithImage,
  UsePostDate,
  UsePostDateToken,
  // UsePostDateToken,
} from "../../hocks/usePostDate";
import { UsePutDataWithImage } from "../../hocks/usePutDate";
import {
  Edit_Password,
  Edit_Profile,
  New_Password,
  Post_Code,
  Write_Code,
  account_Login,
  account_Register,
} from "../type";

export const RegesterAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDataWithImage(
      "/api/Authentication/Register",

      data
    );
    dispatch({
      type: account_Register,
      data: res,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: account_Register,
      data: e.response,
    });
  }
};

export const LoginAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate("/api/Authentication/Login", data);
    dispatch({
      type: account_Login,
      data: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: account_Login,
      data: error.response,
    });
  }
};

export const sendCodeAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate(
      "/api/Authentication/SendResetPassword",
      data
    );
    dispatch({
      type: Post_Code,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Post_Code,
      data: e.response,
    });
  }
};
export const WriteCodeAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate(
      "/api/Authentication/ConfirmResetPassword",
      data
    );
    dispatch({
      type: Write_Code,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Write_Code,
      data: e.response,
    });
  }
};
export const NewPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDate("/api/Authentication/ResetPassword", data);
    dispatch({
      type: New_Password,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: New_Password,
      data: e.response,
    });
  }
};
export const EditPasswordAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken("/api/User/ChangePassword", data);
    dispatch({
      type: Edit_Password,
      data: res,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: Edit_Password,
      data: e.response,
    });
  }
};
export const EditProfileAction = (data) => async (dispatch) => {
  try {
    const res = await UsePutDataWithImage("/api/User/EditProfile", data);
    dispatch({
      type: Edit_Profile,
      data: res,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: Edit_Profile,
      data: e.response,
    });
  }
};
