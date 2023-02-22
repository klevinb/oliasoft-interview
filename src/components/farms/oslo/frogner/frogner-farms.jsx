import React from 'react';
import { Heading, Page, Spacer, Row, Column } from '@oliasoft-open-source/react-ui-library';
import Farm from '../../../Farm/Farm';




const data= [
  {
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/43/1e/89/stemningsfull-kanefart.jpg?w=800&h=-1&s=1",
    alt:"new",
    title:"Farm 2",
    description:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  },
  {
    src:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8b/8c/4f/photo1jpg.jpg?w=1200&h=-1&s=1",
    alt:"new",
    title:"Farm 3",
    description:`2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

  }
]

const FrognerFarms = () => {
  return (
    <Page>
      <Heading>Frogner Farms</Heading>
      <Spacer />
      <Row wrap>
        <Spacer width={100} />
        <Column width={500} padding>
        {data.map((item) => (
          <Farm
            key={item.title}
            src={item.src}
            alt={item.alt}
            title={item.title}
            description={item.description}
            
          />
        ))}
        </Column>
        <Spacer width={100} />
      </Row>
    </Page>
  );
};

export { FrognerFarms };


