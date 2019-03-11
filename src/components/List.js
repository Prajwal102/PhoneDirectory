import React,{ Component } from "react";
import './List.css';


class Entry extends Component{
    constructor(props)
    {
        super(props);
        this.close = this.close.bind(this);
    }
    close()
    {
        var index = this.props.index;
        this.props.remove_entry(index);
    }
    render()
    {
    return(
        <div className="list">
            <li>
           {this.props.entry.name} <br />
            {this.props.entry.phone} 
            <div>
            <button
             className="del"
             type="button"
             onClick={this.close}
             >DELETE
             </button>
             </div>
            </li>
            </div>
    );
    }

}

const List = (props) => {
    const entrydata = props.entries.map((entry,index) => {
        return (
            <Entry
             entry={entry}
             key={entry.id}
             index={entry.id}
             remove_entry={props.remove_entry}
              />
        );
    });
    return (
  
           <ul className="outer">
            {entrydata}
             </ul>

        
    );
}



export default List;