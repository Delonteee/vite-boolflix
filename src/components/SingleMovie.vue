<script>
export default {
    data() {
        return {

        };
    },
    methods: {
        getFlag() {
            let finalLink = 'https://flagicons.lipis.dev/flags/4x3/'; 
            if (this.originalLanguage == 'en') {        
                finalLink += 'gb';
            }
            else if (this.originalLanguage == 'js') {
                finalLink += 'jp';
            }
            else if (this.originalLanguage == 'ja') { 
                finalLink += 'jp';
            }
            else if (this.originalLanguage == 'ko') { 
                finalLink += 'kr';
            }
            else if (this.originalLanguage == 'da') { 
                finalLink += 'dk';
            }
            else if (this.originalLanguage == 'cs') { 
                finalLink += 'cz';
            }
            else if (this.originalLanguage == 'zh') { 
                finalLink += 'cn';
            }
            else if (this.originalLanguage == 'fa') { 
                finalLink += 'ir';
            }
            else if (this.originalLanguage == 'nb') { 
                finalLink += 'no';
            }
            else if (this.originalLanguage == 'hi') { 
                finalLink += 'io';
            }
            else if (this.originalLanguage == 'he') { 
                finalLink += 'il';
            }
            else {
                finalLink += this.originalLanguage;
            }

            finalLink += '.svg';
            return finalLink;
        }

    },
    props: {                       
        titleOrName: String,
        originalTitleorName: String,
        originalLanguage: String,
        voteAverage: Number,
        poster: String,
        overview: String,
    }
}
</script>

<template>
    <div class="single-movie">
        <div class="poster-box d-flex">
            <!-- Stampa il link se valido -->
            <img :src="poster" :alt="titleOrName" class="poster" v-if="poster != null">  
             <!-- Altrimenti stampa immagine -->       
            <img src="https://freepngimg.com/download/coming_soon/7-2-coming-soon-png-picture.png" :alt="titleOrName" class="poster" v-else> 
        </div>
        <div class="details-box">
            <div class="info-box">
                <strong>Title: </strong> {{ titleOrName }}
            </div>
            <div class="info-box">
                <strong>Original title: </strong>{{ originalTitleorName }}
            </div>
            <div class="info-box">
                <strong>Original language: </strong> {{ originalLanguage }} 
                <!-- Richiamo la funzione per prendere le bandiere dinamicamente -->
                <img class="flag" :src="getFlag()" :alt="originalLanguage"> 
            </div>
            <div class="info-box">
                <strong>Vote: </strong> {{Math.ceil(voteAverage/2)}}
                <!-- Se il voto è minore o uguale a 5 stampo la stella piena, altrimenti vuota-->
                <i class="fa-star" v-for="(star, i) in 5" :class="(Math.ceil(voteAverage/2)) <= i ? 'fa-regular' : 'fa-solid'"></i> 
            </div>
            <div class="info-box">
                <strong>Overview: </strong> {{ overview }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    height: 20px;
}

.fa-star {
    color: goldenrod;
}

.single-movie {
    background-color: black;
    position: relative;
    height: 300px;
    width: 200px;
    box-shadow: 0px 0px 50px black;


    &:hover {
            cursor: pointer;
            box-shadow: 0px 0px 30px white;
        
            .details-box {
                display: block;
            
            }
            .poster-box {
                opacity: calc(0.1);
            }
        }
    .poster-box {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
        
        .poster {
            width: 100%;
            object-fit: cover;
        }
    }

    .details-box {
        height: 100%;
        display: none;
        padding: 10px;
        position: absolute;
        bottom: 0;
        overflow: auto;
        text-align: center;
        .info-box {
            margin-bottom: 12px;
        }
    }
}


</style>