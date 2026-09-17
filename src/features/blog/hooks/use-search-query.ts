import { parseAsString, useQueryState } from "nuqs"

export function useSearchQuery() {
  const [query, setQuery] = useQueryState(
    "q",
    parseAsString.withDefault("").withOptions({ shallow: false })
  )

  return { query, setQuery }
}
