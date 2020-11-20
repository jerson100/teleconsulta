import AuthLayout from "../components/layouts/AuthLayout/AuthLayout";
import Login from "../scenes/Auth/scenes/Login/Login";
import Register from "../scenes/Auth/scenes/Register/Register";

export default [
  {
    path: "/auth",
    component: AuthLayout,
    exact: false,
    routes: [
      {
        path: "/auth/login",
        component: Login,
        isPublic: true,
        exact: true,
      },
      {
        path: "/auth/register",
        component: Register,
        isPublic: true,
        exact: true,
      },
    ],
  },
  {},
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
