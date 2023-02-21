import React from 'react';
import { SideBar as SideBarReact } from '@oliasoft-open-source/react-ui-library';
import { Link } from 'react-router-dom';
import { GiFarmTractor, GiFarmer } from 'react-icons/gi';

const SideBar = () => {
  const osloFarms = [
    {
      icon: (
        <Link to='/oslo/frogner'>
          <GiFarmTractor />
        </Link>
      ),
      label: 'Frogner',
      value: '/oslo/frogner'
    },
    {
      icon: (
        <Link to='/oslo/bjerke'>
          <GiFarmTractor />
        </Link>
      ),
      label: 'Bjerke',
      onClick: () => {},
      value: '/oslo/bjerke'
    },
  ];
  const bergenFarms = [
    {
      icon: (
        <Link to='/bergen/nesttun'>
          <GiFarmer />
        </Link>
      ),
      label: 'Nesttun',
      onClick: () => { },
      value: '/bergen/nesttun'
    },
    {
      icon: (
        <Link to='/bergen/kronstad'>
          <GiFarmer />
        </Link>
      ),
      label: 'Kronstad',
      onClick: () => { },
      value: '/bergen/kronstad'
    },
    {
      icon: (
        <Link to='/bergen/ytrebygda'>
          <GiFarmer />
        </Link>
      ),
      label: 'Ytrebygda',
      onClick: () => { },
      value: '/bergen/ytrebygda'
    },
  ];

  return (
    <SideBarReact
      top={50}
      options={{
        title: 'Farms',
        sections: [
          {
            heading: 'Oslo',
            items: osloFarms,
          },
          {
            heading: 'Bergen',
            items: bergenFarms,
          }
        ],
      }}
    />
  );
}

export { SideBar };
