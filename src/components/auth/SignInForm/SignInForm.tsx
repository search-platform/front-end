import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {signIn, signInFormData, signInFormValidationSchema} from '@/data/auth';
import FormInput from '@/components/form/FormInput';
import styles from './SignInForm.module.scss';
import Button from '@/components/common/Button/Button';
import Cookies from 'js-cookie';

function SignInForm () {
  const router = useRouter();

  const { control, formState, handleSubmit } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: zodResolver(signInFormValidationSchema),
    mode: 'onBlur',
  });

  const handleSignIn = async (data: signInFormData) => {
    try {
      const response = await signIn(data);
      const { token } = response;
      if (token) {
        Cookies.set('JWT', token);
        void router.push('/');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className={styles.form}>
      <FormInput name="login" type="email" label="Username:" control={control} />
      <FormInput name="password" type="password" label="Password:" control={control} />
      <Button onClick={() => {}} isDisabled={!formState.isValid}>Sign In</Button>
    </form>
  );
}

export default SignInForm;
