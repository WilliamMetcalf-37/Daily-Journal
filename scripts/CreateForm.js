

const entryLog = document.querySelector("#JournalHTML")

const JournalComponent = () => {
    // Use the journal entry data from the data provider component

    entryLog.innerHTML += `    
          <main class="JournalHTML">
          <h1>Daily Journal</h1><hr>
          <form action="">
            
              <fieldset class = "journal__item">
                <label>Date</label><hr>
                <input type="date" name="" id="datePicker" class = "date" >  
              </fieldset>
              <fieldset class = "journal__item">
                <label>Concepts Covered</label> <hr>
                <input type="text" class = "concepts" >
              </fieldset>
              <fieldset class = "journal__item">
                <label>Journal Entry</label><hr>
                <textarea row = "1" cols="65" class = "journal__entry" placeholder="Enter Shit"></textarea>
              </fieldset>
              <fieldset class = "journal__item">
                <label>Mood</label><hr>
                <select class = "mood" >
                  <option value="" selected disabled hidden>Select Your Mood</option>
                  <option value="happy">Happy</option>
                  <option value="fine">Fine</option>
                  <option value="sad">Sad</option>
                </select>
              </fieldset>
        
              <button class = "record">Record Journal Entry</button>
          </form>
      </main>
    `
}
export default JournalComponent