export function dataFetch() {
    return fetch('./data.json')
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch((e) => {
            console.log(`This went wrong: ${e}`)
            return {};
        });
}
