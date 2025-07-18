import Link from "next/link";

function NotFound() {
  return (
    <section className="w-full min-h-[calc(100vh-150px)] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">
            Page Not Found.
        </h1>
        <Link href={"/"}
        className="bg-black hover:bg-stone-700 px-4 py-2 rounded text-white text-lg font-semibold mt-4"
        >
            Go To Home
        </Link>
    </section>
  )
}

export default NotFound;