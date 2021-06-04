import react, {Component, Fragment} from "react";
import "./style.css"
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            add:0
        }
    }
    render(){
        return (
            <div>
                <h1>Counter Application</h1>
                <p>Your Counter is at {this.state.add}</p>
                <button onClick={()=>this.setState
                ({
                    add:this.state.add +1
                })}>
                    Click Here
                </button>
            </div>
        )
    }
}

export default Counter;