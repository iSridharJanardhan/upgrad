import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props){
    super(props);
    this.state={
      contact_name : '',
      contact_number : ''
    }
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit= this.onSubmit.bind(this)
  }

  onChangeName(e){
    this.setState({
      contact_name : e.target.value
    })
  }

  onChangeContact(e){
    this.setState({
      contact_number : e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    let data = {
      contact_name : this.state.contact_name,
      contact_number : this.state.contact_number
    }

    console.log(data)
  }
   render() {
      return (
         <div>
            <div uk-grid="true">
               <div>
                  <div>
                     <form onSubmit={this.onSubmit}>
                        <div>
                           <label className="uk-legend">Contact Name</label>
                           <br />
                           <input 
                           text="text"
                           className="uk-input"
                           value={this.state.contact_name}
                           onChange={this.onChangeName} />
                        </div>
                        <div>
                           <label className="uk-legend">Contact Number</label>
                           <br />
                           <input
                           type="text" 
                           className="uk-input" 
                           value={this.state.contact_number}
                           onChange={this.onChangeContact}/>
                        </div>
                        <button type="submit" class="uk-button uk-button-default">
                           Submit
                        </button>
                     </form>
                  </div>
               </div>
               <div />
            </div>
         </div>
      );
   }
}
