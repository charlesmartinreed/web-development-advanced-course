// note that this uses jQuery
function getMostFollowers(...usernames) {
  // set up a base url
  let baseUrl = "https://api.github.com/users/";

  // return an array of promises by mapping over the usernames passed into the function and into the getJSON method
  let urls = usernames.map(username => $.getJSON(baseUrl + username));

  // use Promise.all to get the resultant json data
  return Promise.all(urls).then(data => {
    // sort by followers and get the first element in the newly sorted array
    let max = data.sort((a, b) => a.followers < b.followers)[0];

    return `${max.name} has the most followers with ${max.followers}`;
  });
}

function starWarsString(id) {
  var str = "";
  return $.getJSON(`https://swapi.co/api/people/${id}/`)
    .then(data => {
      str += `${data.name} is featured in `;
      let filmData = data.films[0];
      return $.getJSON(filmData);
    })
    .then(res => {
      str += `${res.title}, directed by ${res.director} `;
      let planetData = res.planets[0];
      return $.getJSON(planetData);
    })
    .then(res => {
      str += `and it takes place on ${res.name}.`;
      return str;
    })
    .then(finalString => {
      return finalString;
    });
}
