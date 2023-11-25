import '../../styles/globals.scss';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DefaultPageLayout from '../components/layout/DefaultPageLayout';
import { PageWithLayout } from '../../types/PageWithLayout';

interface AppPropsWithLayout extends AppProps {
  Component: PageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const dehydratedState = pageProps.dehydratedState;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 1, // 1 minute
          },
        },
      }),
  );

  const getLayout = Component.getLayout;

  const componentWithLayout = getLayout ? (
    getLayout(<Component {...pageProps} />)
  ) : (
    <DefaultPageLayout>
      <Component {...pageProps} />
    </DefaultPageLayout>
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          {componentWithLayout}
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;

