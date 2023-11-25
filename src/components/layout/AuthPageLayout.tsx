import React, { PropsWithChildren } from 'react';
import BasePageLayout from './BasePageLayout';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <BasePageLayout isHiddenHeader>
      {children}
    </BasePageLayout>
  );
}
