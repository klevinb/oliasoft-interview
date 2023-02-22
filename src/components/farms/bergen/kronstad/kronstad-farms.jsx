import React from 'react';
import { Heading, Page, Spacer, Row, Column, Button } from '@oliasoft-open-source/react-ui-library';
import Farm from '../../../Farm/Farm';

const data= [
  {
    src:"https://scontent.fosl4-2.fna.fbcdn.net/v/t39.30808-6/309860857_462354475921368_2699169395239844365_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=a6GB_AJnWM0AX8tGnU6&_nc_ht=scontent.fosl4-2.fna&oh=00_AfCjF1RlP7jrxVHVNBW9kDxxcBONJLik2jOtCTrOGjIXgA&oe=63F9F055",
    alt:"new",
    title:"Farm 1",
    description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  },
  {
    src:"https://img.campercontact.com/media/photos/4222124651053862",
    alt:"new",
    title:"Farm 2",
    description:`2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  }
]


const KronstadFarms = () => {
  return (
    <Page>
      <Heading>Kronstad Farms</Heading>
      <Spacer />
      <Row wrap>
      <Column width={500} padding>
        {data.map((item) => (
          <Farm
            key={item.title}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            button={true}
          />
        ))}
        </Column>
      </Row>
    </Page>
  );
};

export { KronstadFarms };
