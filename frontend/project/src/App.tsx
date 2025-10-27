import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./components/auth/AuthContext";
import { Toaster } from "sonner";
import BrowsingPage from "./pages/BrowsingPage";
import SavedPage from "./pages/SavedPage";
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<BrowsingPage />} />
          <Route path="/saved" element={<SavedPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
