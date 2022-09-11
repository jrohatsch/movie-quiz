//import data from "./movie_ids.json";

const data = {};

export function addProcessedMovie(id){
    let processed_movies = localStorage.getItem("processed_movies")

    if(processed_movies === null)
        processed_movies = "";

    processed_movies += data[id].id + ",";

    localStorage.setItem("processed_movies", processed_movies);
}

export function isMovieProcessed(imdbID){
    return localStorage.getItem("processed_movies").includes(imdbID);
}