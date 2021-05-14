<template>
    <div class="cover">
        <span class="home-logo">LDVELH</span>
        <a href="/player">player</a><br>
        <a class="bestiary_link" href="/bestiary/gobelin">Gobelin</a>
        <bestiaryLink id="gobelin"/>
    </div>
</template>

<script>
export default {
    name: 'pageCover'
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
