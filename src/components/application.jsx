import { Page } from '@oliasoft-open-source/react-ui-library';
import { SideBar } from './side-bar/side-bar';
import { TopBar } from './top-bar/top-bar';

const Application = () => {
  return (
    <>
      <Page left={0} top={0}>
        <TopBar />
        <SideBar />
      </Page>
    </>
  );
}

export { Application };
