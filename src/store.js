import {reactive} from 'vue';

export const store = reactive({
    searchText: '',
    movies: [],
    series: [],
    apiKey: 'dc8184a6ada85139e7365a6841994a8b',
    movieUrl: 'https://api.themoviedb.org/3/search/movie',
    seriesUrl: 'https://api.themoviedb.org/3/search/tv',
    imgUrl: 'https://image.tmdb.org/t/p/w342/'
});