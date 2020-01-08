import { useJournalEntries } from "./JournalDataProvider.js"

export const EditEntry=()=>{
  const eventHub = document.querySelector(".JournalHTML")

eventHub.addEventListener("click", clickEvent =>{
  if(clickEvent.target.id.startsWith("edit--")){
    const [prefix, entryId] = clickEvent.target.id.split("--")
    const entries = useJournalEntries()

    const foundEntry = entries.find(ent =>{
      return ent.id === parseInt(entryId,10)
    })

    const concept = foundEntry.concept
    const entry = foundEntry.entry
    const mood = foundEntry.mood
    document.querySelector(".mood").value = mood
    document.querySelector(".concepts").value = concept
    document.querySelector(".journal__entry").value = entry

    document.querySelector("#hiddenId").value = entryId

    const message = new CustomEvent("editButtonClicked",{
      detail:{
        concept:concept,
        entry:entry,
        mood:mood
      }
    })
    eventHub.dispatchEvent(message)
  }

})

}