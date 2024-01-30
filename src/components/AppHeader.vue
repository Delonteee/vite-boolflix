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
    <header>
        <input v-model="store.searchText" type="text" placeholder="Inserisci il nome del film" >
        <button type="button" @click="$emit('performSearch')" >Cerca</button>
    </header>
</template>

<style lang="scss" scoped>
</style>