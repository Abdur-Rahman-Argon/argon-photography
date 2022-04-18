import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header/Header";
import Login from "./components/Login/Login/Login";
import About from "./components/About/About/About";
import Home from "./components/Home/Home/Home";
import Blogs from "./components/Blogs/Blogs";
import SignUp from "./components/Login/SignUp/SignUp";
import Services from "./components/Home/Services/Services";

import NotFound from "./components/Shared/NotFound/NotFound";
import CheckOut from "./components/Home/CheckOut/CheckOut";
import RequireAuth from "./components/Login/RequreAuth/RequreAuth";
import PhotosAlbum from "./components/Home/PhotosAlbum/PhotosAlbum";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Services></Services>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/photosalbum"
          element={<PhotosAlbum></PhotosAlbum>}
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
