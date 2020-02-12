<template>

  <div id="app">
    <div class="container">
      <div class="wrapper">
        <Header />
        <router-view></router-view>
      </div>
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
    }
  },
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
  font-size: 14px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {

}


.wrapper {
  border-bottom: 1px solid #42b983;
  max-width: 960px;
  margin: 0 auto;
  padding-bottom: 10px;
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
    &__bottom{
      display: flex;
      align-items: flex-end;


      &-item {
        flex: 1 1 33%;
      }
    }
}
.colors{
    display:  flex;
    align-items: center;
}

.color_box {
    border:2px solid #d7d2d7;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin: 0 3px;
    cursor: pointer;
}
.color-link {
  cursor: pointer;
  text-decoration: underline;
  border: 2px solid #d7d2d7;

}
.active-color {
    border:2px solid #42b983;
}

button {
  width: 100%;
  height: 40px;
  border: 1px solid #2c3e50;
  color: #2c3e50;
  cursor:pointer;
  font-size:14px;

  &:hover {
    color: #bebebe;
    background-color: #2c3e50;

  }

  &.disabled {
    opacity: 0.6;
    cursor: default;
    background-color: #bebebe;

    &:hover{
      color:#2c3e50 ;
    }
  }
}

footer {
  background: #2c3e50;
  color: aliceblue;
  margin: 0;
  padding: 0;
  flex-grow: 1;
}


</style>
