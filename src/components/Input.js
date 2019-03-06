import React, {Component} from "react";
import "./Input.css";
import List from './List';

window.id=0;
 class Input extends Component {
     constructor() {
         super();
         this.state = {
             name: "",
             phone: "",
             info: []
         };
         
     }

     onChange = e => {
         this.setState({ [e.target.id]: e.target.value});
     };
     onSubmit = e => {
         e.preventDefault();
         if(this.state.name!=="" && this.state.phone!=="")
         {
         const UserData = {
             name: this.state.name,
             phone: this.state.phone,
             id: window.id++
         };
         this.setState({
             name: "",
             phone: ""
         })
         this.setState(state => {
             const info = [UserData, ...state.info];
             return {
                 info
             };
         });

        }
     };

     handleRemove = id => {
        this.setState(state => {
          const info = state.info.filter(entry => entry.id !== id);
    
          return {
            info,
          };
        });
        console.log(this.state.info);
      };

    render()
    {
    return (
        <div className="detail-input">
        <form onSubmit={this.onSubmit}>

            <input 
            placeholder="Name"
            onChange={this.onChange}
            id="name"
            type="text"
            value={this.state.name}
            />
            
            <br />
            
            <input
            onChange={this.onChange}
            placeholder="Phone"
            id="phone"
            type="number"
            value={this.state.phone}
            />
            <br />
            <button type="submit">ADD</button>
        </form>
        <List entries={this.state.info} remove_entry={this.handleRemove}/>
        

     
        </div>
            
        
        
        
      
    
          
          
    )

    
}

}

export default Input;





 