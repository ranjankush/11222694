import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import ShortenUrlPage from "./component/ShortenUrlPage";
import { Toaster } from "react-hot-toast";
import Footer from "./component/Footer";
import LandingPage from "./component/LandingPage";
import AboutPage from "./component/AboutPage";
import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";
import DashboardLayout from "./dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "./component/ErrorPage";

// <PrivateRoute publicPage={true}>
//      <RegisterPage />
// </PrivateRoute>

const AppRouter = () => {
  const hideHeaderFooter = location.pathname.startsWith("/s");

    return (
        <>
        {!hideHeaderFooter && <NavBar /> }
        <Toaster position='bottom-center'/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/s/:url" element={<ShortenUrlPage />} />

          <Route path="/register" element={<PrivateRoute publicPage={true}><RegisterPage /></PrivateRoute>} />
          <Route path="/login" element={<PrivateRoute publicPage={true}><LoginPage /></PrivateRoute>} />
          
          <Route path="/dashboard" element={ <PrivateRoute publicPage={false}><DashboardLayout /></PrivateRoute>} />
          <Route path="/error" element={ <ErrorPage />} />
          <Route path="*" element={ <ErrorPage message="We can't seem to find the page you're looking for"/>} />
        </Routes>
        {!hideHeaderFooter && <Footer />}
      </>
    );
}


export default AppRouter;

export const SubDomainRouter = () => {
    return (
        <Routes>
          <Route path="/:url" element={<ShortenUrlPage />} />
        </Routes>
    )
}