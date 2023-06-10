const btnNumbs = document.getElementsByClassName("btn-number")
const btnAcs = document.getElementsByClassName("action--operator")
const getRes = document.getElementById("result")
const btnAc = document.getElementById("clear")
const btnEqual = document.getElementById("equal")


for(let i = 0; i < btnNumbs.length; i++){
    btnNumbs[i].addEventListener("click", (event) =>{
        console.log(event.target.innerText)
        getRes.innerText += event.target.innerText
        console.log(getRes.innerText)
    })
}

for(let i = 0; i < btnAcs.length; i++){
    btnAcs[i].addEventListener("click", (event) =>{
        console.log(event.target.innerText)
        getRes.innerText += event.target.innerText
        console.log(getRes.innerText)
    })
}
btnEqual.addEventListener("click", () => {
        getRes.innerText = eval(getRes.innerText);

})

btnAc.addEventListener("click", () => {
    getRes.innerText = "";
})