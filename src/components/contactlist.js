import React, { Component } from "react";

import "../stylesheets/contactlist.css";

export default class ContactList extends Component {
   render() {
      return (
         <div>
            <h1>Contact List Work</h1>
            <div className="container">
               <table class="uk-table uk-table-divider">
                  <thead>
                     <tr>
                        <th>Table Heading</th>
                        <th>Table Heading</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td><button class="uk-button uk-button-default">Delete</button></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      );
   }
}
