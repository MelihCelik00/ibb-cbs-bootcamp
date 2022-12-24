let fetchResult = fetch('https://api.ibb.gov.tr/teas/api/open_data');

function loadJSON(url) {
fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(data) {
        document.getElementById('content').innerHTML = JSON.stringify(data);
    });
};

console.log(loadJSON(fetchResult));

const listDiv = document.createElement("div");
listDiv.className = "box";
listDiv.id = list;
let container = document.getElementById('containerId');

function create() {
    container.appendChild(list)
}
