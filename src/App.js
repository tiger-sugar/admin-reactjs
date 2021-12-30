import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import { IntlProvider } from "react-intl";
import messages from "./utils/messages";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import AuthRouter from "./pages/router/AuthRouter";
import PrivateRoute from "./pages/router/PrivateRoute";
import Layout from "./pages/Home/Layout";
export default function App() {
  const [locale, setLocale] = useState("en");
  const user = useSelector((state) => state.auth?.user);
  console.log("log user", user);
  return (
    <>
      {!user ? (
        <AuthRouter />
      ) : (
        <IntlProvider locale={locale} messages={messages[locale]}>
          <Layout setLocale={setLocale} />
        </IntlProvider>
      )}
    </>
  );
}
