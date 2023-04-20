const boutonAjouterImage = document.getElementById("ajouter-image");
const divImages = document.getElementById("images");

function ajouterImage() {
    const image = document.createElement("img");
    image.src = "chemin/vers/mon/image.jpg";
    divImages.appendChild(image);
}

boutonAjouterImage.addEventListener("click", ajouterImage);