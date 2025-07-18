"use client"
import { useState } from "react"

function SearchBox() {
    const [query,setQuery] = useState("")
  return (
    <div
    className="max-w-[320px] flex flex-row h-[50px] rounded-md"
    >
        <input type="text" 
        className="w-full h-full indent-3"
        placeholder="Palestine today..."
        value={query}
        />
        <button>
        </button>
    </div>
  )
}

export default SearchBox