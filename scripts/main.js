import EntryListComponent from "./JournalEntryList.js";
import JournalComponent from "./CreateForm.js";
import { getEntries } from "./JournalDataProvider.js";
import { EditEntry } from "./EditEntry.js";




JournalComponent()
getEntries()
.then(EntryListComponent).then(EditEntry)