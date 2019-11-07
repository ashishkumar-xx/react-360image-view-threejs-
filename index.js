import React, { Component } from "react"; 
import ReactDOM from 'react-dom';
import View360Three from "./View360Three"

ReactDOM.render(<>

<View360Three image="//live.staticflickr.com/4409/36493102601_1bbc5640c4_h.jpg"
autoRotate="true"
width="700"
height="350"
/>
<br/>
<View360Three image="//live.staticflickr.com/4610/39823653582_0d8e0ef4c0_h.jpg"
autoRotate="true"
width="300"
height="250"
/>
</>, document.getElementById('root'));
 
 