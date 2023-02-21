import React from 'react';
import { SideBar as SideBarReact } from '@oliasoft-open-source/react-ui-library';
import { GiFarmTractor, GiFarmer } from 'react-icons/gi';

const SideBar = () => {
  const osloFarms = [
    {
      icon: <GiFarmTractor />,
      label: 'Frogner',
      onClick: () => {},
      value: '/path/to/something'
    },
    {
      icon: <GiFarmTractor />,
      label: 'Bjerke',
      onClick: () => {},
      value: '/path/to/something'
    },
  ];
  const bergenFarms = [
    {
      icon: <GiFarmer />,
      label: 'Nesttun',
      onClick: () => {},
      value: '/path/to/something'
    },
    {
      icon: <GiFarmer />,
      label: 'Kronstad',
      onClick: () => {},
      value: '/path/to/something'
    },
    {
      icon: <GiFarmer />,
      label: 'Ytrebygda',
      onClick: () => {},
      value: '/path/to/something'
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
