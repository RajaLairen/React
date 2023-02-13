class IndecisionApp extends React.Component{
    render(){
        const title="Indecision App";
        const subtitle="This is awesome";
        let option=[1,2,3,4,5];
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options option={option} />
                <AddOption option={option} />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
       return (
           <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
           </div>
       );
    }
};

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>What should I do??</button>
            </div>
        );
    }
}

class Options extends React.Component{
    handleRemoveAll(){
        this.props.option=[];
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
                {this.props.option.map((item)=>{
                        return <Option key={item} item={item}/>
                    })
                }
            </div>
        );
    }
}

class AddOption extends React.Component{
    
    submit(e){
        e.preventDefault();
        const input=e.target.elements.option.value;
        if(input){
            this.props.option.push(input);
            e.target.elements.option.value="";
            console.log(this.props.option.length);
            Render();
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submit.bind(this)}>
                    <input type="text" name="option"/>
                    <button>Add options</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <p>{this.props.item}</p>
        );
    }
}

const Render=()=>ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
Render();