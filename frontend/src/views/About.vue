<template>
  <div class="container">
    <div class="branding branding-college font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">ASIET</p>
        <hr class="brand-main_line" />
      </div>

      <div class="brand-background">
        <p>About us</p>
      </div>
    </div>
    <div class="about-college card">
      <p class="font-3">
        Adi Shankara Institute of Engineering & Technology (ASIET) affiliated to
        A P J Abdul Kalam Technological University, and approved by AICTE, has
        courses accredited by NBA. The College is part of a unique and vast
        Gurukula under the management of Adi Shankara Trust located at Kalady.
        ASIET has a spacious campus, state-of-the-art infrastructure and an
        esteemed faculty of scholars trained at leading universities in India
        and abroad. The institution grooms thoroughbred professionals focussed
        on outcome-based education, project-based learning, research acumen and
        an entrepreneurial spirit to contribute to the society at large. ASIET
        has at present 8 UG (B. Tech) courses in Civil Engineering, Computer
        Science & Engineering, Computer Science & Engineering (Artificial
        Intelligence), Electronics & Biomedical Engineering, Electronics and
        Communication Engineering, Electrical and Electronics Engineering,
        Mechanical Engineering and Robotics & Automation. The Institute also
        offers 4 PG (M. Tech.) courses in Computer science, VLSI and Embedded
        Systems, Power Electronics & Power Systems, Communication Engineering
        and MBA programme. Seventeen batches of B. Tech students & fifteen
        batches of MBA Students have passed out from ASIET till date and the
        alumni of the institution occupy responsible positions in prestigious
        organizations in India and abroad. Being a premier institution with the
        reputation of a major skill training institute, ASIET is committed in
        pursuing the task of knowledge upgrading of the general public,
        promotion of the latest skill-education and creation of a conducive
        environment for entrepreneurship development in society. The task of
        grooming the nation’s builders and professionals in the field of
        technology is thus shouldered by Adi Shankara Institute of Engineering &
        Technology (ASIET).
      </p>
    </div>
    <div class="branding branding-brahma font-1">
      <div class="brand-main">
        <hr class="brand-main_line" />
        <p class="brand-main_tag">BRAHMA</p>
        <hr class="brand-main_line" />
      </div>
    </div>
    <div class="about-brahma card">
      <p class="font-3">
        Brahma is the much awaited national level annual three day
        techno-cultural fest of Adi Shankara Institute Of Engineering And
        Technology, Kalady. It is an amalgamation of technology, art and fun
        that invokes the creator within one every passing year since 2003 and
        with each vibrant edition of Brahma. This festival becomes the pride of
        every Asietian for us, it's not just a festival its a deeper emotion
        complete with a set of top-notch technical and non-technical workshops
        to sharpen your prowess, an arena of invigorating games and competitions
        that arouse your competency and a multitude of surprises including
        extremely electrifying pro-shows to enthrall you, lined up to blow. Your
        Minds
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 100px;
}
.about {
  display: flex;
}
.branding-brahma {
  margin-top: 40px;
}

.card {
  padding: 50px 20px 0px 20px;
  width: 80%;
  margin: auto;
  text-align: center;
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
    margin-top: -30px;
    font-size: 120px;
  }
  .brand-main .brand-main_tag {
    font-size: 64px;
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