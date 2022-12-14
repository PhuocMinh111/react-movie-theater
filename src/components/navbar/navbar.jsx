import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { CHANGE_LANG, LOG_OUT } from "../../constants/constants";
import LangSeclect from "../langSeclect";
import { Switch } from "antd";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const light = "navbar-light bg-light";
  const dark = "navbar-dark bg-dark";
  const langState = useSelector((state) => state.langReducer);
  const theme = useSelector((state) => state.themeReducer);
  function logout() {
    dispatch({ type: LOG_OUT });
  }
  console.log(langState);
  return (
    <nav
      style={{ position: "sticky" }}
      className={`navbar px-3 navbar-expand-lg ${theme.light ? dark : light}`}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <a className="navbar-brand">
          <img style={{ width: "70px" }} src="/img/ticket.png" alt="" />
          <Brand className="brand">MovieNew</Brand>
        </a>
      </Link>
      <button
        onClick={() => setOpen(!open)}
        className={`navbar-toggler ${!open && "collapsed"}`}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div
        className={`${
          !open && "collapse"
        }  navbar-collapse justify-content-end pr-md-3`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav  justify-content-end w-50 mr-3 p-3">
          <NavLink
            className="nav-item nav-link"
            style={{ textDecoration: "none" }}
            to="/"
          >
            {langState.final.home}
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            style={{ textDecoration: "none" }}
            to="/movieList"
          >
            {langState.final.movie}
          </NavLink>
          {userState.user !== null ? (
            <User>
              <a className="nav-item nav-link text-center">
                {langState.final.hello}{" "}
                <span className="text-primary">{userState.user.taiKhoan}</span>
              </a>
              <button onClick={logout} className="btn btn-success">
                {langState.final.logout}
              </button>
            </User>
          ) : (
            <NavLink
              className="nav-item nav-link"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              {langState.final.login}
            </NavLink>
          )}
          <LangSeclect />
        </div>
      </div>
    </nav>
  );
}
const Brand = styled.span`
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
`;
const User = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 60%;
    font-size: 0.7rem;
  }
`;
