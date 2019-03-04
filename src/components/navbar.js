import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../stylesheets/navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <li class="uk-active">
                <Link to="/">
                  <a href="#">Upgrad</a>
                </Link>
              </li>
              <li>
                <Link to="/addContact">
                  <a href="#">Add Contacts</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
