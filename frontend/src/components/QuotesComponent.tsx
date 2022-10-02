import React from "react"
import { Quotes } from "../App"

const QuotesComponent = ({ quote }: { quote: Quotes }) => {
  return (
    <>
      <h1 className="text-3xl font-serif">{quote?.quote}</h1>
      <p className="text-sm font-sans">{quote?.author}</p>
    </>
  )
}

export default QuotesComponent
