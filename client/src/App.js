import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4hrUO7wA3rwdPywf08KTPRa1ynAQUxu8",
  authDomain: "hackru-94399.firebaseapp.com",
  projectId: "hackru-94399",
  storageBucket: "hackru-94399.appspot.com",
  messagingSenderId: "71945349355",
  appId: "1:71945349355:web:53fd93df0f798a338336ae",
  measurementId: "G-BERJBMLJVF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
