

/*<div>
<div id="child1">
 <h1></h1>
</div>


<div  id="chid2">
 <h1></h1>
</div>

</div>*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"}, 
    [
        React.createElement(
            "div",
            {id:"child1"},[
            React.createElement("h1",{},"This is h1 tag inside child1 and namaste react "),
            React.createElement("h2",{},"This is h2 tag inside child1")]) ,
        
            React.createElement(
                "div",
                {id:"child2"},[
                React.createElement("h1",{},"This is h1 tag inside child2"),
                React.createElement("h2",{},"This is h2 tag inside child2")]) ,
                

     ]        

    )

   

       console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
    
