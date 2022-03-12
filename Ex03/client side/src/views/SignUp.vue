<script>
export default {
  data() {
    return {
      email: "",
      username: "",
      firstname: "",
      lastname: "",
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
        body: JSON.stringify({
          email: this.email,
          username: this.username,
          firstname: this.firstname,
          lastname: this.lastname,
          password: this.password,
        }),
      };
      const response = await fetch(
        "http://localhost:3001/register",
        requestOptions
      );

      // for return 
      const data = await response.json();
      console.log("data: ", data);

      //check if user is not existed
      if (data.status == "true") {
        this.msg = data.message;
        this.input_color = "rgba(106,168,79,.8)";

        //clear input value
        this.email = "";
        this.username = "";
        this.lastname = "";
        this.firstname = "";
        this.password = "";
      } else {
        this.msg = data.message;
        this.input_color = "rgba(204,0,0,.8)";
      }
    },
  }
};
</script>


<template>
  <div class="wrapper">
        <div v-text="msg" v-bind:style="{ backgroundColor: input_color }"></div>
        <h2>Signup</h2>
        <form >
           <div class="input-box">
                <input type="email" 
                id="email"
                v-model="email"
                placeholder="E-mail" 
                required />
            </div>
            <div class="input-box">
                <input type="text" 
                id="username"
                v-model="username"
                placeholder="username"
                 required />
            </div>
            <div class="input-box">
                <input type="text" 
                name="firstname"   
                placeholder="First-name"  
                id="firstname"
                v-model="firstname"
                required /> 
            </div>
             <div class="input-box">
                <input type="text" 
                name="firstname"   
                placeholder="Last-name" 
                id="Lasttname" 
                v-model="lastname"
                required /> 
            </div>
            <div class="input-box">
                <input type="password" 
                placeholder="Password "
                name="password"
                v-model="password"
                id="pass"  />
                <span id="message" style="color: red"></span>
            </div>

            <div class="policy">
                <input type="checkbox" required />
                <h3>I accept all terms & condition</h3>
            </div>
            <div class="input-box button">
                <input type="Submit" @click="created()" value="Signup" />
            </div>
            <hr />

            <div class="text">
                <h3>Already have an account? <a href="/">Login now</a></h3>
            </div>
        </form>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.wrapper{
  margin: 10px auto;
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  padding: 34px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.wrapper h2{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #333;
}
.wrapper h2::before{
  content: '';
  position: absolute;
  
  bottom: -0.5rem;
  height: 3px;
  width: 70px;
  border-radius: 12px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
}
.wrapper form{
  margin-top: 30px;
}
.wrapper form .input-box{
  height: 52px;
  margin: 18px 0;
}
form .input-box input{
  height: 100%;
  width: 100%;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-weight: 400;
  color: #333;
  border: 1.5px solid #C7BEBE;
  border-bottom-width: 2.5px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.input-box input:focus,
.input-box input:valid{
  border-color: #4070f4;
  
}
form .policy{
  display: flex;
  align-items: center;
  margin-top: 50px;
}
form h3{
  color: #707070;
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
}
.input-box.button input{
  color: #fff;
  letter-spacing: 1px;
  border: none;
  background: #4070f4;
  cursor: pointer;
}
.input-box.button input:hover{
  background: #0e4bf1;
}
form .text h3{
 color: #333;
 width: 100%;
 text-align: center;
 margin-top: 20px;
}
form .text h3 a{
  color: #4070f4;
  text-decoration: none;
}
form .text h3 a:hover{
  text-decoration: underline;
}
</style>