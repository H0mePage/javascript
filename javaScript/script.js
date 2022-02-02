let HelloWorldBtn = document.querySelector('button');

HelloWorldBtn.addEventListener('click',showAlertMsg);
HelloWorldBtn.addEventListener('click',promptMsgAndDisplay);


function showAlertMsg(){

    alert('Hello World Alert')

}
function promptMsgAndDisplay(){
    let name = prompt('Enter Your Name To Display On Screen ');
    HelloWorldBtn.textContent = 'Again Display :' + name;
}
