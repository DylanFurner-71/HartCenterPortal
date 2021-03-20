import Landing from './components/landing.js'
import Login from './components/Login'
import CompetencyLibrary from "./components/student/"
// this is the private route
import StudentHome from "./components/student/studentLanding";
export const ROUTES = [
    { path: '/', component: Landing },
    { path: '/student/home', component: StudentHome },
    { path: '/competency/library', component: CompetencyLibrary}
]