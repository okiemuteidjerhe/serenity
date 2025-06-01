import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/Landing';
import UserType from "./pages/UserType";
import IndividualSignUp from "./pages/IndividualSignUp";
import Questionnaire from "./pages/Questionnaire"
import SignIn from "./pages/SignIn";
import CompanySignUp from "./pages/CompanySignUp";
import CompanySignUp2 from "./pages/CompanySignUp2";
import CompPayment from "./pages/CompPayment";
import IndividualPayment from "./pages/IndividualPayment";
import IndividualDashboard from "./pages/IndividualDashboard";
import VirtualSafeRoom from "./pages/VirtualSafeRoom";
import Scenarios from "./pages/Scenarios";
import CompanyMaterials from "./pages/CompanyMaterials";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/choose" element={<UserType />} />
        <Route path="/signupind" element={<IndividualSignUp />} />
        <Route path="/questions" element={<Questionnaire />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signupcomp" element={<CompanySignUp />} />
        <Route path="/signupnext" element={<CompanySignUp2 />} />
        <Route path="/compay" element={<CompPayment />} />
        <Route path="/indpay" element={<IndividualPayment />} />
        <Route path="/dashind" element={<IndividualDashboard />} />
        <Route path="/vsr" element={<VirtualSafeRoom />} />
        <Route path="/scenarios" element={<Scenarios />} />
        <Route path="/companyresources" element={<CompanyMaterials />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
