<template>
  <footer class="EngageNow">
    <div class="contain">
      <div class="footer__information">
        <h3 class="title">The time to engage is now.</h3>
        <p class="text footer__text">
          Did our demonstration provide you a better understanding about the true power beyong blockchain?
          Then let's build a competitve advantage today to stay aheaf of the competition tomorrow.
        </p>
      </div>
      <div class="send__email">
        <a class="email__button" href="mailto:hello@akitablock.io?subject=Machine%20Economy%20Use%20Case">WRITE AN EMAIL</a>
      </div>
      <div class="network__icons">
        <ul>
          <li>
            <a href="https://twitter.com/AkitaBlock" target="_blank" class="network__link twitter"></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nino-ulrich"
              target="_blank"
              class="network__link linkedIn"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/machineeconomy"
              target="_blank"
              class="network__link gitHub"
            ></a>
          </li>
          <li>
            <a href="https://www.iota.org" target="_blank" class="network__link iota"></a>
          </li>
        </ul>
      </div>
    </div>
    <span class="footer__background"></span>
    <div class="footer__bottom">AKITA Blockchain Solutions</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">

footer {
  position: relative;
}

.footer__background {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 155%;
  background: url("./../../../public/MachineChain.png") no-repeat;
  background-size: 1400px;
}

.footer__information {
  max-width: 850px;
}

.footer__information {
  margin: 20px 5px;
}

.input__background {
  display: inline-block;
  max-width: 600px;
  width: 100%;
  height: 75px;
  background-color: #f4f5f7;
  padding: 15px;
  margin-right: 30px;
}

.email__input {
  height: 50px;
  width: 100%;
  padding: 0px 15px;
  border: 1px solid #ebebef;
}

.email__button {
  width: 170px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background: linear-gradient(to top right, #5f46b1 0%, #ff2ea0 100%);
  color: #fff;
  font-size: 20px;
  margin: 30px 0px;
  position: relative;
  z-index: 2;
  padding: 10px;
  &:hover{
    color: #5f46b1;
    padding: 11px;
  }
}

.network__icons {
  margin: 50px 0px;
}

.network__icons ul {
  list-style: none;
  display: flex;
  padding: 0px;
}

.linkedIn {
  background: url("./../../../public/linkedin_logo.png");
}

.twitter {
  background: url("./../../../public/twitter_logo.png");
}

.gitHub {
  background: url("./../../../public/github_logo.png");
}

.iota {
  background: url("./../../../public/Iota_logo.png");
}

.network__link {
  display: block;
  height: 60px;
  width: 60px;
  margin: 0px 25px;
  background-size: 100%;
  background-repeat: no-repeat;
   &:hover {
    transform: scale(1.1)
  }
}

.footer__bottom {
  background: linear-gradient(to top left, #5f46b1 0%, #ff2ea0 100%);
  height: 70px;
  padding-top: 40px;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 2;
}

@media (max-width: 1750px) {
  .footer__background {
    height: 140%;
    background-size: 1200px;
  }
}

@media (max-width: 1500px) {
  .footer__background {
    height: 125%;
    background-size: 1000px;
  }
  .input__background {
    max-width: 500px;
  }
  .footer__information {
    max-width: 700px;
  }
}

@media (max-width: 1250px) {
  .footer__background {
    height: 115%;
    background-size: 800px;
  }
  .input__background {
    max-width: 400px;
  }
  .footer__information {
    max-width: 600px;
  }
}

@media (max-width: 1100px) {
  .footer__background {
    height: 90%;
    background-size: 600px;
  }
  .input__background {
    max-width: 330px;
  }
  .footer__information {
    max-width: 550px;
  }
}

@media (max-width: 1000px) {
  .footer__background {
    display: none;
  }
}

@media (max-width: 500px) {
  .network__link {
    width: 40px;
    height: 40px;
    margin: 0px 20px 0px 0px;
  }
}
</style>