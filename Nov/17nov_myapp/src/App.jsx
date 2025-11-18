// LOC: 1
import "./App.css"; // LOC: 2

// ⚠️ Using only your requested route setup
import LoginRoleBasedRoutes from "./routes/LoginRoleBasedRoutes.jsx"; // LOC: 5
// import NextedRoutes from "./routes/NextedRoutes.jsx"; // optional
// import ParamsRoute from "./routes/ParamsRoute.jsx"; // optional

function App() { // LOC: 10
  return ( // LOC: 11
    <div>  
      {/* LOC: 13 - You can enable any route system here */}
      <LoginRoleBasedRoutes /> 
      {/* <NextedRoutes /> */} 
      {/* <ParamsRoute /> */} 
    </div>
  );
}

export default App; // LOC: 20
