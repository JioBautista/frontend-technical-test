import React from 'react'
import data from "./data/data.json"
import EventName from './EventName'

function Event() {
  return (
    <div>
        {data.map(items => {
            return (
                <>
                <EventName>{items.name}</EventName>
                </>
            )
        })}
    </div>
  )
}

export default Event