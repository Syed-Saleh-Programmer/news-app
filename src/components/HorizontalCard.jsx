import Link from "next/link"
import Image from "next/image"

function HorizontalCard({ article }) {
    return (
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
            <div className="w-full relative h-[200px] flex flex-row group gap-4 overflow-hidden bg-stone-100 hover:bg-stone-200 transition-all p-3 rounded-lg">
                <div className="absolute top-0 left-0 sm:relative h-full w-full aspect-video rounded-lg overflow-hidden brightness-50">
                    <Image 
                        src={article?.urlToImage} 
                        alt={article.title || 'News article'}
                        fill
                        className="object-cover rounded-lg group-hover:scale-110 transition-all duration-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="absolute top-0 left-0 sm:relative w-full h-full flex flex-col justify-end sm:justify-start gap-3 text-white sm:text-black p-3 sm:p-0">
                    <h2 className="text-lg font-semibold">
                        {article.title.slice(0,100)}...
                    </h2>
                    <p className="text-xs font-light">
                        {article.content.slice(0,60)}...
                    </p>
                </div>

            </div>
        </Link>
    )
}

export default HorizontalCard