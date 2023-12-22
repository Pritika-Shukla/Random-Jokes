const url="https://icanhazdadjoke.com/";
let btn=document.querySelector("button");
let p=document.querySelector("#result");
btn.addEventListener("click",async()=>{
let joke=await getJokes();
p.innerText=joke;
})

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"} };
        let res=await axios.get(url ,config);
         return res.data.joke;
    }
  catch(err){
    console.log("Error",err)
    return "Couldn't load Jokes"
  }

}