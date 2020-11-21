import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";
import Login from "../scenes/Auth/scenes/Login/Login";
import ForgotMyPassword from "../scenes/Auth/scenes/ForgotMyPassword/ForgotMyPassword";
import Register from "../scenes/Auth/scenes/Register";
import Home from "../scenes/Home/Home";

export const PUBLICROUTERS = [
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
  {
    path: "/",
    component: Home,
    exact: false,
  },
];

export const PrivateRouters = [{}];

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
