"use client"

const NewsletterForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full sm:w-auto gap-2"
    >
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 sm:w-64 bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded-xl transition-colors"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  )
}

export default NewsletterForm
