<template>
  <div id="app">
    <div id="input" @input="onInput">
      Enter some input:<br />
      <input />
    </div>
    <br />
    <div id="output">
      Your identicon:<br />
      <div v-html="identicon" />
    </div>
  </div>
</template>

<script>
import jdenticon from "jdenticon";

export default {
  name: "App",
  computed: {
    identicon: function() {
      return jdenticon.toSvg(this.$root.textInput, 300);
    }
  },
  methods: {
    onInput: function(event) {
      this.$root.textInput = event.target.value;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
