import React, { Component } from "react";
import "../stylesheets/addcontact.css";
export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact_name: "",
      contact_number: "",
      childVisible: false
    };
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName(e) {
    this.setState({
      contact_name: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact_number: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let data = {
      contact_name: this.state.contact_name,
      contact_number: this.state.contact_number
    };

    fetch("http://localhost:4000/addcontact", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => alert("your data was Uploaded Successfully"))
      .catch(err => alert(err));
  }

  render() {
    const { contact_name, contact_number } = this.state;
    const enabled = contact_name.length > 4 && contact_number.length == 10;
    return (
      <div>
        <div uk-grid="true">
          <div>
            <div className="form">
              <form onSubmit={this.onSubmit}>
                <div className="box">
                  <label className="uk-legend">
                    <i class="fas fa-user" />
                    Contact Name
                  </label>
                  <p>(Minimum 4 Character to unlock Submit Button)</p>
                  <br />
                  <input
                    text="text"
                    className="uk-input"
                    value={this.state.contact_name}
                    onChange={this.onChangeName}
                  />
                </div>
                <div className="box">
                  <label className="uk-legend">
                    <i class="fas fa-phone" />
                    Contact Number
                  </label>
                  <p>(Exactly 10 digits to unlock submit button)</p>
                  <br />
                  <input
                    type="text"
                    className="uk-input"
                    value={this.state.contact_number}
                    onChange={this.onChangeContact}
                  />
                </div>
                <div className="box">
                  <button
                    type="submit"
                    className={`${
                      enabled === true ? "uk-button" : "disabled "
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="right">
            <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
              <h2>
                <i class="fas fa-info-circle" />
                Your Data
              </h2>
              <h3>
                <i class="fas fa-user-tie" />
                Contact Name : {this.state.contact_name}
              </h3>
              <h3>Contact Number : {this.state.contact_number}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
