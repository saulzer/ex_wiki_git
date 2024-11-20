afficher = async () => {
  let searchInput = document.getElementById("sujet").value;
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`;

  const response = await fetch(url);
  const data = await response.json();
  let recherche = data.query.search;
  document.getElementById("oui").innerHTML = "";

  recherche.forEach((search) => {
    let structure = document.createElement("div");
    let nom = document.createElement("h2");
    nom.textContent = search.title;
    structure.appendChild(nom);
    let description = document.createElement("p");
    description.innerHTML = search.snippet;
    structure.appendChild(description);

    let lien = document.createElement("div");

    lien.innerHTML = `<a href="https://en.wikipedia.org/wiki/${search.title}" target="_blank">Lire plus sur Wikipedia</a>`;
    structure.appendChild(lien);

    document.getElementById("oui").appendChild(structure);
  });
};
