<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px ;
  padding:0px;
  position:absolute;
  width:100%;
  height:100%;
  /* overflow:hidden; */
  overflow-x: hidden;
}
*{
  margin: 0;
  padding: 0;
}
</style>
