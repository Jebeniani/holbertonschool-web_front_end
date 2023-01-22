function createElement(data) {
    const paragraph = document.createElement("p");
    paragraph.innerText = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;
            callback(extract);
        }
    };
    xhr.send();
}

queryWikipedia(createElement);