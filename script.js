const form=document.getElementById('form');
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')

function showerror(ele,mes){
    const formcontrol=ele.parentElement;
    formcontrol.className="form-control error"
    const small=formcontrol.querySelector("small")
    small.innerText=mes

}
function showsuccess(ele){
    const formcontrol=ele.parentElement;
    formcontrol.className="form-control success"
}
function checkemail(){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    return true
  } else {
    return false
  }
}
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value===''){
        showerror(username,"Enter username")
    }
    else{
        showsuccess(username)
    }
    if(email.value===''){
        showerror(email,"Enter email")
    }
    else if(!checkemail()){
        showerror(email,"Enter correct email id")
    }
    else{
        showsuccess(email)
    }
    if(password.value===''){
        showerror(password,"Enter password")
    }
    else{
        showsuccess(password)
    }
    if(password2.value===''){
        showerror(password2,"Enter password")
    }
    else{
        showsuccess(password2)
    }
    if(password.value.length<6){
        showerror(password,"Password must be of 6 characters")
    }
    if(password.value!==password2.value){
        showerror(password2,"Password doesnt match")
    }
})