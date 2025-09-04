import UserProvider from "./userProvider";
import Home from "./home";

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;