function renderMovies(movieArray, hasAddButton) {
  if (movieArray.length > 0 ){
    let finalHTML = movieArray.map(function(currentMovie) {
      if (currentMovie !== null) {
        let moviePoster =
          currentMovie.Poster === "N/A" ? "no_image.png" : currentMovie.Poster;
        return `
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 results">
                  <div class="movies-container">
                      <div class="movie card">
                          <div class="movie-poster">
                              <img width="100%" src="${moviePoster}">
                          </div>
                          <div class="card-body">
                              <div class="card-title">
                              <h5 class="movie-title-year"><span class="badge badge-secondary">${
                                currentMovie.Year
                              }</span></h5>
                              <h5 class="movie-title">${currentMovie.Title}</h5>
                              </div>
                              <button class="btn btn-sm ${
                                hasAddButton
                                  ? "btn-add btn-primary"
                                  : "btn-remove btn-secondary"
                              }" 
                              id="btn-imdbID-${currentMovie.imdbID}">${
          hasAddButton ? "Add!" : "Remove"
        }</button>
                          </div>
                      </div>
                  </div>
              </div>
              `;
      }
    });
    return finalHTML.join("");  
  } else {
    console.log('no movie found')
    return `
      <div id="notfound" class="col-12">
        <h1>No movie found in the database...</h1>
      </div>`
  }
}

function setGranim() {
  const granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "left-right",
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ["#ff9966", "#ff5e62"],
          ["#00F260", "#0575E6"],
          ["#e1eec3", "#f05053"]
        ]
      }
    }
  });
  const body = document.body;
  const html = document.documentElement;
  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const canvas = document.querySelector("#canvas-basic");
  canvas.style.height = `${Math.round(height / window.innerHeight * 100)}%`
}

function getWatchListFromLocalStorage(){
  let watchlistJSON = localStorage.getItem('watchlist')
  let watchlist = JSON.parse(watchlistJSON)
  if (watchlist === null){
      watchlist = []
  }
  return watchlist
}

function setWatchListToLocalStorage(watchlist){
  let watchlistJSON = JSON.stringify(watchlist)
  localStorage.setItem('watchlist', watchlistJSON)
}
