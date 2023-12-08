import React, { createContext, useState } from 'react'


export const SearchContext = createContext()

function SearchProvider({children}) {

    const [search, setSearch] = useState("")

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    const data = {search, handleSearch}
  return (
    <SearchContext.Provider value={data}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider