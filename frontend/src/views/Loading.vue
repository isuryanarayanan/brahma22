<template>
  <div class="loader font-1">
    <div class="banner"></div>
  </div>
  <div class="background-big">
    <div class="background-wrapper">
      <div class="background font-1">
        <p class="background-1">
          <span class="background-silent">THECREATORWITHIN</span>
          <span class="background-active">AWAKEN</span
          ><span class="background-silent">THECREATORWITHIN</span>
        </p>
        <p class="background-2">
          <span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span
          ><span class="background-active">THE</span
          ><span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span>
        </p>
        <p class="background-3">
          <span class="background-silent">AWAKENTHE</span>
          <span class="background-active">CREATOR</span>
          <span class="background-silent">WITHIN</span>
          <span class="background-silent">AWA</span>
        </p>
        <p class="background-4">
          <span class="background-silent">AWAKENTHECREATOR</span
          ><span class="background-active">WITHIN</span>
          <span class="background-silent">AWAKENTHECREATOR</span>
        </p>
      </div>
    </div>
  </div>

  <div class="background-small">
    <div class="background-wrapper">
      <div class="background background-top font-1">
        <p class="background-1">
          <span class="background-silent">THECREATORWITHIN</span>
          <span class="background-active">AWAKEN</span
          ><span class="background-silent">THECREATORWITHIN</span>
        </p>
        <p class="background-2">
          <span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span
          ><span class="background-active">THE</span
          ><span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span>
        </p>
        <p class="background-3">
          <span class="background-silent">AWAKENTHE</span>
          <span class="background-active">CREATOR</span>
          <span class="background-silent">WITHIN</span>
          <span class="background-silent">AWA</span>
        </p>
        <p class="background-4">
          <span class="background-silent">AWAKENTHECREATOR</span
          ><span class="background-active">WITHIN</span>
          <span class="background-silent">AWAKENTHECREATOR</span>
        </p>
      </div>
      <div class="background background-bottom font-1">
        <p class="background-1">
          <span class="background-silent">THECREATORWITHIN</span>
          <span class="background-active">AWAKEN</span
          ><span class="background-silent">THECREATORWITHIN</span>
        </p>
        <p class="background-2">
          <span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span
          ><span class="background-active">THE</span
          ><span class="background-silent">CREATORWITHIN</span>
          <span class="background-silent">AWAKEN</span>
        </p>
        <p class="background-3">
          <span class="background-silent">AWAKENTHE</span>
          <span class="background-active">CREATOR</span>
          <span class="background-silent">WITHIN</span>
          <span class="background-silent">AWA</span>
        </p>
        <p class="background-4">
          <span class="background-silent">AWAKENTHECREATOR</span
          ><span class="background-active">WITHIN</span>
          <span class="background-silent">AWAKENTHECREATOR</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bar {
  width: 120%;
  margin-left: -10%;
  border-radius: 5px;
  background: white;
}

.banner {
  position: absolute;
  color: #fff;
  z-index: 9999;
  width: 500px;
  height: 500px;

  background-image: url("../assets/brahmalogotext.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.background-wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  line-height: 0%;
  white-space: nowrap;
  text-align: center;
}

.background .background-silent {
  opacity: 0.1;
}

.background .background-active {
  opacity: 0.2;
}
/*small screen*/
@media only screen and (max-width: 600px) {
  .banner {
    margin-top: -100px;
    font-size: 24px;
  }
  .bar {
    height: 2px;
  }
  .background-big {
    display: none;
  }
  .background-wrapper {
    font-size: 64px;
  }

  .background-small .background-top {
    transform: rotate(45deg);
    margin-top: -100px;
  }
  .background-small .background-bottom {
    transform: rotate(225deg);
    margin-top: 450px;
  }
}

/*big screen*/
@media only screen and (min-width: 600px) {
  .loader {
    font-size: 96px;
  }
  .bar {
    height: 3px;
  }
  .background-small {
    display: none;
  }
  .background-wrapper {
    font-size: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
