// Récupération des différents éléments HTML5
const customMenu = document.querySelector(".custom__menu");
const customMenuBtns = [...document.querySelectorAll(".custom__menu button")];

// Création de la constante backgroundsColors qui va stocker les couleurs dans un tableau
const backgroundsColors = ["#ff9900", "#df2525", "#1c69d4", "#e235e2"];

// Déclaration de la fonction toggleCustomMenu qui va permettre au menu d'apparaître et de disparaître
const toggleCustomMenu = (e) => {
  // Condition if...else if
  if (e.type === "contextmenu") {
    // Suppression du comportement par défaut
    e.preventDefault();

    // Mise en place du style
    customMenu.style.display = "block";
    customMenu.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  } else if (e.type === "click") {
    // Mise en place du style
    customMenu.style.display = "none";
  }
};

// Ecoute de l'événement "contextmenu" sur le document et appel de la fonction toggleCustomMenu
document.addEventListener("contextmenu", toggleCustomMenu);

// Ecoute de l'événement "click" sur le document et appel de la fonction toggleCustomMenu
document.addEventListener("click", toggleCustomMenu);

// Déclaration de la fonction changeBackgroundColor qui va permettre de changer la couleur du background
const changeBackgroundColor = (e) => {
  const btnIndex = customMenuBtns.indexOf(e.target); // Récupération de l'index du bouton sur lequel l'internaute a cliqué
  console.log(btnIndex);
  // Mise en place du style
  document.body.style.backgroundColor = backgroundsColors[btnIndex];
};

customMenuBtns.forEach((btn) =>
  // Ecoute de l'événement "click" sur le bouton et appel de la fonction changeBackgroundColor
  btn.addEventListener("click", changeBackgroundColor)
);
