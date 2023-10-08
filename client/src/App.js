import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import Feed from "./pages/Feed";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";

const firebaseConfig = {
  apiKey: "AIzaSyB4hrUO7wA3rwdPywf08KTPRa1ynAQUxu8",
  authDomain: "hackru-94399.firebaseapp.com",
  projectId: "hackru-94399",
  storageBucket: "hackru-94399.appspot.com",
  messagingSenderId: "71945349355",
  appId: "1:71945349355:web:53fd93df0f798a338336ae",
  measurementId: "G-BERJBMLJVF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const currentUser=true;

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>
  );
};
const ProtectedLayout = ({children}) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Home />,
    },
    {
      path: "/",
      element: (
        <ProtectedLayout>
          <Layout />
        </ProtectedLayout>
      ),
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
