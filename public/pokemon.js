const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url; 

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const grabDiv = document.getElementById("results");
const grabList = document.querySelector('#resultsMoves ul');

const grabMoves = document.querySelector('#resultsMoves');
grabMoves.style.display = 'none';

const grabMovesWrapper = document.querySelector('#resultsMovesWrapper');
grabMovesWrapper.style.display = 'none';

let entry = document.getElementById('search');

searchForm.addEventListener('submit', fetchResults); 

function fetchResults(e) {
    e.preventDefault();

    url = baseURL + entry.value +'?limit=980' ;

    fetch(url).then(function(result){
        return result.json();
    }).then(function(json){
        displayResults(json);
    });
}

function displayResults(json) {
    grabMoves.style.display = 'block';
    grabMovesWrapper.style.display = 'block';

    while (grabDiv.firstChild) {
        grabDiv.removeChild(grabDiv.firstChild);
    }

    while (grabList.firstChild) {
        grabList.removeChild(grabList.firstChild);
    }

    /* NAME */
    let displayName = document.createElement('h1');
    let tempName = json.name;
    displayName.innerText = tempName;
    grabDiv.appendChild(displayName);

    let displayId = document.createElement('h3');
    let tempId = json.id;
    displayId.innerText = tempId;
    grabDiv.appendChild(displayId);

    /* TYPES */
    for (i=0; i < json.types.length; i++){
        let displayType = document.createElement('p');

        let tempType = json.types[i].type.name;
        displayType.innerText = tempType;

        grabDiv.appendChild(displayType);
        
        console.log(json.types[i].type.name);
    }

    /* MOVES */
    for (i=0; i < json.moves.length; i++) {
        let displayMoves = document.createElement('li');

        let tempMoves = json.moves[i].move.name;
        console.log(tempMoves);

        displayMoves.innerText = tempMoves;

        grabList.appendChild(displayMoves);

    }

    /* IMAGE */
    let displaySprite = document.createElement('img');
    let tempSprite = json.sprites.front_default;
    displaySprite.src = tempSprite;
    grabDiv.appendChild(displaySprite);

}
    

