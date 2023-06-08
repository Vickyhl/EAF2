import "./frontend/src/components/css/style.css";
import Header from "./components/Header";
import Routes1 from "./components/Routes1";
import { AuthProvider } from "./AuthProvider";
import LoginPage from "./frontend/src/pages/Login";

function App() {
  return (
    <div>
      {/* <AuthProvider>
        <Header />
        <Routes1 />
      </AuthProvider> */}
      <LoginPage/>
    </div>
  );
}
export default App;
