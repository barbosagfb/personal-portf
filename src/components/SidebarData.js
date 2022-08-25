import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';


export const SidebarData =[
  {
title:'Home',
path:'/',
icon:<AiIcons.AiFillHome/>,
cName:'nav-text',
},
  {
title:'About',
path:'/about',
icon:<BsIcons.BsPersonCircle/>,
cName:'nav-text',
},
  {
title:'Resume',
path:'/resume',
icon:<MdIcons.MdSchool/>,
cName:'nav-text',
},
  {
title:'Portfolios',
path:'/portfolios',
icon:<BiIcons.BiCodeBlock/>,
cName:'nav-text',
},
  {
title:'Contacts',
path:'/contacts',
icon:<RiIcons.RiContactsBookFill/>,
cName:'nav-text',
},
]
