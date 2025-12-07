import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
const App = () => {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
      <h1>React With Chai and Code</h1>;
    </UserContextProvider>
  );
};

export default App;