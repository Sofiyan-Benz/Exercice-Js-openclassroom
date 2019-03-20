/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
console.log("Bienvenus");
console.log("1 : lister les contacts");
console.log("2 : ajouter un contact");
console.log("0 : quitter");

let nombre = 1;
while (nombre <= 10) {
const listcontact = Number(prompt("choisissez votre option :"));

if (listcontact == 1) {
  const contact = ['Prenom : Carole\n\ Nom: Lévisse\n\
   Prenom: Mélodie\n\ nom: Nelsonne'];
  console.log(contact.join());
  

  
}
else if (listcontact == 2) {
  const addcontact = prompt("ajouter un contact :")
  console.log(addcontact);
  
}
else {
  console.log("Au revoir");
  break
  
}
nombre++;
};

    