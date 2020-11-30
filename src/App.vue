<template>
  <MainVue msg="Hello Vue 3 in CodeSandbox!" />
</template>

<script>
import MainVue from "./components/MainVue";
export default {
  name: "App",
  components: {
    MainVue,
  },
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
caption {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
.mbt {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  border-style: none;
  border-width: 0px;
}
html {
  padding: 0px;
  margin: 0px;
}
body {
  margin: 0px;
  padding: 0px;
}
</style>
