async function getDataFromServer() {
    const url = 'https://movies-api14.p.rapidapi.com/movies';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e4b290a3d9msh1a849cfc83e52dcp124b61jsnedfbb35cba5a',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        printDataToHtml(data);
    } catch (error) {
        console.error(error);
    }
}

function closeCartMovie() {
    const cartMovie = document.getElementById('theCart');
    cartMovie.style.display = 'none';
}

function openCartMovie(movie) {
    const cartMovie = document.getElementById('theCart');
    cartMovie.innerHTML = `
        <span id="closeCart">X</span>
        <h1>${movie.title}</h1>
        <div class="cartDetails">
            <img src="${movie.backdrop_path}" alt="${movie.title}">
            <div class="cartInfo">
                <p><span>Release date:</span> ${movie.release_date}</p>
                <p><span>Genres of the movie:</span> ${movie.genres}</p>
                <p>${movie.overview}</p>
            </div>
        </div>
    `;
    cartMovie.style.display = 'block';
    const close = document.getElementById('closeCart');
    close.addEventListener('click', closeCartMovie);

}


function printDataToHtml(data) {
    const presentation = document.getElementById('presentation');

    if (data.movies && data.movies.length > 0) {
        presentation.innerHTML = '';

        for (const movie of data.movies) {
            const movieElement = document.createElement('div');
            movieElement.classList.add('cart');
            movieElement.innerHTML = `
                <h1>${movie.title}</h1>
                <img id="movie-image" src="${movie.poster_path}" alt="${movie.title}">
            `;

            const img = movieElement.querySelector('#movie-image');
            img.addEventListener('click', () => openCartMovie(movie));

            presentation.appendChild(movieElement);
        }

    } else {
        console.error('No movies found in the response');
    }
}

getDataFromServer();
