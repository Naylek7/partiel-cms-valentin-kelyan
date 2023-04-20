let sommeCliques = document.getElementById('sommeCliques');

let nbCliques = document.getElementById('nbCliques');

let increment = 0

sommeCliques.addEventListener ('click', function(){

    let clique = document.createElement('div');
    increment++;
    clique.textContent = increment;
    sommeCliques.appendChild(clique);
    localStorage.setItem("Combien", clique.textContent);
});
