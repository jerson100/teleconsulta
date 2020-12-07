import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";
import Login from "../scenes/Auth/scenes/Login/Login";
import ForgotMyPassword from "../scenes/Auth/scenes/ForgotMyPassword/ForgotMyPassword";
import Register from "../scenes/Auth/scenes/Register";
import Home from "../scenes/DashBoard/DashBoard";
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
        icon: <HomeOutlined />,
      },
      {
        path: "/contact",
        component: ContactPage,
        exact: true,
        title: "Contacto",
        viewTitle: true,
        icon: <ContactsOutlined />,
      },
      {
        path: "/medicos",
        component: MedicalStaff,
        exact: true,
        title: "Staff de Médicos",
        viewTitle: true,
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
        component: Home,
        exact: true,
        isLogues: true,
        title: "Inicio",
        icon: <HomeOutlined />,
      },
      {
        path: "/dashboard/datinghistory",
        component: DatingHistory,
        exact: true,
        isLogues: true,
        title: "Historial de citas",
        icon: <HistoryOutlined />,
      },
      {
        path: "/dashboard/medicalappointment",
        component: RequestMedicalAppointment,
        exact: true,
        isLogues: true,
        title: "Solicitar Cita Médica",
        icon: <ScheduleOutlined />,
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
