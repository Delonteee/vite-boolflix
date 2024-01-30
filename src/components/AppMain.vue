<script>
import {store} from '../store.js'
import SingleMovie from './SingleMovie.vue'

export default {
    data() {
        return {    
            store,
        };
    },
    components: {
        SingleMovie,
    },  
    methods: {
    },
}
</script>

<template>
    <main>
        <h2>MOVIES</h2>
        <div>
            <ul>
                <li v-for="(movie, i) in this.store.movies" :key="i">
                    <SingleMovie
                    :titleOrName="movie.title"
                    :originalTitleorName="movie.original_title"
                    :originalLanguage="movie.original_language"
                    :voteAverage="movie.vote_average"
                    />
                </li>
            </ul>
        </div>
        <hr>
        <h2>SERIES</h2>
        <div>
            <ul>
                <li v-for="(serie, i) in this.store.series" :key="i">
                    <SingleMovie
                    :titleOrName="serie.name"
                    :originalTitleorName="serie.original_name"
                    :originalLanguage="serie.original_language"
                    :voteAverage="serie.vote_average"
                    />
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>

img {
    width: 100px;
    height: 100px;
}
</style>