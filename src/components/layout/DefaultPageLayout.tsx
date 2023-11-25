import React, { PropsWithChildren } from 'react';
import BasePageLayout from './BasePageLayout';

export default function DefaultPageLayout({ children }: PropsWithChildren) {
  return (
    <BasePageLayout>
      {children}
    </BasePageLayout>
  );
}
