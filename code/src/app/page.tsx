import PageWrap from "@/layout/PageWrap";
import JunoHelloWorld from "../juno/JunoHelloWorld";

export default function Home() {
  return (
    <PageWrap className="">
      Hello
      <JunoHelloWorld></JunoHelloWorld>
    </PageWrap>
  );
}
