<template>
  <div class="container">
    <div class="branding font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">Sponsor's</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>Sponsor's</p>
      </div>
    </div>
    <div class="slider"></div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100vh;
}

.brand-main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-main .brand-main_tag {
  font-size: 64px;
  margin: auto;
  white-space: nowrap;
  color: #fff;
  z-index: 999;
}
.brand-main hr {
  width: 10%;
  border: 0px;
  height: 1px;
  background: #703bc4;
  padding-left: 50%;
}
.brand-background {
  line-height: 0%;
  position: absolute;
  white-space: nowrap;
}
.brand-background p {
  margin-top: -4%;
  opacity: 0.1;
}

/* small screen */
@media only screen and (max-width: 600px) {
  .container {
    padding-top: 30%;
  }
  .brand-background {
    font-size: 120px;
  }
  .brand-main .brand-main_tag {
    font-size: 32px;
  }
}
/* big screen */
@media only screen and (min-width: 600px) {
  .brand-background {
    width: 100%;
    text-align: center;
    font-size: 250px;
  }
  .container {
    padding-top: 10%;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .brand-background {
    margin-left: -5%;
    margin-top: 1%;
  }
}
</style>