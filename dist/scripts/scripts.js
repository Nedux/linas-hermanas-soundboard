import { dataFetch } from './dataFetch.js';
import { ButtonGeneration } from './generatingDom.js';



dataFetch()
    .then((resp) => {
        ButtonGeneration(resp.buttons);
    })
    .catch((e) => {
        console.log(`This went wrong: ${e}`)
    });











