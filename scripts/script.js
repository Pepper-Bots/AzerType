// let score = 0

// let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
// //let motUtilisateur = prompt("Entrez un mot : " + listeMots[0] )

// // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
// while (choix !== "mots" && choix !== "phrases") {
//     choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// }

// // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
// if(choix === "mots"){
//     // On parcourt le tableau des mots
//     for (let i = 0; i < listeMots.length; i++) {
//         // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
//         let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
//         if (motUtilisateur === listeMots[i]) {
//             // Si le mot saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listeMots.length)
// } else {
//     // On parcourt le tableau des phrases
//     for (let i = 0; i < listePhrases.length; i++) {
//         // On demande à l'utilisateur de saisir la phrase correspondant à l'indice i
//         let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
//         if (phraseUtilisateur === listePhrases[i]) {
//             // Si la phrase saisi par l'utilisateur est correct, on incrémente le score
//             score++
//         }
//     }
//     console.log("Votre score est de " + score + " sur " + listePhrases.length)
// }

/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  let spanScore = document.querySelector(".zoneScore span");

  let affichageScore = `${score} / ${nbMotsProposes}`;

  spanScore.innerText = affichageScore;
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition");
  zoneProposition.innerText = proposition;
}
/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
  // Initialisations
  let score = 0;
  let i = 0;

  let boutonValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(listeMots[i]);
  boutonValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);
    if (inputEcriture.value === listeMots[i]) {
      score++;
    }
    i++;
    afficherResultat(score, i);
    inputEcriture.value = ""; // On vide le champ de saisie après chaque proposition
    if (listeMots[i] === undefined) {
      afficherProposition("Le jeu est fini");
      boutonValiderMot.disabled = true;
    } else {
      afficherProposition(listeMots[i]);
    }
  });
  afficherResultat(score, i);
}
