import * as React from "react"

const url = `https://www.reddit.com/r/coolguides`

export const useFetch = () => {
  const [data, setData] = React.useState()

  const fetchData = (sortBy) => {
    fetch(`${url}/${sortBy}.json`)
      .then((x) => x.json())
      .then((y) => {
        setData(y.data.children)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return [data, fetchData]
}
