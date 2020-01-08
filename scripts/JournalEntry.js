/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
        
        <div id="date">${new Date(entry.date).toLocaleDateString('en-US')}</div>
        <div id="concept">${entry.concept}</div>
        <div id="entry">${entry.entry}</div>
        <div id="mood">${entry.mood}</div>
        <button id="delete--${entry.id}">Delete Entry</button>
        <button id="edit--${entry.id}">Edit Entry</button>
        
      </section>
  `
}

export default JournalEntryComponent