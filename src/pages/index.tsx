import Headline from "@/components/common/Headline/Headline";
import SearchForm from "@/components/search/SearchForm/SearchForm";
import SearchList from "@/components/search/SearchList/SearchList";
import {DUMMY_BANKS} from "@/data/__dummy__/banks";

export default function HomePage () {
  return (
    <div>
      <Headline level={1}>Find the:</Headline>
      <SearchForm />
      <SearchList items={DUMMY_BANKS} />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
