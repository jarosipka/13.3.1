var movies = [];

function movie(name, year, actor) {
  return {
    movieName: name,
    movieYear: year,
    movieActor: actor,
  };
}

function insertMovie() {
  let name = document.getElementById("movie-name").value;
  let year = document.getElementById("movie-year").value;
  let actor = document.getElementById("movie-actor").value;

  movies.push(
    movie(
      "Meno filmu: " + name,
      "| " + "Rok vydania: " + year,
      "| " + "Meno herca: " + actor
    )
  );

  console.log("******* Aktuálny zoznam filmov *******");

  showArray();
}
function removeLastMovie() {
  movies.pop();

  console.log(" *******Odstránený posledný pridaný prvok *******");

  showArray();
}

function clearMovieList() {
  movies = [];
  console.log("******* Zoznam bol vyčistený*******");

  showArray();
}
function showArray() {
  for (let i = 0; i < movies.length; i++) {
    let s = "";
    for (let key in movies[i]) {
      s += movies[i][key] + " ";
    }
    console.log(s);
  }
}
