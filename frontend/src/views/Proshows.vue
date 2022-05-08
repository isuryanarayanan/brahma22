<template>
  <div class="container">
    <div class="branding font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">Pro-show's</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>Pro-show's</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
}

.brand-main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-main .brand-main_tag {
  font-size: 64px;
  margin: auto;
  white-space: nowrap;
  color: #381e63;
}
.brand-main hr {
  width: 10%;
  border: 0px;
  height: 1px;
  background: #381e63;
  padding-left: 50%;
}
.brand-background {
  line-height: 0%;
  position: absolute;
  white-space: nowrap;
}
.brand-background p {
  margin-top: -5%;
  opacity: 0.1;
}
/* small screen */
@media only screen and (max-width: 600px) {
  .brand-background {
    font-size: 120px;
    margin-left: -10%;
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
    font-size: 200px;
  }
}
</style>