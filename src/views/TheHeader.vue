<template>
  <div>
   <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io" >
      <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">

      !-->
      <h1 style="font-size:30px;">Student Rentals NYC</h1>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          NYU
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Columbia
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
         <a @click="chat" class="navbar-item">
        Chatroom
      </a>
    </div>



    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
   
          <button @click="signup"  style="background-color:black; color:white; margin:5px; padding:10px; border:0px solid white; border-radius:0.4">
              Sign up
          </button>
          
           <button @click="logging" style="background-color:black; color:white; margin:5px; padding:10px; border:0px solid white; border-radius:0.4">
             Log in 
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  methods:{
    logging(){
     this.$router.push('Login')
    },
    signup(){
     this.$router.push('Signup')
    },
     chat(){
     this.$router.push('chat')
    }
  }

}
</script>

<style scoped>
.btn{
  background-color: black;
  color:white;
}
.navbar{
  height:100px
}
.button{
  background-color: black;
  color:white;
}
.navbar-brand{
  color: red;
}
</style>
  