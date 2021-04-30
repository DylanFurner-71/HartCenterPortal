import Landing from './components/landing.js'
import Login from './components/Login'
import GetReportData from './components/admin/GetReportData'
import CompetencyLibrary from "./components/student/CompetencyLibrary"
// this is the private route
import StudentHome from "./components/student/studentLanding";
import ContactUs from './components/student/ContactUs.js';
import IntentionalLearning from "./components/student/IntentionalLearning";
import DebriefThankYou from './components/admin/DebriefThankYou.js';
import SurveyStatistics from './components/admin/SurveyStatistics.js';
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/competency/library', component: CompetencyLibrary},
    { path: '/contact/', component: ContactUs},
    { path: '/viewReport/', component: GetReportData},
    { path: '/debrief-thankyou/', component: DebriefThankYou},
    { path: '/surveyStatistics/', component: SurveyStatistics},

    { path: '/competency/library/Intentional%20Learning', component: IntentionalLearning}
]