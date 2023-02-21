import { Page } from '@oliasoft-open-source/react-ui-library';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { KronstadFarms } from './farms/bergen/kronstad/kronstad-farms';
import { FrognerFarms } from './farms/oslo/frogner/frogner-farms';
import { SideBar } from './side-bar/side-bar';
import { TopBar } from './top-bar/top-bar';

const Application = () => {
  return (
    <>
      <Router>
        <Page left={0} top={0}>
          <TopBar />
          <Routes>
            <Route path="/oslo/frogner" element={<FrognerFarms />} />
            <Route path="/bergen/kronstad" element={<KronstadFarms />} />
          </Routes>
          <SideBar />
        </Page>
      </Router>
    </>
  );
};

export { Application };
