<template>
    <footer>
      <div class="contain">
        <div class="footer__information"> 
          <h3>The time to build is now.</h3>
          <p>Did our demonstration provide you a better understanding about the true power of blockchain? 
            Then let's build a competitve advantage today to stay aheaf of the competition tomorrow.</p>
        </div>
        <div class="send__email">
          <span class="input__background">
            <input class="email__input" type="email" placeholder="E-Mail">
          </span>
          <button class="email__button">Send E-Mail</button>
        </div>
        <div class="network__icons">
          <ul>
            <li><a href="#" class="network__link"><span class="network__icon">img</span></a></li>
            <li><a href="#" class="network__link"><span class="network__icon">img</span></a></li>
            <li><a href="#" class="network__link"><span class="network__icon">img</span></a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">AKITA Blockchain Solutions</div>
    </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {
    
  }
};
</script>

<style>
  footer {
    margin-top: 200px;
  }

  .footer__information {
    max-width: 700px;
  }

  .footer__information h3 {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 52px;
  }

  .footer__information p {
    font-size: 18px;
    line-height: 1.2;
    margin: 20px 5px;
  }

  .input__background {
    display: inline-block;
    max-width: 380px;
    width: 100%;
    height: 75px;
    background-color: #F4F5F7;
    padding: 15px;
    margin-right: 30px;
  }

  .email__input {
    height: 50px;
    width: 100%;
    padding: 0px 15px;
    border: 1px solid #EBEBEF;
  }

  .email__button {
    width: 170px;
    height: 50px;
    border-radius: 5px;
    border: none;
    background: linear-gradient(to top right, #5F46B1 0%, #FF2EA0 100%);
    color: #fff;
    font-size: 22px;
    margin: 30px 0px;
  }

  .network__icons {
    margin: 50px 0px;
  }

  .network__icons ul {
    list-style: none;
    display: flex;
    padding: 0px;
  }

  .network__link {
    display: block;
    height: 60px;
    width: 60px;
    margin: 0px 25px;
    background-color: #333;
  }

  .footer__bottom {
    background: linear-gradient(to top left, #5F46B1 0%, #FF2EA0 100%);
    height: 70px;
    padding-top: 40px;
    text-align: center;
    color: #fff;
  }

  @media (max-width: 500px) {
    .network__link {
      margin: 0px 20px 0px 0px;
    }
  }
</style>