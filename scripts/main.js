// console.log("ABC") ; 


let showData = async(input)=>{
    // let input = document.getElementById("search").value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}` ; 

// console.log(input)
    let res = await fetch(url) ; 
    let data = await res.json() ; 
    // console.log(data) ; 
    return data ; 
    // console.log(data)
    
}

async function showData2(){
    let url = `https://www.themealdb.com/api/json/v1/1/random.php` ;
    // console.log(url) ; 
    try{
        let res = await fetch(url) ; 
        let data = await res.json() ;
        return data ; 
        // return data ; 
    }catch(err){
        console.log(err) ; 
    }
    


}
// export default showData2 ;

// getData()
// let user = JSON.parse(localStorage.getItem("user")) ; 
// console.log(user)
// function showName(){
//     document.getElementById("login").innerHTML = null
//     if(user){
//         document.getElementById("login").innerText = `<a href="./index.html">${user.name}</a>`
//     }
// }
// showName()


export {showData,showData2} ; 
