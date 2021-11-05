import React, { useState } from "react"

const url = `https://www.reddit.com/r/coolguides`

export const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = (sortBy) => {
    setIsLoading(true)
    // const count = 100
    fetch(`${url}/${sortBy}.json?limit=10`)
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
