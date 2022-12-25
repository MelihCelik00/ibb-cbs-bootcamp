const link = "https://data.ibb.gov.tr/dataset/bd3b9489-c7d5-4ff3-897c-8667f57c70bb/resource/6800ea2d-371b-4b90-9cf1-994a467145fd/download/salk-kurum-ve-kurulularna-ait-bilgiler.json"

const listSection = document.getElementById("data-list");
const previewSection = document.getElementById("preview");

const nameHeader = document.getElementById("name-header");
const latHeader = document.getElementById("lat-header");
const lonHeader = document.getElementById("long-header");
const phoneHeader = document.getElementById("phone-header");

const backward_button = document.getElementById("backward-button");
const forward_button = document.getElementById("forward-button");

let indexState;
let dataArray;

const createListElement = (props) => {
    const {ADI: name1, index} = props
    const listElement = document.createElement("div");
    listElement.classList.add("list-element");
    listElement.innerText = name1; // props.ADI
    
    listElement.addEventListener("click", (e) => {
        indexState = index
        updatePreview(props);
    })
    return listElement;
};

const updatePreview = (props) => {
    const {ADI: nameInfo, 
           BOYLAM: latInfo,
           ENLEM: lonInfo, 
           TELEFON: phoneInfo} = props;
    
    nameHeader.innerText = nameInfo;
    latHeader.innerText = latInfo;
    lonHeader.innerText = lonInfo;
    phoneHeader.innerText = phoneInfo;
};

const goForward = (elem) => {
    const newIndex = Math.min(indexState+1, dataArray.length -1)
    // const props = dataArray[indexState+1];
    // updatePreview({...props[newIndex], index: indexState+1});
    updatePreview({...dataArray[newIndex], index: indexState+1})
    indexState+=1;
};

const goBackward = () => {
    const newIndex = Math.max(indexState, 0)
    // const props = dataArray[indexState-1];
    // updatePreview({...props, index: indexState-1});
    updatePreview({...dataArray[newIndex], index: indexState-1});
    indexState-=1;
};

forward_button.addEventListener("click", goForward);
backward_button.addEventListener("click", goBackward);

fetch(link)
  .then((response) => response.json())
  .then((data) => {

    console.log(data);

    data.forEach((elem, index) => {
        const element = createListElement({...elem, index});
        listSection.append(element)
    });
    dataArray = data;
});
