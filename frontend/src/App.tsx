import React, { useEffect, useState } from "react"
import "./App.css"
import axios from "axios"
import QuotesComponent from "./components/QuotesComponent"
// import quotes from "./quotes.json"

const video = require("../src/assets/toronto.mp4")

const client = axios.create({
  baseURL: "http://localhost:8000/"
})

export interface Quotes {
  quote: string
  author: string
}

function App() {
  const [quotes, setQuotes] = useState<Quotes[]>([])
  const [quote, setQuote] = useState<Quotes>()

  const fetchData = () => {
    client
      .get("api/quotes/")
      .then((res) => setQuotes(res.data.quotes))
      .then(() => setQuote(quotes[Math.floor(Math.random() * quotes.length)]))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)])
    }, 1000)
  }, [])

  console.log(quote)

  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content px-5">
          {quote && <QuotesComponent quote={quote} />}
        </div>
      </div>
    </>
  )
}

export default App
