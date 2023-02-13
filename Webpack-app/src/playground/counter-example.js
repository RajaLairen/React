let count=0;
const Add=()=>{
    count++;
    Render();
}
const Subtract=()=>{
    count--;
    Render();
}
const Reset=()=>{
    count=0;
    Render();
}
const appRoot=document.getElementById("app");
const Render=()=>{
    const template2=(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={Add}>+</button>
            <button onClick={Subtract}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template2,appRoot);
}
Render();