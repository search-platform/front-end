import Headline from "@/components/common/Headline/Headline";
import SearchForm from "@/components/search/SearchForm/SearchForm";
import Cookies from 'js-cookie';
import {useRouter} from "next/router";
import isClient from "../../utils/isClient";

export default function HomePage () {
  const router = useRouter();

  if (isClient && !Cookies.get('JWT')) {
    void router.push('/auth/sign-in');
  }

  return (
    <div>
      <Headline level={1}>Find the:</Headline>
      <SearchForm />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
