import SignInForm from '@/components/auth/SignInForm/SignInForm';
import styles from './Index.module.scss';
import Logo from '@/components/logo/Logo';
import {ReactElement} from 'react';
import AuthLayout from '@/components/layout/AuthPageLayout';
import Headline from '@/components/common/Headline/Headline';

function SignInPage () {
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
