

const button = document.querySelector("#button");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const cpassword = document.querySelector("#cpassword");
const name = document.querySelector("#name");
const form = document.querySelector("#form");
const cap = document.querySelector("#cap");
const nap = document.querySelector("#nap");
const zap = document.querySelector("#zap");
const video = document.querySelector("video");
const section = document.querySelector("section");
const gsap = document.querySelector(".gsap")
const mainDiv = document.querySelector("main-div");
const vam = document.querySelector(".vam");
const h = document.querySelector(" h1");
const view = document.querySelector(".eye");
let hasChecked = false;
const nvalue  = name.value;
//
form.addEventListener('submit' , (e)=>{
     e.preventDefault();






 //If
  //  section.style.backgroundColor = '#00694';
     if (name.value === '' || name.value == null) 
     {
          name.style.border ='2px red solid';
          cap.style.display = 'block';
          cap.innerHTML = "What's your name mate?";
           cap.style.color ='red';
           hasChecked = false;
     }

     else{
     name.style.border ='2px white solid';
     name.style.borderBottomColor = 'green'
     cap.innerHTML = 'Now Got Your Name xD';
     cap.style.color ='green';
    // cap.style.letterSpacing = '0'; 
     e.preventDefault();
     hasChecked = true;
     }

    //

               if( password.value === '' || password.value == null){
                    password.style.border ='2px red solid';
                    nap.style.display = 'block';
                    nap.innerHTML = 'Think you Forgot ur password';
                    hasChecked = false;
               } 
                         else{
               password.style.border ='2px white solid';
               password.style.borderBottomColor = 'green'
               nap.innerHTML = 'Yea Gotcha';
               nap.style.color ='green';
               hasChecked = true;
               e.preventDefault();

               }

// If

                    if(cpassword.value != password.value){
                    
                         
                         cpassword.style.border ='2px red solid';
                         zap.style.display = 'block';
                      hasChecked = false;


                    }
                    else if(cpassword.value === '' || cpassword.value == null){
                         
                         zap.innerText ='Please Confirm Your Password';
       hasChecked = false;

                    
                    }
                    else if(password.value ==='' & cpassword.value ==='' ){
                         
                    zap.innerText ='Please Confirm Your Password';
                   hasChecked = false;
                                        }    
                         else{
                              zap.style.display = 'none';
                              hasChecked = true;
                              e.preventDefault();
                         }




                         if (hasChecked){
                          gsap.innerText ='Completed';
                              setTimeout(() => {
                     section.style.display = 'none';
                        //h.textContent = 'vanakkam' +  '' + ${name.value};
                        mainDiv.style.display = 'none';
                      video.style.display ='none';
                      vam.style.display ='inline';
                      document.body.style.overflow = 'hidden';
                    }, 1000);

                    e.preventDefault();
                         }
                         
                         
                         
                         else{
                              
                              gsap.innerText = "there's some problem with the value that you've given lol";
                         
                         }

             


     e.preventDefault();
  
    
    });










// If\
               section.addEventListener('mousemove' , ()=>{

               section.style.backgroundColor = '#fff'
               section.style.transition = '0.5s ease-in 1s';


               });
    // Gsap 

