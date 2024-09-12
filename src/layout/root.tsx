import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function RootLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
