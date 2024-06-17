import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardLayout } from '@/components/layouts/dashboard-layout';
import { Spinner } from '@/components/ui/spinner';
export const AppRoot = () => {
  // const location = useLocation();

  return (
    <DashboardLayout>
      <Suspense fallback={<Spinner />}>
        AppRoot
        <Outlet />
      </Suspense>
    </DashboardLayout>
  );
};
