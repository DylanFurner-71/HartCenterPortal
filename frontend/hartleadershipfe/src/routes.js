import Landing from './components/landing.js'
import Login from './components/Login'
import GetReportData from './components/admin/GetReportData'
import CompetencyLibrary from "./components/student/CompetencyLibrary"
// this is the private route
import StudentHome from "./components/student/studentLanding";
import ContactUs from './components/student/ContactUs.js';
import IntentionalLearning from "./components/student/IntentionalLearning";
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/competency/library', component: CompetencyLibrary},
    { path: '/contact/', component: ContactUs},
<<<<<<< HEAD
    { path: '/viewReport/', component:GetReportData}

=======
    { path: '/competency/library/Intentional%20Learning', component: IntentionalLearning}
>>>>>>> 7fdd85aec213d181cde129465434f9bb5103bf5b
]