let user = JSON.parse(localStorage.getItem("user")) ; 

function navbar(){
    return ` <h3><a href="index.html">Home</a></h3>
    <div id="bar">
        <input type="text" placeholder="Enter Recipe Name" id="search"><br>
    </div>
        
    <div style="display:flex" class="randoms">
        <h3><a href="random.html">Show Random Recipe</a></h3>
        <h3 id="login"><a  href="./login.html">Login</a></h3>
        <h3 id="signup"><a href="./signup.html">SignUp</a></h3>
    </div>  `
    
   
}

export default navbar ; 



