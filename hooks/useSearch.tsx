import { useState, useEffect } from 'react'

interface UseSearchProps<T> {
  items: T[]
  searchKey: keyof T
}

export default function useSearch<T>({ items, searchKey }: UseSearchProps<T>) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredItems, setFilteredItems] = useState<T[]>([])

  useEffect(() => {
    const filtered = items.filter((item) =>
      (item[searchKey] as string)
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    setFilteredItems(filtered)
  }, [items, searchKey, searchQuery])

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
  }
}
