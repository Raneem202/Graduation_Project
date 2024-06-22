import { UseGettDate } from "../../hocks/useGetData";
import { UsePostDataWithImage } from "../../hocks/usePostDate";

export const gethelloAction = () => async (dispatch) => {
  const res = await UsePostDataWithImage("/api/Admin/HelloWorld");
  try {
    dispatch({
      type: "hello",
      data: res,
    });
  } catch (error) {
    dispatch({
      type: "error",
      data: "error" + error,
    });
  }
};
