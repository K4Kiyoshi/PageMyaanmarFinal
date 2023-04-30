export default [


  {
    _tag: 'CSidebarNavDropdown',
    name: 'Menu',
    route: '/menus',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Test Code',
        to: '/menus/TestCode',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'New Menu',
        to: '/menus/NewMenu',
      },
    ]
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Welcome',
    to: '/welcome',
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/logout',
    className: "logout"
  },
  
]


