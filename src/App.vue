<template>

    <div id="app">
      <div class="wrapper">
      <Header />
      <router-view></router-view>


      </div>
        <Footer />

  </div>


</template>

<script>
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
export default {
  name: 'app',
    components: {
        Header,
        Footer
    },
    data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;

}

.wrapper {

  border-bottom: 1px solid #42b983;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2 {
  font-weight: normal;
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

.about {
  display: flex;

  &__description {
    display: flex;
    flex: 1 1 33%;

    h2 {
      font-size: 32px;
      font-weight: bold;
    }
  }

  &__text {
    flex: 2 2 66%;
  }
}

</style>
