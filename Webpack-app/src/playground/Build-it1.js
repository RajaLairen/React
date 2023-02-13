class VisibilityToogle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            btn1:"Show Details",
            btn2:"Hide Details",
            visibility:false
        }
        this.visibleToogle=this.visibleToogle.bind(this);
    }
    render(){
        return(
            <div>
                <h1>Visibility Toogle</h1>
                <button onClick={this.visibleToogle}>{this.state.visibility==false?this.state.btn1:this.state.btn2}</button>
                <p>{this.state.visibility&&"Hey. These are some details you can now see!"}</p>
            </div>
        )
    };

    visibleToogle(){
        this.setState((previousState)=>{
            return{
                visibility:!previousState.visibility
            }
        })
    }
}
ReactDOM.render(<VisibilityToogle />,document.getElementById("app"));