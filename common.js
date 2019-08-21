function renderMovies(movieArray, hasAddButton){
    let finalHTML = movieArray.map(function(currentMovie){
        if (currentMovie !== null){
            let moviePoster = currentMovie.Poster === 'N/A' ? 'no_image.png' : currentMovie.Poster 
            return `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 results">
                <div class="movies-container">
                    <div class="movie card">
                        <div class="movie-poster">
                            <img width="100%" src="${moviePoster}">
                        </div>
                        <div class="card-body">
                            <div class="card-title">
                            <h5 class="movie-title-year"><span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                            <h5 class="movie-title">${currentMovie.Title}</h5>
                            </div>
                            <button class="btn btn-primary btn-sm ${hasAddButton ? 'btn-add' : 'btn-remove'}" 
                            id="btn-imdbID-${currentMovie.imdbID}">${hasAddButton ? 'Add!' : 'Remove'}</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    })
    return finalHTML.join('')
}



