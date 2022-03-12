<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      input_color: "",
    };
  },
  methods: {
    async created() {
      // POST request using fetch with async/await
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.email, password: this.password }),
      };

      //post data to api
      const response = await fetch(
        "http://localhost:3001/login",
        requestOptions
      );
      const data = await response.json();
      console.log("data: ", data);

      //check password and email matched or correct
      if (data.status == "true") {
        location.href = "./home";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(240,0,0,.8)";
      }
    },
  },
};
</script>
<template>
  <body>
        <div class="login-page">
            <div class="form">
                <div class="login">
                    <div class="login-header">
                        <h3>LOGIN</h3>
                        <p>Please enter your information.</p>
                    </div>
                </div>
                <div class="login-form">
                    <input type="text" 
                    name="email"
                    id="email"
                    v-model="email"
                    placeholder="username" />
                    <input type="password" 
                    name="password"
                    id="password"
                    v-model="password"
                    @keyup.enter="created()"
                    placeholder="password" />
                   <button type="submit" @click="created()">login</button>
                   <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
                    <p class="message">Not registered? <a href="/register">Sign Up</a></p>
                </div>
            </div>
        </div>
    </body>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
}

.form {
    position: relative;
    z-index: 1;
    background: #FFFFFF;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background-color: #328f8a;
    background-image: linear-gradient(45deg, #328f8a, #08ac4b);
    width: 100%;
    border: 0;
    padding: 15px;
    color: #0c0b0b;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}

.form .message {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
}

.form .message a {
    color: #4CAF50;
    text-decoration: none;
}

body {
    background-color: #328f8a;
    background-image: linear-gradient(45deg, #328f8a, #08ac4b);
    font-family: "Roboto", sans-serif;
    color:#0c0b0b ;
}
</style>
