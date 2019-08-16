let movieData = localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : []

let moviesMain = document.querySelector('#movies-main')
console.assert(moviesMain, 'moviesMain is not found!')

document.addEventListener('DOMContentLoaded', function(){
    moviesMain.innerHTML = renderMovies(movieData, false)

    moviesMain.addEventListener('click', function(event){
        event.preventDefault()
        if (event.target.tagName === 'BUTTON'){
            let idSplit = event.target.id.split('-')
            let result = removeFromWatchlist(idSplit[idSplit.length - 1])
            if (result){
                event.target.innerHTML = "Removed!"
                event.target.disabled = true    
            }
        }
    })
})

function removeFromWatchlist(imdbID){
    try {
        let watchlistJSON = localStorage.getItem('watchlist')
        let watchlist = JSON.parse(watchlistJSON)

        if (watchlist === null){
            watchlist = []
        }
        let index = watchlist.findIndex(function(element, index){            
            return element && element.imdbID == imdbID
        })

        watchlist.splice(index, 1)
        watchlistJSON = JSON.stringify(watchlist)
        localStorage.setItem('watchlist', watchlistJSON)
        return true         
    } catch (error) {
        console.log(error)
        return false
    }
}