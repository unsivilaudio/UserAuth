import React from 'react'

import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';

export const SideBarData = [
  {
      title: 'Dashboard',
      path: '/',
      icon: <MdIcons.MdOutlineDashboard />,
      cName: 'nav-text'
  },
  {
    title: 'Usage',
    path: '/usage',
    icon: <MdIcons.MdOutlineDataUsage/>,
    cName: 'nav-text'
},
{
    title: 'Invoices',
    path: '/invoices',
    icon: <FaIcons.FaFileInvoiceDollar />,
    cName: 'nav-text'
},
{
    title: 'Documentation',
    path: '/documentation',
    icon: <HiIcons.HiOutlineDocumentText />,
    cName: 'nav-text'
},
{
    title: 'Plan',
    path: '/plan',
    icon: <BiIcons.BiPackage />,
    cName: 'nav-text'
},
]

