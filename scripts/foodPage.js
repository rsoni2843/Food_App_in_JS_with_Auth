let data = JSON.parse(localStorage.getItem("food"))||[] ; 
let cont = document.getElementById("containers") ; 
console.log(data)
function showData(){
    // console.log(data.strMeal)
    
    cont.innerHTML = null ; 
    let div = document.createElement("div") ; 
    let foodType = document.createElement("h3") ; 
    foodType.innerText = data.strArea ; 
    let foodImg = document.createElement("img") ;
    foodImg.src = data.strMealThumb ; 
    let foodName = document.createElement("h2") ; 
    foodName.innerText = data.strMeal ; 
    
    // console.log(a)
    div.append(foodImg,foodType,foodName)
    cont.append(div) ; 

}
showData() ; 