import Landing from './components/landing.js'
import Login from './components/Login'
import CompetencyLibrary from "./components/student/CompetencyLibrary"
// this is the private route
import StudentHome from "./components/student/studentLanding";
import ContactUs from './components/student/ContactUs.js';
import DebriefThankYou from './components/admin/DebriefThankYou.js';
import GetSurveyStatistics from './components/admin/GetSurveyStatistics.js';
import Competency from "./components/student/Competency";
import AboutUs from "./components/info/AboutUs";
import HartLeadershipFramework from "./components/info/HartLeadershipFramework";
import HartLeadershipInfo from "./components/info/HartLeadershipInfo";
import UpdateCompetenciesForm from './components/admin/UpdateCompetenciesForm.js';
import EditCompetency from './components/admin/EditCompetency';
import AddOtherSurvey from "./components/admin/AddOtherSurvey";
import OtherSurvey from './components/student/OtherSurvey.js';
import EditContactPage from "./components/admin/EditContactPage";
import AdminLanding from "./components/admin/AdminLanding";
import GetReportData from "./components/admin/GetReportData";
import getSurveys from "./components/Survey/getSurveys";
import { DeleteQuestionForm } from './components/admin/DeleteQuestionForm.js';
import Results from './components/Survey/Results.js'
import EditAssessment from "./components/admin/EditAssessment";
import SurveyModal from "./components/Survey/SurveyModal";
import { Survey } from 'survey-react';
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/admin/home', component: AdminLanding },
    { path: '/competency/library', component: CompetencyLibrary},
    { path: '/contact/', component: ContactUs},
    { path: '/viewReport/', component: GetReportData},
    { path: '/debrief-thankyou/', component: DebriefThankYou},
    { path: '/surveyStatistics/', component: GetSurveyStatistics},
    { path: '/competency/library/competency', component: Competency},
    { path: '/about/', component: AboutUs},
    { path: '/about/fmwk', component: HartLeadershipFramework},
    { path: '/about/surveyinfo', component: HartLeadershipInfo},
    { path: '/comp/', component: UpdateCompetenciesForm},
    { path: '/competency/edit/competency', component: EditCompetency},
    { path: '/competency/delete/question', component: DeleteQuestionForm},
    { path: '/admin/other/AddSurvey/', component: AddOtherSurvey},
    { path: '/other/survey/', component: OtherSurvey},
    { path: '/contact/edit/', component: EditContactPage},
    { path: '/survey/', component: getSurveys},
    { path: '/survey/response/', component: Results},
    { path: '/survey/edit/:id', component: EditAssessment},
    { path: '/survey/takeassessment', component: SurveyModal}

]