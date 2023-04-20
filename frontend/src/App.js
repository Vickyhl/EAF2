import "./components/style.css";
import Header from "./components/Header";
import Routes1 from "./components/Routes1";
import { AuthProvider } from "./AuthProvider";
import Footer from "./components/Footer";

function App() {
  return (
    // <div>
    <AuthProvider>
      <Header />
      <Routes1 />
      <Footer />
    </AuthProvider>
    // </div>
  );
}
export default App;
