// Writing the JS code here
// let tl = gsap.timeline();
// tl.from('.loader', {
//     scale:0,
//     duration:1.5,
//     delay:0.1,
//     ease: "sine.inOut"

// })


// tl.from('.loader .logo',{
//     opacity:0,
//     delay:0.5
// })

// tl.from('.loader .logo img',{
//     opacity:0,
//     delay:0.2,
//     scale:0,
//     ease:"bounce.out"
// })

// tl.from('.loader .logo', {
//     opacity:0
// })

// tl.to('.loader', {
//     width:'40%',
//     left:'58%',
//     ease: "ease-out",
//     duration:0.5,
//     delay:0.4,

// })



// tl.from('.page1', {
//     opacity:0,

// });


// tl.from('nav .nav-logo img', {
//     opacity:0
// });

// tl.from('nav .nav-logo p', {
//     opacity:0,
//     x:-400,
//     ease:"ease-in"

// })

// tl.from('nav .nav-part2 button', {
//     opacity:0,
//     x:100,

// })

// tl.from('nav .nav-part2 p', {
//     opacity:0,
//     x:100
// })

// tl.from('footer', {
//     opacity:0
// })

// tl.from('section', {
//     opacity:0,
//     y:500,
//     delay:0.2,
//     duration:0.6,
//     ease:'sine.inOut'
// })


let inputs = document.querySelectorAll('.valid-input');
let login_btn = document.querySelector('#login');
let body = document.querySelector('body');

// Input fields should be filled, or an alert pops up
login_btn.addEventListener('click', () => {
    let inputFilled = true; 

    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            if (!input.checked) {
                inputFilled = false; 
            }
        } else {
            if (input.value === '') {
                inputFilled = false; 
            }
        }
    });

    if (!inputFilled) {
        alert('Kindly, fill all the required fields.');
    } else {
        document.body.style.opacity = 0;
        

    

    }
});

