const okButton =document.querySelector('div>button')
console.log(okButton)


// const whom = prompt("What is your name?, typing your name")
// const confirmYourName = confirm(`Your are ${whom}`)
// confirmYourName?alert(`Hello, ${whom}`): alert("hello, Guest")


//annonymous handler function with bubble event flow (default)
okButton.addEventListener('click',(e) =>{
    console.log(`event.target: ${e.target}`)
    console.log(`event.currentTarget: ${e.currentTarget}`)
    console.log(`event.eventPhrase: ${e.eventPhase}`)
    console.log(`event.type: ${e.type}`)
    console.log("Button was clicked!")
},true)

//named function with bubble event flow (default)
function getTarget(event){
    return `${event.target.nodeName} was fired!`
}

// function getMessage(){
//    const yourMessage = prompt("What is your message, typing your message...")
//    alert(yourMessage)
// }

//add more than one handler functions
okButton.addEventListener('click', getTarget)
//okButton.addEventListener('click', getMessage)

//remove handler function
okButton.removeEventListener("click", getTarget)

const divElement = document.querySelector("div")
divElement.addEventListener('click', () =>{
    alert("Div element was clicked")
},true)
// const bodyElement = document.body
// bodyElement.addEventListener("click", () =>{
//     alert("Body element was clicked!")
// })

const aElement = document.querySelector("a")
aElement.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("visit link was canceled")
})

const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)
submitButton.addEventListener("click", (a) => {
    a.preventDefault()
    const inputElements = document.querySelector("input")
    inputElements.forEach((ele) => {
        const  attr = ele.getAttribute("type") 
        if (attr === 'text') {
            if(ele.value.trim().length === 0) 
                console.log("invalid data")
       
    }
        
    });
})

// const info = document.getElementById('info')
//  // Window resize event
// window.addEventListener('resize', () => {
//   info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
// })
//  // Window scroll event
// window.addEventListener('scroll', () => {
//   info.textContent = `Scrolled to Y: ${window.scrollY}`
// })
 
// const inf = document.getElementById('info')

// inf.addEventListener('mouseout', (event) => {
//   console.log('mouse out')
// })
//  inf.addEventListener('mouseover', (event) => {
//   console.log('mouse over')
// })

// window.addEventListener('mousemove', (event) => {
//   inf.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
// }) 
 

const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)
})
 
const message = document.querySelector("#message")
const display = document.querySelector('p')
message.addEventListener('input' , function(){
    display.textContent = message.value
})



//self-pratices
// When the Create Account button is clicked, use JavaScript to 
// prevent the page from refreshing and validate the form. All fields(username,email,password,confirm password)
// must be filled. Show an error in red if any field is empty or if the passwords don't match. If all checks pass,
// display a green success message confirming account creation.

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let message = document.querySelector("p");
    let isValid = true;

    if (!username || !email || !password || !confirmPassword) {
        message.textContent = "All fields must be filled out, please try again!";
        message.style.color = "red";
        isValid = false;
    } 

    else if (password !== confirmPassword) {
        message.textContent = "Password and confirm password do not match, please check again!";
        message.style.color = "red";
        isValid = false;
    } 
    
    if (isValid) {
        message.textContent = "Account created successfully!";
        message.style.color = "green";
    }
});