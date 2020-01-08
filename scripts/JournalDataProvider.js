let entries = []

export const getEntries = ( ) =>{
 return fetch('http://localhost:3000/entries') // Fetch from the API
.then(response => response.json())  // Parse as JSON
.then(parsedEntries => {
    entries = parsedEntries.slice()
}) 
}

export const saveEntry = entry =>{
    return fetch('http://localhost:3000/entries',

    {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
  })
  .then(getEntries)
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
  }
  
  export const editEntry = entry =>{
    return fetch(`http://localhost:3000/entries/${entry.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(entry)
  }).then(getEntries)
  }

 export const useJournalEntries = () => {
  const sortedByDate = entries.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
          
  )
  return sortedByDate
}
export const useEntry = ()=>{
    return entries
}
