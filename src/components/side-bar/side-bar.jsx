import React from 'react';
import { SideBar as SideBarReact } from '@oliasoft-open-source/react-ui-library';
import { useNavigate } from 'react-router-dom';
import { GiFarmTractor, GiFarmer } from 'react-icons/gi';

const SideBar = () => {
  const navigate = useNavigate();

  const osloFarms = [
    {
      icon: <GiFarmTractor />,
      onClick: ({ target: { value } }) => navigate(value),
      label: 'Frogner',
      value: '/oslo/frogner',
      isActive: '/oslo/frogner' === window.location.pathname,
    },
  ];
  const bergenFarms = [
    {
      icon: <GiFarmer />,
      label: 'Kronstad',
      onClick: ({ target: { value } }) => navigate(value),
      value: '/bergen/kronstad',
      isActive: '/bergen/kronstad' === window.location.pathname,
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
