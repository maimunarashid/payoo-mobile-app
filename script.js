// Login button functionality
// step-1
// document.getElementById('loginButton').addEventListener('click',function(e){
// e.preventDefault()
// console.log('login button clicked');
// console.log(e)
// })

// step-02
// document.getElementById('loginButton').addEventListener('click',function(e){
// e.preventDefault()
// const mobileNumber = 12345678910
// const pinNumber = 1234
// const mobileNumberValue = document.getElementById("mobile-number").value
// const mobileNumberValueConverted = parseInt(mobileNumberValue)
// const pinNumberValue = document.getElementById("pin-number").value
// const pinNumberValueConverted = parseInt(pinNumberValue)
// console.log(mobileNumberValueConverted, pinNumberValueConverted)
// if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
// console.log("Logged in!!")
// }
// else{
//     console.log("Failed to login!!")
// }
// })

// step-3
// document.getElementById('loginButton').addEventListener('click',function(e){
// e.preventDefault()
// const mobileNumber = 12345678910
// const pinNumber = 1234
// const mobileNumberValue = document.getElementById("mobile-number").value
// const mobileNumberValueConverted = parseInt(mobileNumberValue)
// const pinNumberValue = document.getElementById("pin-number").value
// const pinNumberValueConverted = parseInt(pinNumberValue)
// console.log(mobileNumberValueConverted, pinNumberValueConverted)
// if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
// // console.log("Logged in!!")
// window.location.href="./main.html"
// }
// else{
//     // console.log("Failed to login!!")
//     alert("Failed to login!!")
// }
// })

document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const mobileNumberValue = document.getElementById('mobile-number').value ;
    const mobileNumberValueConverted = parseInt(mobileNumberValue) ;
    
    const pinNumber = 1234;
    const pinNumberValue = document.getElementById('pin-number').value ;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./main.html";
    }
    else{
        alert("Failed to Login!! Try Again");
    }
})
