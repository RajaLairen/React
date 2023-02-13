const app={
    option:[]
};
let count;
const submit=(e)=>{
    count=0;
    e.preventDefault();
    const option=e.target.elements.option.value;
    if(option){
        app.option.push(option);
        e.target.elements.option.value="";
        Render();
    }
}

const onMakeDecision=()=>{
    const range=app.option.length;
    const randomNum=Math.floor(Math.random()*range);
    const option=app.option[randomNum];
    alert(option);
}

const Reset=()=>{
    app.option=[];
    Render();
}

const back=()=>{
    if(app.option.length>0){
        app.option.length=app.option.length-1;
    }
    else{
        app.option.length=0;
    }
    Render();
}

const appRoot=document.getElementById("app");

const Render=()=>{
    const template1=(
        <div>
            <h1>Indecision App</h1>
            {app.option.length>0?<p>Here are your option</p>:<p>No Option</p>}
            <button disabled={app.option.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={Reset}>Remove All</button>
            <button onClick={back}>Back</button>
            <ul>
                {
                    app.option.map((item)=><li key={count++}>{item}</li>)
                }
            </ul>
            
            <form onSubmit={submit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template1,appRoot);
}

Render();

