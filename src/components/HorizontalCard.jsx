import Link from "next/link"
import Image from "next/image"

function HorizontalCard({ article }) {
    return (
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[200px] flex flex-row group gap-4 overflow-hidden bg-stone-100 hover:bg-stone-200 transition-all p-3 rounded-lg">
                <div className="h-full aspect-video relative rounded-lg overflow-hidden">
                    <Image 
                        src={article?.urlToImage} 
                        alt={article.title || 'News article'}
                        fill
                        className="object-cover rounded-lg group-hover:scale-110 transition-all duration-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="w-full h-full flex flex-col gap-3">
                    <h2 className="text-lg font-semibold line-clamp-2">
                        {article.title}
                    </h2>
                    <p className="text-xs font-light line-clamp-3">
                        {article.content}
                    </p>
                </div>

            </div>
        </Link>
    )
}

export default HorizontalCard