import React from "react";
import "./App.css";
import DataTable from "./Component/Admin/Datatable/Datatable";
import data from "./datatablesource";
import QueriesTable from "./Component/Admin/Contact/Contact";
import { query } from "./customerquery";
import Navbar from "./Component/Admin/Navbar/Navbar";
import CustomerReviewsPage from "./Component/Customer/Review/Review";
import AddGenrePage from "./Component/Admin/AddGenre/AddGenre";
import AdminProfilePage from "./Component/Admin/AdminProfile/AdminProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {

  return (
    <Router>
      <>
        <Switch>
          <Route path="/admin-profile" component={AdminProfilePage} />
          <Route path="/customer-reviews" component={CustomerReviewsPage} />
          <Route path="/add-genre" component={AddGenrePage} />
          <Route path="/booking-history" component={Bookings} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/customer-queries" component={QueriesTable} />
          <Route
            path="/manage-photographers"
            render={() => <PhotographerTable data={photographersData} />}
          />
          <Route path="/photographer-page" component={PhotographerPage} />
          <Route path="/photographer-services" component={Services} />
          <Route path="/photographer-portfolio" component={Portfolio} />
          <Route path="/booking" component={BookingForm} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/manage-users" exact>
            <DataTable data={data} />
          </Route>
          <Route path="/genre" component={Genre} />
          <Route path="/photog-services" component={PhotographerService} />
          <Route path="/photographer-profile" component={PhotographerProfile} />
          <Route
            path="/Photographerbookinghistory"
            component={BookingHistory}
          />
          <Route path="/logout" component={Logout} />
          <Route
            path="/photographerPortfolio"
            component={PhotographerPortfolio}
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={SignupPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
