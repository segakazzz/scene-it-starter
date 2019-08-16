let movieData = localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []

let moviesMain = document.querySelector('#movies-main')
console.assert(moviesMain, 'moviesMain is not found!')

document.addEventListener('DOMContentLoaded', function(){
    moviesMain.innerHTML = renderMovies(movieData)
})

function renderMovies(movieArray){
    let finalHTML = movieArray.map(function(currentMovie){
        return `
        <div class="col-12 col-md-6 col-xl-4 results">
            <div class="movies-container">
                <div class="movie card">
                    <img width="100%" src="${currentMovie.Poster}">
                    <div class="card-body">
                        <h5 class="card-title"><span>${currentMovie.Title}</span><span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                        <button class="btn btn-primary" id="btn-imdbID-${currentMovie.imdbID}">Add!</button>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    return finalHTML.join('')
}