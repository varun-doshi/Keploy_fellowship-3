window.onload = function () {
  var searchBox = document.getElementById("button");
  document.getElementById("getPoki").addEventListener("click", getPoki);

  const baseURL = "https://pokeapi.co/api/v2/pokemon/";
  function getPoki() {
    var input = document.getElementById("searchBox").value;
    var name = input.toLowerCase();
    const fetchURL = `${baseURL}${name}/`;

    fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => {
        let output = `
      <div class="pokeInfo">
        <p id="pokeName">Name: ${data.name}</p>
        <p id="pokeType">Type: ${data.types[0].type.name}</p>
        <img id="pokeImg" src=${data.sprites.front_default}></img>
      </div>
      `;
        console.log("Name:", data.name);
        console.log(data.types[0].type.name);
        document.getElementById("output").innerHTML = output;
      })
      .catch((error) => {
        let output = `
        <h1>Not a valid pokemon name</h1>
        `;
        document.getElementById("output").innerHTML = output;
      });
  }
};
