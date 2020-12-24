import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";
import Login from "../scenes/Auth/scenes/Login/Login";
import ForgotMyPassword from "../scenes/Auth/scenes/ForgotMyPassword/ForgotMyPassword";
import Register from "../scenes/Auth/scenes/Register";
import Home from "../scenes/DashBoard";
import DashboardUserLayout from "../components/layouts/DashboardUserLayout";
import DatingHistory from "../scenes/DatingHistory/DatingHistory";
import HomePage from "../scenes/HomePage/HomePage";
import {
  HomeOutlined,
  HistoryOutlined,
  ScheduleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import RequestMedicalAppointment from "../scenes/RequestMedicalAppointment";
import HomePageLayout from "../components/layouts/HomePageLayout/HomePageLayout";
import ContactPage from "../scenes/ContactPage/ContactPage";
import MedicalStaff from "../scenes/MedicalStaff/MedicalStaff";
import DoctorsSpecialty from "../scenes/DoctorsSpecialty/DoctorsSpecialty";
import DoctorSpecialtyScene from "../scenes/DoctorSpecialtyScene/DoctorSpecialtyScene";
import Appointment from "../scenes/Appointment";
import DrawerComment from "../scenes/Appointment/scenes/DrawerComment";

export const AUTHROUTERS = [
  {
    path: "/auth",
    component: AuthLayout,
    exact: false,
    routes: [
      {
        path: "/auth/login",
        component: Login,
        exact: true,
        isLogued: false, //redirect to - Si es true el usuario puede ingresar aún si está logueado
      },
      {
        path: "/auth/forgoutpassword",
        component: ForgotMyPassword,
        exact: true,
        isLogued: false, //redirect to /
      },
      {
        path: "/auth/register",
        component: Register,
        exact: true,
        isLogued: false, //redirect to /
      },
    ],
  },
];

export const PUBLICROUTERS = [
  {
    path: "/",
    component: HomePageLayout,
    exact: false,
    isLogued: false,
    routes: [
      {
        path: "/",
        component: HomePage,
        exact: true,
        title: "Inicio",
        viewTitle: false,
        filter: true,
        icon: <HomeOutlined />,
      },
      {
        path: "/contact",
        component: ContactPage,
        exact: true,
        title: "Contacto",
        viewTitle: true,
        filter: true,
        icon: <ContactsOutlined />,
      },
      {
        path: "/medicos",
        component: MedicalStaff,
        exact: true,
        title: "Staff de Médicos",
        viewTitle: true,
        filter: true,
        icon: <ContactsOutlined />,
      },
      {
        path: "/especialidades",
        component: DoctorsSpecialty,
        exact: true,
        title: "Especialidades",
        viewTitle: true,
        filter: true,
        icon: <ContactsOutlined />,
      },
      {
        path: "/especialidades/:especialty",
        component: DoctorSpecialtyScene,
        exact: true,
        title: "Especialidades",
        viewTitle: false,
        filter: false,
        icon: <ContactsOutlined />,
      },
    ],
  },
];

export const PRIVATEROUTERS = [
  {
    path: "/dashboard",
    component: DashboardUserLayout,
    exact: false,
    routes: [
      {
        path: "/dashboard",
        // component: Home,
        component: Home,
        exact: true,
        isLogues: true,
        title: "Inicio",
        isViewMenu: true,
        icon: <HomeOutlined />,
      },
      {
        path: "/dashboard/datinghistory",
        component: DatingHistory,
        exact: true,
        isLogues: true,
        title: "Historial de citas",
        isViewMenu: true,
        icon: <HistoryOutlined />,
      },
      {
        path: "/dashboard/medicalappointment",
        component: RequestMedicalAppointment,
        exact: true,
        isLogues: true,
        title: "Solicitar Cita Médica",
        isViewMenu: true,
        icon: <ScheduleOutlined />,
      },
      {
        path: "/dashboard/datinghistory/:idAppointment",
        component: Appointment,
        exact: false,
        isLogues: true,
        title: "Cita Médica",
        isViewMenu: false,
        icon: <ScheduleOutlined />,
        routes: [
          {
            path: "/dashboard/datinghistory/:idAppointment/comments",
            component: DrawerComment,
            exact: true,
            isLogues: true,
            title: "Cita Médica",
            isViewMenu: false,
            icon: <ScheduleOutlined />,
          },
        ],
      },
    ],
  },
];

/*
    Example with Roles
{
  component: ModuleN,
  path: '/module-n',
  title: 'Module - N',
  permission: [
   Roles.SUPER_ADMIN,
   Roles.ADMIN,
   Roles.MANAGER
  ],
  children: [
   {
    component: ModuleNChild1,
    path: '/child-1',
    title: 'Child - 1',
   },
   {
    component: ModuleNChild2,
    path: '/child-2',
    title: 'Child - 2',
   },
   {
    component: ModuleNChild3,
    path: '/child-3',
    title: 'Child - 3',
    permission: [
     Roles.SUPER_ADMIN,
     Roles.ADMIN
    ]
   }
*/
