import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message, type) => {
  if (type === "success") {
    toast.success(message, "success");
  } else if (type === "error") {
    toast.error(message, "error");
  } else if (type === "warn") {
    toast.warn(message, "warn");
  }
};

export default notify;
