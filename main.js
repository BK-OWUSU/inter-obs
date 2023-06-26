/* let sectionOne = document.querySelector('.section1');
let sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        entry.target.classList.toggle('changeBack');
    })
},{
    //Options Oject
    root: null, //viewport or windows screen
    threshold: 0, //from 0 - 1 {10% -100%}
    rootMargin: "-200px",
});

sections.forEach((section)=>{
    observer.observe(section);
}); */


let header = document.querySelector('.header');
let navbar = document.querySelector('nav');

const headerObserver =  new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        if(!entry.isIntersecting) {
            console.log(entry.target)
            navbar.classList.add('navBack')
        } else {
            navbar.classList.remove('navBack')
        }
    });
},  
{
    rootMargin: "-11% 0% 0% 0%",
});

headerObserver.observe(header);

//Fade-In transitions

let faders = document.querySelectorAll('.fade-in');


const aboutContent = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.intersectionRatio) {
            entry.target.classList.remove('appear');
        }else {
            entry.target.classList.add('appear');
        }
    });
}, 
{
    threshold: 0,
    rootMargin:'0px 0px -195px 0px',
});

faders.forEach((fader)=>{
    aboutContent.observe(fader);
})
//Slide Ins
let slideIns = document.querySelectorAll('.end_development');
let slideObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(!entry.isIntersecting) {
            entry.target.classList.remove('appear'); 
        }else {
           entry.target.classList.add('appear'); 
        }
    });
},
{
    rootMargin:'0% 0% -8% 0%',
});

slideIns.forEach((slideIn)=>{
    slideObserver.observe(slideIn)
});

//End

//LOGIN IN SECTION
const formsWrapper = document.querySelector('.forms-wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


 registerLink.addEventListener("click", ()=> {
    formsWrapper.classList.add('form_active');
 });

 loginLink.addEventListener("click", ()=> {
    formsWrapper.classList.remove('form_active');
 }); 

 //
 const closeBtn = document.querySelector('.close-icon');
 const loginBtn = document.querySelector('.login_Btn');
 const login_Btn_icon = document.querySelector('.login_Btn_icon');
 
 login_Btn_icon.addEventListener('click', ()=> {
    formsWrapper.classList.add('sign-pop');
 });

 loginBtn.addEventListener('click', ()=> {
    formsWrapper.classList.add('sign-pop');
 });

 closeBtn.addEventListener('click', ()=> {
    formsWrapper.classList.remove('sign-pop');
 });

//Changing Nav-bar background
 const small_menu_back = document.querySelectorAll('.small_menu i');
 small_menu_back.forEach((link)=>{
        link.addEventListener('click', ()=>{
        small_menu_back.forEach((entry)=>{
                entry.classList.remove('activeLink');
             })
            link.classList.add('activeLink');
        });
 });




 

 
