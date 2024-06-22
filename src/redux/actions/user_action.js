import { UseGetDateWithoutToken } from "../../hocks/useGetData";
import { UsePostDateToken } from "../../hocks/usePostDate";
import {
  Add_React,
  ApartmentRequest,
  Get_Apartment_Details,
  Get_Apartment_Detailss,
  Post_Comment,
  payment,
} from "../type";

export const GetApartdetailsAction = (id, page, Count) => async (dispatch) => {
  try {
    const res = await UseGetDateWithoutToken(
      `api/Apartment/GetApartmentDetails?Id=${id}&PageNumber=${page}&PageSize=${Count}`
    );

    dispatch({
      type: Get_Apartment_Detailss,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Apartment_Detailss,
      data: e.response,
    });
  }
};
export const GetAllCommentsPage =
  (id, PageNumber, pageCount) => async (dispatch) => {
    try {
      const res = await UseGetDateWithoutToken(
        `/api/Apartment/GetApartmentDetails?Id=${id}&PageNumber=${PageNumber}&PageSize=${pageCount}`
      );

      dispatch({
        type: Get_Apartment_Detailss,
        data: res,
      });
    } catch (e) {
      dispatch({
        type: Get_Apartment_Detailss,
        data: e.response,
      });
    }
  };
export const PostCommentAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken("/api/Apartment/AddComment", data);

    dispatch({
      type: Post_Comment,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Post_Comment,
      data: e.response,
    });
  }
};
export const MakeLikeAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken("api/Apartment/AddReact", data);

    dispatch({
      type: Add_React,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Add_React,
      data: e.response,
    });
  }
};
export const MakeRequest = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken("/api/User/RequestApartment", data);

    dispatch({
      type: ApartmentRequest,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: ApartmentRequest,
      data: e.response,
    });
  }
};
export const paymentAction = (data) => async (dispatch) => {
  try {
    const res = await UsePostDateToken("/api/Payment/Payment", data);

    dispatch({
      type: payment,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: payment,
      data: e.response,
    });
  }
};
