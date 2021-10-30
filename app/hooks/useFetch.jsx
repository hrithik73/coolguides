import * as React from "react"

const url = `https://www.reddit.com/r/coolguides`

export const useFetch = () => {
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchData = (sortBy) => {
    setIsLoading(true)
    fetch(`${url}/${sortBy}.json`)
      .then((x) => x.json())
      .then((y) => {
        setData(y.data.children)
        setIsLoading(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return [data, isLoading, fetchData]
}
