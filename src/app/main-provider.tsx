import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { LoadingLayout } from '@/components/layouts/loader-layout';
import { queryClient } from '@/lib/react-query';
type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<LoadingLayout />}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </HelmetProvider>
    </React.Suspense>
  );
};
