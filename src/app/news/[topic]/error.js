
"use client"

function Error({error, reset}) {
  console.log(error)
  return (
    <section className="w-full min-h-[calc(100vh-150px)] flex flex-col justify-center items-center">
      <h1 className="text-lg">Something Went Wrong: {error?.message}</h1>
      <button 
      onClick={()=> reset()}
      className="mt-6 bg-black cursor-pointer hover:bg-stone-600 px-4 py-2 text-base rounded text-white font-semibold"
      >
        Try Again
      </button>
    </section>
  )
}

export default Error