let moviesMain = document.querySelector('#movies-main')
console.assert(moviesMain, 'moviesMain is not found!')

// document.addEventListener('DOMContentLoaded', function(){
//     moviesMain.innerHTML = renderMovies(movieData)
// })

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault()
    console.log('submitted!')
    moviesMain.innerHTML = renderMovies(movieData)
    moviesMain.addEventListener('click', function(event){
        event.preventDefault()
        if (event.target.tagName === 'BUTTON'){
            console.log('this is button')
            let idSplit = event.target.id.split('-')
            saveToWatchlist(idSplit[idSplit.length - 1])
        }
    })
})

function saveToWatchlist(imdbID){
    let movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID === imdbID
    })
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    if (watchlist === null){
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
    console.log(movie)
}

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