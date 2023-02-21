import React from 'react';
import { TopBar as TopBarReact, Badge, Button, Menu } from '@oliasoft-open-source/react-ui-library';
import { FaUser, FaBell, FaSignOutAlt } from 'react-icons/fa';


const TopBar = () => {
  return (
    <TopBarReact
      title={{
        label: 'React Challange Oliasoft',
        onClick: () => { },
        version: 'V0.1.0'
      }}
      contentRight={[
        {
          component: <Badge margin="5px" small title="3">
            <Button icon={<FaBell />} onClick={() => { }} round />
          </Badge>,
          type: 'Component'
        },
        {
          component: <Menu
            menu={{
              component: <Button
                label="TU"
                onClick={() => { }}
                round />,
              fullHeightTrigger: true,
              placement: 'bottom-end',
              sections: [{
                label: 'Test User',
                type: 'Heading'
              },
              {
                icon: <FaUser color="var(--color-text-primary)" />,
                label: 'Profile',
                onClick: () => { },
                type: 'Option'
              }],
              trigger: 'Component'
            }} />,
          type: 'Component'
        }
      ]}
    />
  );
}

export { TopBar };
