import { Outlet } from 'react-router-dom';

import EventsNavigation from '../components/ExamsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;