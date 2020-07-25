import React, { Component } from 'react';
import "./App.css";


class App extends Component{

  state = {   
    // Initially, no file is selected 
    selectedFile: null
  }; 


  onFileChange = event => {
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
  }; 


  fileData = () => { 
     
    if (this.state.selectedFile) { 

      return ( 
        <div> 
          <h2 className="FileDetails">File Details:</h2> 
          <p className="phph">File Name: {this.state.selectedFile.name}</p> 
          <p className="phph">File Type: {this.state.selectedFile.type}</p> 
          <p className="phph"> 
            Last Modified:{" "} {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p> 
        </div> 
      ); 
    } else { 
      return ( 
        <div> 
          <br /> 
          <h4 className="befo">Choose before Pressing the Upload button</h4> 
        </div> 
      ); 
    } 
  }; 

  render() {
    return(
       <div> 
            <h1 className="Choose"> 
              Choose Image  
            </h1> 
            <h3 className="FileUp"> 
              File Upload! 
            </h3> 
            <div> 
                <input type="file" className="ChooseFile" onChange={this.onFileChange} /> 
            </div> 
          {this.fileData()} 


        <div>
        <img src="images/16.jpg" className="image" />

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                 +
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        </div> 


    )

  };
}

export default App;
