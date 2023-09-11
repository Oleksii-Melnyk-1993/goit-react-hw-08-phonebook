import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};
