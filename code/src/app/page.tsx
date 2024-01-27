import PostList from "@/components/post/PostList";
import PageWrap from "@/layout/PageWrap";
import PostTextarea from "../components/post/PostTextarea";

export default function Home(props: {}) {
  return (
    <PageWrap className="">
      <PostTextarea />
      <PostList />
      {/* <JunoHelloWorld></JunoHelloWorld> */}
    </PageWrap>
  );
}
