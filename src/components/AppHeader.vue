<script>
import {store} from '../store.js'

export default {
    data() {
        return {
            store,
    
        };
    },
    components: {
        
    },  
    methods: {
        
    },

}
</script>

<template>
    <header class="">
        <div class="">
            <div class="row">
                <div class="col-4 px-4" >
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="col-6">
                    <nav class="navbar navbar-expand-lg navbar-dark ">
                        <div class="collapse navbar-collapse justify-content-between px-2" id="navbarSupportedContent">
                            <div class="">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <a class="btn fw-bold text-light" type="button">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn" type="button">Serie Tv</a>
                                    </li>
                                    <li class="nav-item">
                                        <div class="dropdown">
                                            <a class="btn" type="button">Film</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn" type="button">Originali</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn" type="button">Aggiunti di recente</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="btn" type="button">La mia lista</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div class="col-2">
                    <form class="form-inline my-2 my-lg-0 d-flex">
                        <input class="form-control mr-sm-2" type="search" placeholder="Cerca" aria-label="Search" v-model="store.searchText">
                        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit" @click.prevent="$emit('performSearch')">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </header>

</template>

<style lang="scss" scoped>

h1 {
    color: #E50914;
    font-size: 72px;
}
.logo-netflix {
    width: 100%;
    cursor: pointer;
}

.form-control:focus {
    border: 2 solid black;
    box-shadow: 0px 0px 10px rgb(204, 204, 204);
}

li a{
    color: grey;
    margin: 10px;
    border-radius: 10px;
    &:hover{
        box-shadow: 0px 1px 10px white;
        transition: 0.5s;
    }
}
</style>