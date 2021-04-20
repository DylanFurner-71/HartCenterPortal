import Landing from './components/landing.js'
import Login from './components/Login'
import CompetencyLibrary from "./components/student/CompetencyLibrary"
// this is the private route
import StudentHome from "./components/student/studentLanding";
import ContactUs from './components/student/ContactUs.js';
import IntentionalLearning from "./components/student/IntentionalLearning";
import AboutUs from "./components/info/AboutUs";
import HartLeadershipFramework from "./components/info/HartLeadershipFramework";
import HartLeadershipInfo from "./components/info/HartLeadershipInfo";
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/competency/library', component: CompetencyLibrary},
    { path: '/contact/', component: ContactUs},
    { path: '/competency/library/Intentional%20Learning', component: IntentionalLearning},
    { path: '/about/', component: AboutUs},
    { path: '/about/fmwk', component: HartLeadershipFramework},
    { path: '/about/surveyinfo', component: HartLeadershipInfo},

]