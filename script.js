/* Write the code to access element which is having id as "text" */
let question1=document.getElementById('text');
console.log(question1);


/* Write the code to access element which is having tag as "h1" */
let question2=document.getElementsByTagName('h1');
console.log(question2[0]);

/* Write the code to access element which is having class as "box" */
let question3=document.getElementsByClassName('h2');
console.log(question3[0]);

/* <h1>"<h1>Hello </h1>

         Change the heading from ""Hello"" to ""Hello World"" using DOM functions"  </h1> */
let question4=document.querySelector('.hello')
question4.innerHTML="Hello World";


/* Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy */
document.querySelector('.btn').addEventListener('click',function(){
   let replaceword=document.querySelector('.replace')
   replaceword.innerHTML="Welcome to Elevation academy"
})

/*  <h1>"<h1>Hello </h1>

        Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"</h1> */

document.querySelector('.btn1').addEventListener('click',function(){
    let replaceword=document.querySelector('.replace1')
    replaceword.setAttribute('style','color:red');
 })


 /*Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.*/
 document.querySelector('.direction').addEventListener('click',function(){
    let flex=document.querySelector('.flex')
    flex.setAttribute('style','flex-direction:column')
 })

/*Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.*/
function clock() { 
    let Time = new Date();
    let hours=Time.getHours()
    let minutes=Time.getMinutes()
    let second=Time.getSeconds()
    let printtime=`${hours}:${minutes}:${second}`
    let timestore= document.querySelector('.demo');
    timestore.textContent=printtime;
}
setInterval(() => {
    clock();
}, 1000);
