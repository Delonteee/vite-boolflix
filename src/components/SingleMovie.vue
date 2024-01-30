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
    }
}
</script>

<template>
    <div>
        <div>
            Title:{{ titleOrName}}
        </div>
        <div>
            Original title:{{ originalTitleorName}}
        </div>
        <div>
            Original language:{{ originalLanguage }}
        </div>
        <div>
            Flag:
            <img id="language-flag" :src="getFlag()" :alt="originalLanguage">
        </div>
        <div>
            Average Vote:{{ voteAverage}}
        </div>
    </div>
</template>

<style lang="scss" scoped>
#language-flag {
    height: 20px;
}
</style>
