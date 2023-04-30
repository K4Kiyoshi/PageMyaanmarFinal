import React from 'react';
const TestCode = React.lazy(() => import('./views/menus/testCode/TestCode'));
const NewMenu = React.lazy(() => import('./views/menus/newMenu/NewMenu'));
const Welcome = React.lazy(() => import('./views/welcome/welcome'));
const Result = React.lazy(() => import('./views/menus/newMenu/Result'));
const Logout  = React.lazy(() => import('./views/LogoutReact/LogoutIndex'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/menus/TestCode', name: 'TestCode', component: TestCode },
  { path: `/menus/NewMenu`, name: 'NewMenu', component: NewMenu},
  { path: `/welcome`, name: 'NewMenu', component: Welcome},
  { path: `/menus/Result`, name: 'Result', component: Result},
  { path: `/logout`, name: 'Result', component: Logout},


];

export default routes;



