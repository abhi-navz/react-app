import "./App.css";
import Avatar from "./Props";

import Tile, { A, B } from "./Tile";
// in named imports the name's can't be changed, while the default one can have any name
let imgAddress =
  "https://images.pexels.com/photos/18026534/pexels-photo-18026534/free-photo-of-photo-of-a-dog-with-long-hair-sitting-by-a-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2://www.vecteezy.com/photo/17323715-3d-render-adorable-close-up-of-a-american-eskimo-dog-holding-red-rose-in-mouth-on-white-background";
function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "red",
          color: "aqua",
          textAlign: "center",
          fontSize: "45px",
        }}
        // style contains dual curly because first one is to evaluate the javascript expression and the second one is an object which consist of the styling
      >
        Welcome to React {3 * 6}
      </h1>
      <h2>How are you doing?</h2>
      <Tile />
      <A />
      <B />
      <img style={{ width: "200px" }} src={imgAddress} />

      <Avatar src='https://images.pexels.com/photos/18177110/pexels-photo-18177110/free-photo-of-white-horse-in-herd.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="300px" width="300"/>
      <Avatar src='https://images.pexels.com/photos/16665470/pexels-photo-16665470/free-photo-of-man-standing-on-a-bridge-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' height="300px" 
      width="300"
      
      >
        <div>Hello</div>
        <div>Hi</div>
     </Avatar>
    </>
    // <> ....</> this is a fragment, we can return a single value enclosed in fragments , the best thing about using it is that it won't leave any trace in the browser
  );
}
// Curlies in jsx : Any javascript expression can be wrapped in curly braces and used inside jsx, be it a function , a mathematical expression or even a variable.

export default App;
