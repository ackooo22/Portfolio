const settings = {
	async: true,
	crossDomain: true,
	url: 'https://api.themoviedb.org/3/search/movie',
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTAyNDk0N2U0NzlhOTFkZTE4MmViYmMwNDg5NDhjOSIsInN1YiI6IjY2MjUyNjRmZTg5NGE2MDE3ZDNiNmQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rikIhFjtiDMXH9uK7WeqHNpoigZjLT_6d9Scp5BclF0'
	}
};

$('.movie-search').click(function(event) {
	event.preventDefault()
	let query = $('#search').val();

	$.ajax({
		...settings,
		data: {
			query: query,
			include_adult: false,
			language: 'en-US',
			page: 1
		}
	}).done(function(data) {
		console.log(data);
		if (data.results.length > 0) {
			$('.movie-name').html(data.results[0].title);
			$('.rating-num').html(data.results[0].vote_average);
			$('.overview').html(data.results[0].overview);
			$('#movie-poster').attr('src', 'https://image.tmdb.org/t/p/w500/' + data.results[0].poster_path);
		
		}
		else {
			console.log("No movies found!");
		}
	})	
});
// $('.movie-search').click(function(event) {
// 	event.preventDefault()
// 	let query = $('#search').val();

// 	$.ajax({
// 		...settings,
// 		data: {
// 			query: query,
// 			include_adult: false,
// 			language: 'en-US',
// 			page: 1
// 		}
// 	}).done(function(data) {
// 		console.log(data);
// 		if (i = 1, i < data.length, i++) {
// 			$('.title').html(data.results[i].title);
// 			$('img').attr('src', 'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path);
		
// 		}
// 		else {
// 			console.log("No movies found!");
// 		}
// 	})	
// });


const settings1 = {
	async: true,
	crossDomain: true,
	url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
	method: 'GET',
	headers: {
    accept: 'application/json',
	Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTAyNDk0N2U0NzlhOTFkZTE4MmViYmMwNDg5NDhjOSIsInN1YiI6IjY2MjUyNjRmZTg5NGE2MDE3ZDNiNmQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rikIhFjtiDMXH9uK7WeqHNpoigZjLT_6d9Scp5BclF0'
	}
};

$.ajax(settings1)
.done(function (response) {
	console.log(response);

	const info = $('.card')
	info.innerHTML = (`
	<div class="card">
                    <div class="img"><img src="assets/Img/landing page cards/One_Piece_Film_Red_Visual_Poster.png" alt="onePiece"></div>
                    <div class="info">
                        <div class="type">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="m9 17 8-5-8-5z"></path></svg>
                            <p>Movie</p>
                        </div>
                        <div class="time">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>
                            <p>1h 55m</p>
                        </div>
                    </div>
                    <div class="title">
                        <p>${response.results}</p>
                    </div>
                </div>
				`)
	
});