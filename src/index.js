import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import DataTable from "./Component/Admin/Datatable/Datatable";
import data from "./datatablesource";
import QueriesTable from "./Component/Admin/Contact/Contact";
import CustomerReviewsPage from "./Component/Customer/Review/Review";
import AddGenrePage from "./Component/Admin/AddGenre/AddGenre";
import AdminProfilePage from "./Component/Admin/AdminProfile/AdminProfile";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Component/Customer/Homepage/Homepage";
import PhotographerPage from "./Component/Customer/PhotographersPage/PhotographersPage";
import Genre from "./Component/Customer/Genre/Genre";
import Portfolio from "./Component/Customer/Portfolio/Portfolio";
import Services from "./Component/Customer/Services/Services";
import BookingForm from "./Component/Customer/Booking/Booking";
import Dashboard from "./Component/Admin/Dashboard/Dashboard";
import LoginPage from "./Login/Login";
import Bookings from "./Component/Admin/BookingHistory/BookingHistory";
import PhotographerTable from "./Component/Admin/PhotographerTable/PhotographerTable";
import photographersData from "./Component/Admin/PhotographerTable/PhotographerData";
import PhotographerProfile from "./Component/Photography/PhotographerProfile/PhotographerProfile";
import PhotographerService from "./Component/Photography/PhotograperService/PhotographerService";
import PhotographerPortfolio from "./Component/Photography/PhotographyPortfolio/PhotographyPortfolio";
import BookingHistory from "./Component/Photography/BookingHistoryPhotographer/BookingHistoryPhotographer";
import SignupPage from "./Signup/Signup";
import Logout from "./Login/Logout";
import Protected from "./Protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SignupPage />} />
      <Route path="/" element={<Protected />}>
        <Route path="/admin-profile" element={<AdminProfilePage />} />
        <Route path="/customer-reviews" element={<CustomerReviewsPage />} />
        <Route path="/add-genre" element={<AddGenrePage />} />
        <Route path="/booking-history" element={<Bookings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer-queries" element={<QueriesTable />} />
        <Route
          path="/manage-photographers"
          element={<PhotographerTable data={photographersData} />}
        />
        <Route path="/photographer-page" element={<PhotographerPage />} />
        <Route path="/photographer-services" element={<Services />} />
        <Route path="/photographer-portfolio" element={<Portfolio />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/manage-users" element={<DataTable data={data} />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/photog-services" element={<PhotographerService />} />
        <Route path="/photographer-profile" element={<PhotographerProfile />} />
        <Route
          path="/Photographerbookinghistory"
          element={<BookingHistory />}
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/photographerPortfolio"
          element={<PhotographerPortfolio />}
        />
      </Route>
      <Route path="*" element={<div>Page Not Found!</div>} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
