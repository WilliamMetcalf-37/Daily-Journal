

const entryLog = document.querySelector("#JournalHTML")

const JournalComponent = () => {
    // Use the journal entry data from the data provider component

    entryLog.innerHTML += `    
          <main class="JournalHTML">
          <h1>Daily Journal</h1><hr>
          <section class="container">
          <input type="hidden" id="hiddenId"/>
              <div class = "journal__item">
                <label>Concepts Covered</label> <hr>
                <input type="text" class = "concepts" >
              </div>
              <div class = "journal__item">
                <label>Journal Entry</label><hr>
                <textarea row = "1" cols="65" class = "journal__entry" placeholder="Enter Shit"></textarea>
              </div>
              <div class = "journal__item">
                <label>Mood</label><hr>
                <select class = "mood" >
                  <option value="" selected disabled hidden>Select Your Mood</option>
                  <option value="happy">Happy</option>
                  <option value="fine">Fine</option>
                  <option value="sad">Sad</option>
                </select>
              </div>
        
              
              <div class="allTheButtons">
                <button class = "record" id="record">Record Journal Entry</button>
                <button class="showEntries" id="showEntries">Show Entries</button>
              </div>
              <hr>
              <div class="searchfilter">
                <div class="filterMood filterbox">
                  <label>Filter by Mood</label></br>
                  <input type="radio" id="mood1" name="mood" value="happy" class="radio" />
                  <label> Happy </label>
                  <input type="radio" id="mood2" name="mood" value="fine" class="radio" />
                  <label>Fine</label>
                  <input type="radio" id="mood3" name="mood" value="sad" class="radio" />
                  <label>Sad</label>
                </div>
                <div class ="searchEntries filterbox">
                  <label>Search Entries</label></br>
                  <input type="text" placeholder="Search" class="search" />
                </div>
              </div>
              <section id = "entryLog"></section>
        </section>    
      </main>
    `
}
export default JournalComponent