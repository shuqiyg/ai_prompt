import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="pink_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your creative prompts with the community, sky is the limit when it comes to converting imagination into products with AI-powered tools.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-orange-600">
            AI Prompt
          </span>

          <textarea 
            value={post.prompt}
            onChange={(e)=> setPost({...post, prompt: e.target.value })}
            placeholder="Tell us your Idea..."
            required
            className="form_textarea" />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-orange-600">
            Tag
            <span>  (#idea, #product, #software, #ai)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e)=> setPost({...post, tag: e.target.value })}
            placeholder="Add your #Tag"
            required
            className="form_input" />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-red-600">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"  
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form