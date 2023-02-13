class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    render(){
        this.check();
        return(
            <div>
                <Title />
                <Counter count={this.state.count}/>
                <CountHandler count={this}/>
            </div>
            
        )
    }
    check(num=0){
        this.state.count=this.state.count+num;
    }
}

class Title extends React.Component{
    render(){
        return(
            <div>
                <h1>Counter App</h1>
            </div>
        )
    }
}

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h2>Count:{this.props.count}</h2>
            </div>
        )
    }
}

class CountHandler extends React.Component{
    render(){
        return(
            <div>
                <AddButton  count={this.props.count}/>
                <SubtractButton count={this.props.count}/>
                <Reset count={this.props.count}/>
            </div>
        )
    }
}
class AddButton extends React.Component{
    constructor(props){
        super(props);
        this.Add=this.Add.bind(this);
    }
    Add(){
        this.props.count.setState((previousState)=>{
            return{
                count: previousState.count+1,
            }
        });
    }
    render(){
        
        return(
            <button onClick={this.Add}>+</button>
        )
    }
}

class SubtractButton extends React.Component{
    constructor(props){
        super(props);
        this.Subtract=this.Subtract.bind(this);
    }
    Subtract(){
        this.props.count.setState((previousState)=>{
            return{
                count:previousState.count-1
            }
        });
    }
    render(){
        return(
            <button onClick={this.Subtract}>-</button>
        )
    }
}

class Reset extends React.Component{
    constructor(props){
        super(props);
        this.Reset=this.Reset.bind(this);
    }
    Reset(){
        this.props.count.setState((previousState)=>{
            return{
                count:0
            }
        });
    }
    render(){
        return(
            <button onClick={this.Reset}>Reset</button>
        )
    }
}

ReactDOM.render(<Main />,document.getElementById("app"));