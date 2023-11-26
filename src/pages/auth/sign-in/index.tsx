import SignInForm from '@/components/auth/SignInForm/SignInForm';
import styles from './Index.module.scss';
import Logo from '@/components/logo/Logo';
import {ReactElement} from 'react';
import AuthLayout from '@/components/layout/AuthPageLayout';
import Headline from '@/components/common/Headline/Headline';
import isClient from '../../../../utils/isClient';
import Cookies from 'js-cookie';
import {useRouter} from 'next/router';

function SignInPage () {
  const router = useRouter();

  if (isClient && Cookies.get('JWT')) {
    void router.push('/');
  }

  return (
    <div className={styles.box}>
      <Logo className={styles.logo} />
      <Headline level={1}>Sign In</Headline>
      <SignInForm />
    </div>
  );
}

SignInPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default SignInPage;
