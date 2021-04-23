import Landing from './components/landing.js'
import Login from './components/Login'
import GetReportData from './components/admin/GetReportData'
import CompetencyLibrary from "./components/student/CompetencyLibrary"
// this is the private route
import StudentHome from "./components/student/studentLanding";
import ContactUs from './components/student/ContactUs.js';
import Competency from "./components/student/Competency";
import AboutUs from "./components/info/AboutUs";
import HartLeadershipFramework from "./components/info/HartLeadershipFramework";
import HartLeadershipInfo from "./components/info/HartLeadershipInfo";
import UpdateCompetenciesForm from './components/admin/UpdateCompetenciesForm.js';
import EditCompetency from './components/admin/EditCompetency';
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/competency/library', component: CompetencyLibrary},
    { path: '/contact/', component: ContactUs},
    { path: '/competency/library/competency', component: Competency},
    { path: '/about/', component: AboutUs},
    { path: '/about/fmwk', component: HartLeadershipFramework},
    { path: '/about/surveyinfo', component: HartLeadershipInfo},
    { path: '/viewReport/', component:GetReportData},
    { path: '/comp/', component: UpdateCompetenciesForm},
    { path: '/competency/edit/competency', component: EditCompetency}

]