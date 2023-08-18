// import React from "react";
// class Counter extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             count: 0
//         };

//     }

//     render()
//     {
//         return (
//             <div className="container">
//                 <h1>Counter</h1>
//                 <p>Current count: {this.state.count}</p>
//                 <button className="btn btn-primary" onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//                 <button className="btn btn-primary" onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
//             </div>
//         );
//     }
// }
// export default Counter;
import React, {useEffect, useState} from "react";
function Counter(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("useEffect called")
        const handleClicked = () => {
            console.log("Clicked");
        }
        document.addEventListener("click", handleClicked);

        return () => {
            console.log("Clean up");
            document.removeEventListener("click", handleClicked);
        }

    },[])

    useEffect(()=>{
        console.log("Count Updated")
        document.title=`Current count: ${count}`
    },[count])



    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    return(
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <button className="btn btn-primary" onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Counter;
