<template>
  <nav>
    <div class="navbar-item navbar-brand">
      <div class="navbar-brand_banner font-1">Brahma</div>
      <div class="navbar-brand_sub">
        <div class="line"></div>
        <div class="sub font-2">Awaken the creator within</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="navbar-item navbar-links"></div>
    <div class="navbar-item navbar-action"></div>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  width: 100%;
  height: 64px;
  display: grid;
  grid-template-areas: "header link link link link action";
}
.navbar-item {
  width: 100%;
  height: 64px;
  background: red;
  border: 1px solid black;
}
.navbar-brand {
  grid-area: header;
}
.navbar-brand_banner{
	font-size: 24px;
}
.line{
height: 1px;
				width: 100%;
background: green;
}
.navbar-links {
  grid-area: link;
}
.navbar-action {
  grid-area: action;
}
</style>
