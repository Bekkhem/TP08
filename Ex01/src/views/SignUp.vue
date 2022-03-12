<template>
  <div class="wrapper">
        <img src="@/assets/logo.svg" alt="userLogo" width="70%" style="margin-left: 9rem; border-radius: 50%; margin-top: -70px;" />
        <h2>Signup</h2>
        <form action="/signup.html" onsubmit="return verifyPassword()">
            <div class="input-box">
                <input type="text" placeholder="Full Name" required />
            </div>
            <div class="input-box">
                <input type="email" placeholder="E-mail" required />
            </div>
            <div class="input-box">
                <input type="tel" name="mobile" title="mobile number should contain 10 numbers only without country code" pattern="[1-9]{1}[0-9]{9}"  placeholder="Mobile Number"  id="mobile" required /> 
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password (8 characters minimum)" minlength="8" id="pass"  />
                <span id="message" style="color: red"></span>
            </div>

            <div class="policy">
                <input type="checkbox" required />
                <h3>I accept all terms & condition</h3>
            </div>
            <div class="input-box button">
                <input type="Submit" value="Signup" />
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