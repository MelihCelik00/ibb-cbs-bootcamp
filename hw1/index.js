let fetchResult = fetch('https://api.ibb.gov.tr/teas/api/open_data');

function loadJSON(url) {
fetch(url)
    .then(function(res) { return res.json(); })
    .then(function(data) {
        document.getElementById('content').innerHTML = JSON.stringify(data);
    });
}

