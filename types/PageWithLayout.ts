import { NextPage } from 'next/types';
import { ReactElement } from 'react';

export type PageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactElement;
};
