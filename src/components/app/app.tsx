import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../utils';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import Quest from '../../pages/quest/quest';
import Booking from '../../pages/booking/booking';
import Login from '../../pages/login/login';
import Contacts from '../../pages/contacts/contacts';
import MyQuests from '../../pages/my-quests/my-quests';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';

const status = getAuthorizationStatus();

function App(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Quest} element={<Quest />} />
          <Route path={AppRoute.Booking} element={
            <PrivateRoute authorizationStatus={status}>
              <Booking />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute authorizationStatus={status} onlyGuests>
              <Login />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Contacts} element={<Contacts />} />
          <Route path={AppRoute.MyQuests} element={
            <PrivateRoute authorizationStatus={status}>
              <MyQuests />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Error} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
