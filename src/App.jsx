import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
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
import Journal from "./pages/Journal";
import Message from "./pages/Message";
import Reminder from "./pages/Reminder";
import CompanyDashboard from "./pages/CompanyDashboard";
import Employees from "./pages/Employees";
import Resources from "./pages/Resources";
import Upload from "./pages/Upload";
import Therapist from "./pages/Therapist";
import TherapistProfile from "./pages/TherapistProfile";
import IndividualProfile from "./pages/IndividualProfile";
import CompanyProfile from "./pages/CompanyProfile";
import AuthLayout, { AuthContext } from "./context/AuthContext";
import UserInfoProvider, { UserInformationContext } from "./context/UserInfoContext";
import { useContext } from "react";


function Navigation() {
  const isLoggedIn = useContext(AuthContext)
  const user = useContext(UserInformationContext)
  console.log(isLoggedIn)
  console.log(user)
  return (
    <BrowserRouter>
      <Routes>
        {
          isLoggedIn ?
            <>
              {
              (/* isLoggedIn?. */user?.role === "employee" || /* isLoggedIn?. */user?.employee) ?
                <>
                  <Route path="/" element={<IndividualDashboard />} />
                  <Route path="/vsr" element={<VirtualSafeRoom />} />
                  <Route path="/scenarios" element={<Scenarios />} />
                  <Route path="/journal" element={<Journal />} />
                  <Route path="/message" element={<Message />} />
                  <Route path="/reminder" element={<Reminder />} />
                  <Route path="/book-appointment" element={<Therapist />} />
                  <Route path="/therapist-profile" element={<TherapistProfile />} />
                  <Route path="/profile" element={<IndividualProfile />} />
                  <Route path="/companyresources" element={<CompanyMaterials />} />
                  <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                  />
                </>
                :
                <>
                  <Route path="/" element={<CompanyDashboard />} />
                  
                  <Route path="employees" element={<Employees />} />
                  <Route path="resources" element={<Resources />} />
                  <Route path="upload" element={<Upload />} />
                  <Route path="/comp-profile" element={<CompanyProfile />} />
                  <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                  />
                </>}

            </>
            :
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/choose" element={<UserType />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signupind" element={<IndividualSignUp />} />
              <Route path="/questions" element={<Questionnaire />} />
              <Route path="/signupcomp" element={<CompanySignUp />} />
              <Route path="/signupnext" element={<CompanySignUp2 />} />
              <Route path="/compay" element={<CompPayment />} />
              <Route path="/indpay" element={<IndividualPayment />} />
              <Route
                path="*"
                element={<Landing />} />
            </>
        }




      </Routes>

    </BrowserRouter>
  )
}

function App() {
  return (
    <AuthLayout>
      <UserInfoProvider>
        <Navigation />
      </UserInfoProvider>
    </AuthLayout>
  )
}

export default App;
