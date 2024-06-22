import React from "react";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/fixed component/Navbar";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Footer from "./Components/fixed component/Footer";
import AdminDashBoardPage from "./Pages/Admin/AdminDashBordPage";
import AdminEditProfile from "./Pages/Admin/AdminEditProfPage";
import AdminAddApartmentPage from "./Pages/Admin/Admin_Add_Apartment";
import OwnerAddApartmentPage from "./Pages/Admin/Owner/Owner_Add_Apartment";
import { useDispatch, useSelector } from "react-redux";
import { gethelloAction } from "./redux/actions/gethelloaction";
import AdminNotification from "./Components/admin/AdminNotification";
import AdminNotificationPage from "./Pages/Admin/Admin_Notification";
import AdminPasswordPage from "./Pages/Admin/Admin_password";
import AdminForgetPasswordPage from "./Components/Auth/ForgetPasswordPage";
import ForgetPasswordPage from "./Components/Auth/ForgetPasswordPage";
import NewPassword from "./Components/Auth/ConfirmCode";
import SelectNewPasswordPage from "./Components/Auth/NewPasswordPage";
import AdminPending from "./Pages/Admin/AdminPending";
import AdminUser from "./Pages/Admin/AdminUser";
import OwnerDashBoardPage from "./Pages/Admin/Owner/OwnerDashBoardPage";
import OwnerNotificationPage from "./Pages/Admin/Owner/OwnerNotificationPage";
import OwnerPasswordPage from "./Pages/Admin/Owner/OwnerPasswordPage";
import OwnerUsersPage from "./Pages/Admin/Owner/OwnerUsersPage";
import OwnerEditProfilePage from "./Pages/Admin/Owner/OwnerEditProfilePage";
import AdminAddApartment from "./Components/admin/AdminAddApartment";
import adminshowAddApartment from "./Pages/Admin/showapartment";
import GetAppartmentsOwner from "./Pages/Admin/Owner/Ownershowapartment";
import AdminUserDetailsPage from "./Pages/Admin/AdminUserDetailsPage";
import OwnerEditApartmentPage from "./Pages/Admin/Owner/OwnerEditApartmentPage";
import UserShowApartments from "./Pages/Admin/user/getAllApartment";
import ApartmentDetailsPage from "./Pages/Admin/user/apartmentDetailsPage";
import ContactUs from "../src/Pages/NavbarPages/contactus";
import OwnerUserRequestPage from "./Pages/Admin/Owner/owner_user_requset_page";
import AboutPage from "./Pages/NavbarPages/About";
import UserNotification from "./Components/user/userNotification";
import UserEdit from "./Components/user/usereditProfile";

const App = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/user/AllApartment"
            element={<UserShowApartments></UserShowApartments>}
          ></Route>{" "}
          <Route path="/user/about" element={<AboutPage></AboutPage>}></Route>
          <Route
            path="/user/apartment-details/:id"
            element={<ApartmentDetailsPage></ApartmentDetailsPage>}
          ></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route
            path="/admin/dashboard"
            element={<AdminDashBoardPage></AdminDashBoardPage>}
          ></Route>
          <Route
            path="/admin/Edit-profile"
            element={<AdminEditProfile></AdminEditProfile>}
          ></Route>
          <Route
            path="/admin/add-apartment"
            element={<AdminAddApartmentPage></AdminAddApartmentPage>}
          ></Route>
          owner/user
          <Route
            path="/admin/notification"
            element={<AdminNotificationPage></AdminNotificationPage>}
          ></Route>
          <Route
            path="/admin/change-password"
            element={<AdminPasswordPage></AdminPasswordPage>}
          ></Route>
          <Route
            path="/admin/showapartment"
            element={<adminshowAddApartment></adminshowAddApartment>}
          ></Route>
          <Route
            path="/forgetpassword"
            element={<ForgetPasswordPage></ForgetPasswordPage>}
          ></Route>
          <Route
            path="/new-password"
            element={<NewPassword></NewPassword>}
          ></Route>
          <Route
            path="/confirm-password"
            element={<SelectNewPasswordPage></SelectNewPasswordPage>}
          ></Route>
          <Route
            path="/admin/view-user-details/:id"
            element={<AdminUserDetailsPage></AdminUserDetailsPage>}
          ></Route>
          <Route
            path="/admin/pending"
            element={<AdminPending></AdminPending>}
          ></Route>
          <Route path="/admin/user" element={<AdminUser></AdminUser>}></Route>
          <Route
            path="/owner/dashboard"
            element={<OwnerDashBoardPage></OwnerDashBoardPage>}
          ></Route>
          <Route
            path="/owner/notification"
            element={<OwnerNotificationPage></OwnerNotificationPage>}
          ></Route>
          <Route
            path="/owner/change-password"
            element={<OwnerPasswordPage></OwnerPasswordPage>}
          ></Route>
          <Route
            path="/owner/user"
            element={<OwnerUsersPage></OwnerUsersPage>}
          ></Route>
          <Route
            path="/owner/user-request"
            element={<OwnerUserRequestPage></OwnerUserRequestPage>}
          ></Route>
          <Route
            path="/owner/Edit-profile"
            element={<OwnerEditProfilePage></OwnerEditProfilePage>}
          ></Route>
          <Route
            path="/owner/add-apartment"
            element={<OwnerAddApartmentPage></OwnerAddApartmentPage>}
          ></Route>
          <Route
            path="/owner/showapartment"
            element={<GetAppartmentsOwner></GetAppartmentsOwner>}
          ></Route>
          <Route
            path="/owner/edit-apartment/:id"
            element={<OwnerEditApartmentPage></OwnerEditApartmentPage>}
          ></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route
            path="/user/notification"
            element={<UserNotification></UserNotification>}
          ></Route>
          <Route
            path="/user/editprofile"
            element={<UserEdit></UserEdit>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
