import "./App.css";

import Tile, {A,B} from "./Tile"; 
// in named imports the name's can't be changed, while the default one can have any name

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
      >
        Welcome to React
      </h1>
      <h2>How are you doing?</h2>
      <Tile />
      <A/>
      <B/>
      <img
        style={{ width: "200px" }}
        src="https://images.pexels.com/photos/18026534/pexels-photo-18026534/free-photo-of-photo-of-a-dog-with-long-hair-sitting-by-a-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2://www.vecteezy.com/photo/17323715-3d-render-adorable-close-up-of-a-american-eskimo-dog-holding-red-rose-in-mouth-on-white-background"
      />
    </>
    // <> ....</> this is a fragment, we can return a single value enclosed in fragments , the best thing about using it is that it won't leave any trace in the browser
  );
}

export default App;
