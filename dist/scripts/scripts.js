import { dataFetch } from './dataFetch.js';
import { ButtonGeneration } from './generating-dom.js';
import { SearchSetup } from './search-filter.js';

dataFetch()
    .then(resp => {
        ButtonGeneration(resp.buttons);
    })
    .catch(e => {
        console.log(`This went wrong: ${e}`);
    });

SearchSetup();





