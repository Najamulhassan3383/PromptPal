import Feed from "@components/feed";

function Home() {
  return (
    <div className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open source AI prompting tool for modern world to
        discover, create and share prompts.
      </p>

      <Feed />
    </div>
  );
}

export default Home;
