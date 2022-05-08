<template>
  <nav>
    <div class="nav-brand">
      <div class="nav-brand__main font-1">Brahma</div>
      <div class="nav-brand__sub font-2">
        <span class="line"></span>
        <p>Awaken the creator within</p>
        <span class="line"></span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  height: 64px;
  width: 100%;
  padding-left: 2%;
}
.nav-brand {
  margin-top: 50px;
  width: 25%;
  line-height: 90%;
}
.nav-brand__main {
  font-size: 32px;
  padding-left: 20%;
  color: white;
}
.nav-brand__sub {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
	white-space: nowrap;
}
.nav-brand__sub p {
  padding: 0px 10px 0px 10px;
}

.line {
  width: 10%;
  height: 1px;
  background: white;
  border-radius: 10px;
}
</style>
