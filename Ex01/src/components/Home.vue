<template>
    <div class="container_home" id="home">
            <div class="txt">
                <h3>Welcome to Home Page</h3>
               <p>Nice to see you here!</p>
            </div>
           <a href="/"><button type="submit" id="btn_logout">Logout</button></a>
        </div>
</template>
<style>
header {
    display: none;
}
.container_home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -20rem 0 0 5rem;
    
}
.container_home .txt {
    padding: 1px 0;
}
.container_home .txt h3,
 p {
    padding: 6px 0;
 }
        
.container_home button {
    background-color: #04AA6D;
    color: white;
    padding: 6px 10px;
    margin: 6px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
        
.container_home button:hover {
     opacity: 0.8;
}
</style>