import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Contribute
        <br className="max-md:hidden"/>
        <span className="blue_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt Hero offers users a AI Prompting platform to discover, create and share productive prompts 
      </p>

      <Feed/>
    </section>
  )
}

export default Home