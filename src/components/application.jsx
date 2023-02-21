import { Page } from '@oliasoft-open-source/react-ui-library';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { KronstadFarms } from './farms/bergen/kronstad/kronstad-farms';
import { NesttunFarms } from './farms/bergen/nesttun/nesttun-farms';
import { YtrebygdaFarms } from './farms/bergen/ytrebygda/ytrebygda-farms';
import { BjerkeFarms } from './farms/oslo/bjerke/bjerke-farms';
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
            <Route path="/oslo/bjerke" element={<BjerkeFarms />} />
            <Route path="/bergen/nesttun" element={<NesttunFarms />} />
            <Route path="/bergen/kronstad" element={<KronstadFarms />} />
            <Route path="/bergen/ytrebygda" element={<YtrebygdaFarms />} />
          </Routes>
          <SideBar />
        </Page>
      </Router>
    </>
  );
};

export { Application };
