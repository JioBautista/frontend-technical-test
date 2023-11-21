import React from 'react'
import data from "./data/data.json"

function Event() {
  return (
    <div>
        {data.map(items => {
            return (
                <>
                <div>
                    <h1>{items.name}</h1>
                </div>
                </>
            )
        })}
    </div>
  )
}

export default Event