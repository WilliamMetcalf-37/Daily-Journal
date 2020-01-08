
/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntry, saveEntry, getEntries, deleteEntry, useJournalEntries, editEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered


const EntryListComponent = () => {
    const eventHub = document.querySelector(".JournalHTML")
    const entryLog = document.querySelector("#entryLog")

    const renderUpdatedEntries =() =>{
        const entries = useJournalEntries()
        render(entries)
    }

    const resetForm =()=>{
        document.querySelector(".concepts").value = ""
        document.querySelector(".journal__entry").value = ""
        document.querySelector(".mood").value = ""
    }
    // Use the journal entry data from the data provider component
    const entries = useEntry()
    eventHub.addEventListener("click", clickEvent => {
        const hiddenId = document.querySelector("#hiddenId").value
        if (clickEvent.target.id === "record") {
        if(hiddenId === ""){

                // Make a new object representation of a note
                const newEntry = {
                    // Key/value pairs here
                    "date": Date.now(),
                    "concept": document.querySelector(".concepts").value,
                    "entry": document.querySelector(".journal__entry").value,
                    "mood": document.querySelector(".mood").value
                }
      
                // Change API state and application state
                
                saveEntry(newEntry).then(renderUpdatedEntries).then(resetForm)
    
            }
           else{
          
               const newEntry ={
                "date": Date.now(),
                "concept": document.querySelector(".concepts").value,
                "entry": document.querySelector(".journal__entry").value,
                "mood": document.querySelector(".mood").value,
                "id": hiddenId
               }
               editEntry(newEntry).then(renderUpdatedEntries).then(resetForm)
            }
           
        }
    })

    eventHub.addEventListener("click", clickEvent=>{
        if(clickEvent.target.id.startsWith("showEntries")){ 
            render(useEntry())
        }
    })

    eventHub.addEventListener("click", clickEvent=>{
        if(clickEvent.target.id.startsWith("delete--")){
            const [prefix, id] = clickEvent.target.id.split("--")
            deleteEntry(id).then(renderUpdatedEntries)
       
        }
    })
    eventHub.addEventListener("editButtonClicked", event =>{
        
        console.log("this custom event does nothing")


    })
    eventHub.addEventListener("change", event=>{

        if(event.target.classList.contains("radio")){
          const entries = useJournalEntries()
          const filteredEntries = entries.filter(ent =>{
            if(ent.mood === event.target.value){
              return ent
            }
          })
          render(filteredEntries)
        }
      })

const searchTextbox = document.querySelector(".search")

eventHub.addEventListener("keypress", event=>{
    if(event.key ==="Enter"){
        if(event.target.classList.contains("search")){

            
            const entries = useJournalEntries()
            const searchedArray = []
            const filteredEntries = entries.filter(ent =>{
                Object.values(ent).map(ass=>{
                    if(String(ass).toLowerCase().includes(event.target.value.toLowerCase())){
                        searchedArray.push(ent)
                    }
                })
                
            })
            render(searchedArray)
        }
    }
})






const render = entryComponent =>{

    entryLog.innerHTML = `    
        <section class="JournalEntryList">
          ${entryComponent.map(log => JournalEntryComponent(log)).join("")}
        </section>
    `
}

}

export default EntryListComponent
