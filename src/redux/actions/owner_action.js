import { UseGetDateToken } from "../../hocks/useGetData";
import { UsePostDateToken } from "../../hocks/usePostDate";
import { UsePutFormToken } from "../../hocks/usePutData";
import {
  Edit_Apartment,
  Get_Apartment_Details,
  Get_Notifications,
  Get_User_Details,
  accept_user,
  getnumbers,
  user_request,
  admin_num,
} from "../type";

export const GetAllNotificationAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(
      `/api/Owner/GetNotifications?UserId=${id}`
    );
    dispatch({
      type: Get_Notifications,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Notifications,
      data: e.response,
    });
  }
};
export const GetSpiceficUserAction = (idUser, idAdmin) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(
      `/api/User/GetProfileData?RequestedId=${idUser}&RequesterUserID=${idAdmin}`
    );
    dispatch({
      type: Get_User_Details,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_User_Details,
      data: e.response,
    });
  }
};
export const GetUserRequestAction = (idUser) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(
      `/api/Owner/GetApartmentsRequests?OwnerId=${idUser}`
    );
    dispatch({
      type: user_request,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: user_request,
      data: e.response,
    });
  }
};

export const GetApartmentDetailsAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(
      `/api/Owner/GetApartmentForEdit?ApartmentId=${id}`
    );
    dispatch({
      type: Get_Apartment_Details,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Apartment_Details,
      data: e.response,
    });
  }
};
export const GetUserNumbers = (id) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(
      `/api/Owner/GetUsersCountForOwner?OwnerId=${id}`
    );
    dispatch({
      type: getnumbers,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: getnumbers,
      data: e.response,
    });
  }
};
export const AcceptUser = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken(
      `/api/Owner/ApartmentsRequestsHandle`,
      data
    );
    dispatch({
      type: accept_user,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: accept_user,
      data: e.response,
    });
  }
};

export const EditApartmentDetailsAction = (form) => async (dispatch) => {
  try {
    const res = await UsePutFormToken("/api/Owner/EditApartment", form);
    dispatch({
      type: Edit_Apartment,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Edit_Apartment,
      data: e.response,
    });
  }
};
