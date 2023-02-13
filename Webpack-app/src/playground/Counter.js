import React from  'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        
    }

    add=()=>{
        this.setState((previous)=>({count:previous.count+1}));
    }

    subtract=()=>{
        if(this.state.count<1){
            this.setState({count:0})
        }
        else{
            this.setState((previous)=>({count:previous.count-1}));
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.add}>+</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.subtract}>-</button>
            </div>
        )
    }
}

export default Counter;