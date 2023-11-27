//1.Session Task
//create a button + index.html refer
// const trial1 =document.createElement("button")
// trial1.setAttribute("type","Button")
// trial1.classList.add("btn", "btn-danger")
// trial1.innerText="Select this"    //button is created no add event lisener to that button
// trial1.addEventListener("dblclick", ()=>{
// document.body.style.backgroundColor ="green"
// alert("Good Morning!!")
// })   //on clicking 2 fns occurs
// document.body.append(trial1)

// 2. Mini task:
//task link: https://github.com/rvsp/HTML-CSS/blob/master/Mini-tasks/003-JS-DOM.md
//using get element method have created a div in html.

// const trial2= document.createElement("div")
// trial2.innerText="Hi this is div"
// trial2.addEventListener("mouseover" ,()=>trial2.style.backgroundColor="Blue")
// trial2.addEventListener("mouseout",()=>trial2.style.backgroundColor="gray")
// document.body.append(trial2)

// 3.
// const trial2= document.createElement("div")
// trial2.innerText="Hi this is div"
// trial2.addEventListener("click" ,()=>trial2.style.backgroundColor="Blue")
// trial2.addEventListener("dblclick",()=>trial2.style.backgroundColor="gray")
// document.body.append(trial2)

//4.(A form with button option is created in html)
// function fn()
// {
//     const res= document.getElementById("email").value
//     console.log(res);
//     if(res=="test@gmail.com")
//     {
//         console.log("valid user")
//     }
//     else
//     {
//         console.log("invalid user");
//     }
// }

//5. Write a DOM function for the following:
/* <label for="email">Email</label>
<input type="email" id="email" placeholder="Enter your email">
<button type="submit" onclick="fn()">Submit</button>
function fn()
{ */
//     const res= document.getElementById("email").value
//     console.log(res);
//     if(res=="test@gmail.com")
//     {
//         console.log("valid user")
//     }
//     else
//     {
//         console.log("invalid user");
//     }
// }
//Answer:

//Create elements:
// const label=document.createElement("Label")
// const input=document.createElement("Input")
// const button=document.createElement("button")
// //Set Attribute
// label.setAttribute("for", "email")
// input.setAttribute("type", "email")
// input.setAttribute("id","email")
// input.setAttribute("placeholder","Enter your email")
// button.setAttribute("type","submit")
// //innerHTML
// label.innerText="Email";
// button.innerText="submit";

// document.body.append(label, input, button)
// button.addEventListener("click",fn)
// function fn()
// {
//     const res= document.getElementById("email").value
//     console.log(res);
//     if(res=="test@gmail.com")
//     {
//         console.log("valid user")
//     }
//     else
//     {
//         console.log("invalid user");
//     }
// }

// !Use a prompt to read a value from user and display it in span element.
// ?practice task:

// const span = document.createElement("span");
// const pro = prompt("Enter ur age");
// span.innerText = pro;
// document.body.append(span); //the prompt will appear in  a dialog box in the screen  and the value will get displayed in tht screen


//Now we need to click a button so  that the dialog box will appear in the screen
// const button = document.createElement("buttton")
// button.innerText="Click here"
// button.className="btn"
// document.body.append(button)
// button.addEventListener("click", fn);
// function fn(){
//     prompt("Enter a value");
// }


//to read a value from user and display it in span (combine above 2 steps)
const button =document.createElement("button")
const span = document.createElement("span")

button.innerText="Click here"
button.classname="btn"
document.body.append(span, button)
button.addEventListener("click",fn)
function fn()
{
    const pro = prompt("Enter a value");
    
    span.innerText=pro;

}