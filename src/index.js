import ReactDOM from 'react-dom'; // one of our dependencies,
// ReactDOM and react form react library together
// Import, exports 
import './index.css';
import App from './App'; // if its a 3rd party library or one of
// my JS files we need to omit dot JS

ReactDOM.render(<App />, document.getElementById('root'));
// second argument is a default JS DOM API in the global "document"
// object
// our public folder contains a very important file wtich is->
// index.html file wgich in the end loaded by the browser
// so called single page app

// Rendering App and inside that we have simple code right now
// 31.How react works