import { Outlet } from 'react-router-dom';

import ExamsNavigation from '../components/ExamsNavigation';

function EventsRootLayout() {
  return (
    <>
      <ExamsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;