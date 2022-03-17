<template>
  <v-app>
    <v-main
      class="main"
    >
      <!-- found here: https://github.com/tsparticles/404-templates/tree/main/space -->
      <div id="tsparticles"></div>

      <div 
        class="wrapper rounded"
      >
        <a href="https://www.flaticon.com/free-icons/storm" title="storm icons">
          <img class="avatar" src="./assets/lightning.png" />
        </a>
        <h1>404</h1>
        <h3>Apparently a thunderstorm interrupts the finding of the requested page. Or maybe the page just doesn't exist, come back later!</h3>
    </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { tsParticles, IOptions } from "tsparticles"

export default Vue.extend({
  name: 'App',

  data: () => ({
    particles: null,
    particlesOptions: {
        fpsLimit: 60,
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 1,
            random: {
              enable: true,
              minimumValue: 0.1
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: {
              enable: true,
              minimumValue: 1
            }
          },
          move: {
            enable: true,
            speed: 0.17,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true
          }
        },
        detectRetina: true
    } as IOptions 
  }),

  created: function () {
    tsParticles.load("tsparticles", this.particlesOptions);
  }

});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis:300,400,700,800");

.main {
  background: #1E262C;
}

.particle-error,
.main,
#tsparticles {
    width: 100%;
    height: 100%;
    margin: 0px !important;
}

#tsparticles {
    position: fixed !important;
    opacity: 0.23;
}

.description {
  max-width: 400px;
}

.wrapper {
  background: #475A69;
  max-width: 390px;
  width: 100%;
  height: 400px;
  display: block;
  margin: 0 auto;
  position: relative;
  margin-top: 25vh;
}

.wrapper h1 {
  text-align: center;
  color: #fff;
  font-family: "Dosis", sans-serif;
  font-size: 100px;
  margin-top: 25px;
  font-weight: 800;
}

.wrapper h3 {
  text-align: center;
  color: #fff;
  font-size: 19px;
  line-height: 23px;
  max-width: 330px;
  margin: 0px auto 30px auto;
  font-family: "Dosis", sans-serif;
  font-weight: 400;
}

.wrapper .stars {
  animation: sparkle 1.6s infinite ease-in-out alternate;
}

.avatar{
  height: 100px;
  display: block;
  margin: 0 auto;
  position: relative;
  top: 25px
}

@media (max-width: 600px) {
    .wrapper {
        width: 300px; 
    }
    .wrapper h1 {
        font-size: 75px;
    }
    .wrapper h3 {
        font-size: 16px;
        width: 200px;
        margin: 0 auto;
        line-height: 23px;
    }
    .wrapper h3 span {
        width: 60px;
    }
}

</style>
