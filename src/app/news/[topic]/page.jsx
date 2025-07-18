import HorizontalCard from "@/components/HorizontalCard";
import { fetchNewsByTopic } from "@/utils/newsApi";

const Page = async ({params}) => {
    const { topic } = await params;
    const data = await fetchNewsByTopic(topic);
    if (!data) return (
        <section className="w-full min-h-[calc(100vh-150px)] flex justify-center items-center text-red-600 text-lg">
            Failed to Fetch News for {topic}.
            <button type="submit">retry</button>
        </section>
    )
    const articles = data.articles.filter(article => article.content && article.urlToImage);
    return (
        <section className="w-full min-h-screen">
            <h1 className="text-3xl font-semibold mb-10">
                Top Headlines / {topic}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
                {articles.map((article, i) => (
                    <HorizontalCard article={article} key={i} />
                ))}
            </div>
        </section>
    )
}

export default Page;