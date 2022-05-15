<template>
  <div class="contact">
    <div class="branding font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">Contact</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>Contact</p>
      </div>
    </div>
    <div class="info">
      <div class="coordinators student-coordinators">
        <h1 class="font-1">Student Coordinators</h1>
        <ul class="font-3">
          <li>
            <span class="name">Gopalakrishnan</span>
            <p>+91 96560 25482</p>
            <!-- <p>gopalakrishnan@gmail.com</p> -->
          </li>
          <li>
            <span class="name">Ashirdev K N</span>
            <p>+91 91882 31295</p>
            <!-- <p>ashridevkn@gmail.com</p> -->
          </li>
        </ul>
      </div>
      <div class="coordinators staff-coordinators">
        <h1 class="font-1">Staff Coordinators</h1>
        <ul class="font-3">
          <li>
            <span class="name">Jini Varghese P</span>
            <p>+91 97440 14564</p>
            <!-- <p>jinivarghesep@gmail.com</p> -->
          </li>
          <li>
            <span class="name">Arun P Das</span>
            <p>+91 94952 20163</p>
            <!-- <p>arunpdas@gmail.com</p> -->
          </li>
        </ul>
        <ul class="font-3">
          <li>
            <span class="name">Sreeresmi T S</span>
            <p>+91 94951 59545</p>
            <!-- <p>sreeresmits@gmail.com</p> -->
          </li>
          <li>
            <span class="name">Abhishek kumar</span>
            <p>+91 98951 48361</p>
            <!-- <p>abhishekkumar@gmail.com</p> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact {
  width: 100%;
  padding-top: 10%;
  background: #381e63;
}
.info {
  display: flex;
  width: 100%;
  padding-bottom: 50px;
  margin-top: 50px;
}

.info ul {
  padding: 0;
  list-style: none;
  display: flex;
  align-content: center;
}
.info h1 {
}
.info .coordinators {
  font-size: 18px;
  width: 100%;
  color: #703bc4;
}

.info ul li {
  width: 100%;
}
.info ul li span {
  color: white;
  font-size: 24px;
}
.info ul li p {
  color: #d5bcff;
  line-height: 50%;
  font-size: 18px;
}
.brand-main {
  width: 50%;
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
  .info {
    display: block;
    text-align: center;
  }
  .info ul {
    display: block;
  }
  .info h1 {
    padding-top: 10%;
    padding-bottom: 10%;
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
  .info {
    padding-left: 50px;
  }
  .info {
    display: block;
    text-align: center;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .info {
    display: flex;
    text-align: left;
  }
  .info ul {
    display: flex;
  }
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1920px) {
  .brand-background {
    margin-left: -5%;
    margin-top: 1%;
  }
  .info {
    padding-left: 150px;
  }
}
</style>