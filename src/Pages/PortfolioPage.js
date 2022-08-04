import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import Encompass from '../Portfolios/Encompass';
import IMA2019 from '../Portfolios/IMA2019';
import IMA2020 from '../Portfolios/IMA2020';
import InformaticsPress from '../Portfolios/InformaticsPress';
import ITAT from '../Portfolios/ITAT';
import Sinless from '../Portfolios/Sinless';
import Sleek from '../Portfolios/Sleek';
import VijayChatHouse from '../Portfolios/VijayChatHouse';
import Brebel from '../Portfolios/Brebel';
import Spintly from '../Portfolios/Spintly';
import Senstra from '../Portfolios/Senstra';
import Evre from '../Portfolios/Evre';
import Gavyam from '../Portfolios/Gavyam';
import Error from './Error';
import AuBank from '../Portfolios/AuBank';
import ShopX from '../Portfolios/ShopX/ShopX';
import Sls from '../Portfolios/Sls';
import ShopXApp from '../Portfolios/ShopXApp';
import RudoWealth from '../Portfolios/Rudo';
const ResourcesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/work/informatic-Press">
          <InformaticsPress />
        </Route>
        <Route path="/work/ima2020">
          <IMA2020 />
        </Route>
        <Route path="/work/encompass">
          <Encompass />
        </Route>
        <Route path="/work/sinless">
          <Sinless />
        </Route>
        <Route path="/work/sleek">
          <Sleek />
        </Route>
        <Route path="/work/ima2019">
          <IMA2019 />
        </Route>
        <Route path="/work/itat">
          <ITAT />
        </Route>
        <Route path="/work/vijay-chat-house">
          <VijayChatHouse />
        </Route>
        <Route path="/work/brebel">
          <Brebel />
        </Route>
        <Route path="/work/spintly">
          <Spintly />
        </Route>
        <Route path="/work/senstra">
          <Senstra />
        </Route>
        <Route path="/work/evre">
          <Evre />
        </Route>
        <Route path="/work/gavyam">
          <Gavyam />
        </Route>
        <Route path="/work/aubank">
          <AuBank />
        </Route>
        <Route path="/work/shopx">
          <ShopX />
        </Route>
        <Route path="/work/sls">
          <Sls />
        </Route>
        <Route path="/work/shopxapp">
          <ShopXApp />
        </Route>
        <Route path="/work/rudo">
          <RudoWealth />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  );
};

export default ResourcesPage;
