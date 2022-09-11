import { Component } from "react";
import AdminPanel from "../Adminpanel";

export default class DeleteRoom extends Component {
  constructor(props) {
      super(props)
  }

  onSubmit = e => {
      e.preventDefault();
    const data=new FormData(e.target);
    fetch("http://localhost:8080/HOTELM/deleteRoom?roomid="+data.get("roomid"))
    .then((response)=>response.json()
    .then((data)=>{console.log(data);
     if(data.status=="success"){
      alert("Delete Successful");
      
    }
    else{
      alert("Delete Failed");
      
    }
  }))
      
  };

  
  
  render() {
     
      
      return (
          
    <div>
        <AdminPanel/>
        <div className='App d-flex flex-column align-items-center'>
          <h1>Deleting Room</h1>
          <form onSubmit={this.onSubmit} style={{ width :'300px'} }  >
          <div className="form-group">
                  <label>Room Id:</label>
                  <input
                      type="number"
                      className="form-control"
                      name="roomid"
                      required
                  />
                  
              </div>
              
              
              <button type="submit" className="btn btn-danger ">Delete</button>
          </form>
          </div>
          </div>
      );
  }
}