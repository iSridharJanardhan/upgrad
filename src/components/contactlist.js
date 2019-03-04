import React, { Component } from "react";

import "../stylesheets/contactlist.css";

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost:4000/contactlist")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ contacts: data.upgrad });
        console.log(this.state.contacts);
      });
    setInterval(100);
  }

  handleRemove(id) {
    fetch(`http://localhost:4000/contact/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      });
  }

  render() {
    const contacts = this.state.contacts.map((contact, index) => (
      <tbody>
        <tr key={contact._id}>
          <td>
            <div class="avatar">{contact.contact_name.substring(0, 1)}</div>
          </td>
          <td>{contact.contact_name}</td>
          <td>{contact.contact_number}</td>
          <td>
            <button
              class="uk-button uk-button-default"
              onClick={() => {
                this.handleRemove(`${contact._id}`, `${contact.contact_name}`);
              }}
            >
              <i class="fas fa-user-times" />
            </button>
          </td>
        </tr>
      </tbody>
    ));
    return (
      <div>
        <div className="container">
          <h3>Total Contact {this.state.contacts.length}</h3>
          <table class="uk-table uk-table-divider">
            <thead>
              <tr>
                <th className="th" />
                <th className="th">
                  <b>Contact Name</b>
                </th>
                <th className="th">
                  <b>Contact Number</b>
                </th>
              </tr>
            </thead>
            {contacts}
          </table>
        </div>
      </div>
    );
  }
}
