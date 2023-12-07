import { useState } from "react";
import Eye from "./Component/Eye";
import NoEye from "./Component/NoEye";

function App() {
  const [passowrd, setPassword] = useState(true);
  const handleVisiblity = () => {
    setPassword(!passowrd);
  };
  return (
    <div
      style={{
        backgroundColor: "alice-blue",
        padding: 5,
        height: "100vh",
        
      }}
    >
      <div
        style={{
          padding: 5,
          backgroundColor: "black",
          width: 400,
          display: "flex",
          justifyContent: "center",
          padding: "8px 5px",
          borderRadius: "5px",
          border: "1px solid black",
          alignItems: "center",
          gap: 10,
        }}
      >
        <input
          style={{ padding: "5px 8px", width: "300px" }}
          type={passowrd ? "password" : "text"}
          placeholder="password"
        />
        <button
          style={{ padding: "3px 8px", width: "50px", color:'white',  }}
          onClick={handleVisiblity}
        >
          {passowrd ? <Eye/> : <NoEye/>}
        </button>
      </div>
    </div>
  );
}

export default App;
