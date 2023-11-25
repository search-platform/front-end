import cx from 'classnames';
import React, { PropsWithChildren } from 'react';
import styles from './BasePageLayout.module.scss';
import Header from '../header/Header';

interface BasePageLayoutProps {
  isHiddenHeader?: boolean;
}

export default function BasePageLayout({
  children,
  isHiddenHeader
}: PropsWithChildren<BasePageLayoutProps>) {
  // const auth = useAuthGuard({ redirectTo: '/auth/sign-in/' });

  // if (auth.isFetching || auth.isError) {
  //   return null;
  // }

  return (
    <div className={styles.container}>
      {!isHiddenHeader ? <Header /> : null}
      <main className={cx(styles.main)}>
        {children}
      </main>
    </div>
  );
}
