let moviesMain = document.querySelector('#movies-main')
let searchInput = document.querySelector('#search-form input')
let searchButton = document.querySelector('#search-form button')

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault()
    let searchString = document.querySelector('.search-bar').value
    let urlEncodedSearchString = encodeURIComponent(searchString)
    axios.get('https://www.omdbapi.com/?apikey=3430a78&s=' + urlEncodedSearchString)
    .then(function(response){
        let movieArray = (response.data.Response === "False") ? [] : response.data.Search
        moviesMain.innerHTML = renderMovies(movieArray, true)
        setGranim()
        checkAlreadyRegistered()
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

document.addEventListener('DOMContentLoaded', function(){
    setGranim()
    searchButton.disabled = true
})


searchInput.addEventListener('keyup',function(e){
    if(e.target.value.length < 3){
        searchInput.classList.add('is-invalid')
        searchInput.classList.remove('is-valid')
        searchButton.disabled = true
    } else {
        searchInput.classList.remove('is-invalid')
        searchInput.classList.add('is-valid')
        searchButton.disabled = false
    }
})

function saveToWatchlist(imdbID, movieArray){
    try {
        let movie = movieArray.find(function(currentMovie){
            return currentMovie.imdbID === imdbID
        })
        let watchlist = getWatchListFromLocalStorage()
        watchlist.push(movie)
        setWatchListToLocalStorage(watchlist)
       return true         
    } catch (error) {
        console.log(error)
        return false
    }
}

function checkAlreadyRegistered(){
    let watchlist = getWatchListFromLocalStorage()
    let savedImdbIDArray = watchlist.map(function(element){
      return element === null ? null : element.imdbID
    })
    let addButtons = document.querySelectorAll('.card-body button')
    addButtons.forEach(function(btn){
        const idArray = btn.getAttribute('id').split('-')
        if (savedImdbIDArray.indexOf(idArray[idArray.length-1]) !== -1){
            btn.disabled = true
            btn.innerHTML = "Added Already!"
        }
    })
}
