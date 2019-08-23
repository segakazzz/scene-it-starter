# Summary
Scene it provides movie search from [OMDb API](https://www.omdbapi.com). You can add/remove your favorite movies from/to your watchlist.

* URL - https://segakazzz.github.io/scene-it-starter/

# Technologies & External Libraries
 * HTML/CSS
 * Javascript including Promise, Event Listner, Fetch etc. 
 * [Garnim](https://sarcadass.github.io/granim.js/) - Animated color gradients for background
 * [Bootstrap](https://getbootstrap.com/) - Layout & form components

# Data structure from OMDb API
~~~
[
	{
		Title: "The Dark Knight",
		Year: "2008",
		imdbID: "tt0468569",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"
	},
	{
		Title: "The Dark Knight Rises",
		Year: "2012",
		imdbID: "tt1345836",
		Type: "movie",
		Poster:
			"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"
	},...
]