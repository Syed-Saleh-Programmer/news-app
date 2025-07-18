"use client"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

function SearchBox() {
    const [query,setQuery] = useState("")
    const router = useRouter()

    function handleSearch(e){
      e.preventDefault()
     if(query.length > 3){
       let encodeQuery = encodeURIComponent(query)
       router.push(`/news/${encodeQuery}`)
     }
    }

  return (
    <form
    onSubmit={handleSearch}
    className="max-w-full sm:max-w-[320px] flex flex-row h-full rounded-md justify-center items-center bg-stone-600/60 px-2"
    >
        <input type="text" 
        className="w-full h-full indent-3 outline-none py-2"
        placeholder="Palestine today..."
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        />
        <button>
          <Search size={14} color="white"/>
        </button>
    </form>
  )
}

export default SearchBox