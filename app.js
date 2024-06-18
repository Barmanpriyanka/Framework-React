

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

//react element -core react
const heading=React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
//jsx is not html but Like html-HTML like syntax or XML like syntax.
//jsx-(transpiles before it reaches js )=> parcel=>babel
//React element using jsx
//jsx=>React.createElement=>createElement-JS object=>htmlElement(render)
const jsxHeading=<h1 id="heading">Namaste React using JSX</h1>
root.render(jsxHeading);