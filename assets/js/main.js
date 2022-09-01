const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

menuBtn.addEventListener('click', () =>{
  menu.style.display = 'block';
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', () =>{
  menu.style.display = 'none';
  menuBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
})

const logoItem = document.querySelector('.logoItem')

logoItem.addEventListener('click', () =>{0
    navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
})


const navItems = menu.querySelectorAll('li');

const changeActiveItem = () =>{
  navItems.forEach(item =>{
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () =>{
    changeActiveItem();
    link.classList.add('active');
  })  
});


// function sendEmail(){
//   Email.send({
//     Host : "smtp.gmail.com",
//     Username : "rickigheri@gmail.com",
//     Password : "dekigheriNIA@04",
//     To : 'rickigheri@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "This is the subject",
//     Body : "And this is the body"
//   }).then(
//   message => alert(message)
//   );
// }



// ==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)