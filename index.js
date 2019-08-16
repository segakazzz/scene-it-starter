let moviesMain = document.querySelector('#movies-main')

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault()
    let searchString = document.querySelector('.search-bar').value
    let urlEncodedSearchString = encodeURIComponent(searchString)
    axios.get('http://www.omdbapi.com/?apikey=3430a78&s=' + urlEncodedSearchString)
    .then(function(response){
        let movieArray = (response.data.Response === "False") ? [] : response.data.Search
        moviesMain.innerHTML = renderMovies(movieArray, true)
        moviesMain.addEventListener('click', function(event){
            event.preventDefault()
            if (event.target.tagName === 'BUTTON'){
                let idSplit = event.target.id.split('-')
                let result = saveToWatchlist(idSplit[idSplit.length - 1], movieArray)
                if (result){
                    event.target.innerHTML = "Added!"
                    event.target.disabled = true    
                }
            }
        })
    }).catch(function(error){
        console.log(error)
    })
})

function saveToWatchlist(imdbID, movieArray){
    try {
        let movie = movieArray.find(function(currentMovie){
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
        return true         
    } catch (error) {
        console.log(error)
        return false
    }
}

