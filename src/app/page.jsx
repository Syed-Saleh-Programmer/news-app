import HorizontalCard from "@/components/HorizontalCard";
import { fetchTopHeadlines } from "@/utils/newsApi"
import Link from "next/link";

async function page() {
    const data = await fetchTopHeadlines();
    if (!data) {
        return (
            <section className="w-full min-h-[calc(100vh-150px)] flex justify-center items-center text-red-600 text-lg">
                Failed to Fetch News.
            </section>
        )
    }
    const articles = data.articles.filter(article => article.content && article.urlToImage);
    return (
        <section>
            <h1 className="text-3xl font-semibold mb-10">
                Top Headlines
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
                {articles.map((article, i) => (
                    <HorizontalCard article={article} key={i} />
                ))}
                
            </div>
                {articles.length == 0 && (
                    <div className="w-full">
                        <p>No Articles found for the topic</p>
                        <p>
                            Search for
                            <Link
                                href={"/news/business"}
                                className="text-blue-600 underline underline-offset-4"
                            >
                                Business
                            </Link>
                            instead
                        </p>
                    </div>
                )}
        </section>
    )
}

export default page