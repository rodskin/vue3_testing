<template>
    <div class="cover">
        <span class="home-logo"><font-awesome-icon icon="book" /><br></span>
        <playerName /><br>
        <pageLink page="create_character" title="Démarrer l'aventure"/><br>
        <bestiaryLink id="gobelin"/><br>
    </div>
</template>

<script>
    export default {
        name: 'pageCover',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .home-logo {
        font-size: 20rem;
        color: #bab468;
        display: block;
        margin: 1rem;
        -webkit-animation-name: gold-pulse;
        animation-name: gold-pulse;
        -webkit-animation-duration: 6s;
        animation-duration: 6s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        &::before {
            /*content: "";*/
        }
    }
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
