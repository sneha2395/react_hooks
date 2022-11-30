import React from "react";
import Child from './Child';

class Parent extends React.Component {
    state = {
        name:"",
    }
    handleCallback = (childData) => {
        this.setState({name:childData})
    }

    render(){
        const{name} = this.state;
        return(
            <div>
                <Child parentcallBack ={this.handleCallback}/>
                {name}

            </div>
        )
    }
}
export default Parent;
