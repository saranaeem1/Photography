import React from "react";
import "./App.css";
import DataTable from "./Component/Admin/Datatable/Datatable";
import data from "./datatablesource";
import QueriesTable from "./Component/Admin/Contact/Contact";
import { query } from "./customerquery";
import Navbar from "./Component/Admin/Navbar/Navbar";
import CustomerReviewsPage from "./Component/Customer/Review/Review";
import AddGenrePage from "./Component/Admin/AddGenre/AddGenre";
import AdminProfilePage from "./Component/Admin/AdminProfile/AdminProfile"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Component/Customer/Homepage/Homepage";
import PhotographerPage from "./Component/Customer/PhotographersPage/PhotographersPage";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/admin-profile" component={AdminProfilePage} />
          <Route path="/customer-reviews" component={CustomerReviewsPage} />
          <Route path="/add-genre" component={AddGenrePage} />
          <Route
            path="/customer-queries"
            render={() => <QueriesTable data={query} />}
          />
          <Route path="/" component={HomePage} />
          <Route path="/photographer-page" component={PhotographerPage} />
          <Route path="/manage-users" exact>
            <DataTable data={data} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
