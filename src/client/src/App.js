import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import CreatePost from "./Pages/CreatePost";
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Posts from "./Pages/Posts";
import Accounts from "./Pages/Accounts";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AxiosHelper from "./Helpers/AxiosHelper";
import PrivateRoute from "./Helpers/PrivateRoute";

AxiosHelper.init();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Auth />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/create" element={<CreatePost />} />
            <Route path="accounts" element={<Accounts />} />
          </Route>

          {/* <Route element={<PrivateRoute />} >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
