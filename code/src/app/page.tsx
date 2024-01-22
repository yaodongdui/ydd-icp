import PageWrap from "@/layout/PageWrap";
import JunoHelloWorld from "../juno/JunoHelloWorld";

export default function Home(props: {}) {
  return (
    <PageWrap className="">
      Hello
      <JunoHelloWorld></JunoHelloWorld>
    </PageWrap>
  );
}
