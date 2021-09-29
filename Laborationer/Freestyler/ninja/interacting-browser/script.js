// const para = document.querySelector('body > div:nth-child(2) > p.error');

// console.log(para);


// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// // paras.forEach(para => {
// //     console.log(para);
// // })

// // console.log(paras[2]);
// console.log(errors);



// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[0]);


// const para = document.querySelector('p');

// // console.log(para.innerText);

// // para.innerText += ' ninjas are awesome!';
// // para.innerText = 'ninjas are awesome!';


// const paras = document.querySelectorAll('p');

// // paras.forEach(para => {
// //     console.log(para.innerText);
// //     para.innerText += ' new text';
// // });

// const content = document.querySelector('.content');

// // console.log(content.innerHTML);

// // content.innerHTML += ' <h2>This is a new h2 <h2>';


// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}<p>`
// });



// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'http://www.thenetninja.uk');

// link.innerText = 'The netninja website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));

// mssg.setAttribute('class', 'success')


// mssg.setAttribute('style', 'color: green');

// const title = document.querySelector('h1');

// // title.setAttribute('style', 'margin: 50px;');


// console.log(title.style);
// console.log(title.style.color);

// title.style.margin = '50px';
// title.style.color = 'crimson';

// title.style.fontSize = '60px';
// title.style.margin = '';


// const content = document.querySelector('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');

// content.classList.add('success');



// const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//    if(p.textContent.includes('error')) {
//        p.classList.add('error');
//    }
//    if(p.innerText.includes('success')){
//        p.classList.add('success');
//    }
// });

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


// const article = document.querySelector('article');



// console.log(article.children);

// console.log(Array.from(article.children));

// console.log(article.children);

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
// });


// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);


// console.log(title.nextElementSibling.parentElement.children);



// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

// const ul = document.querySelector('ul');
// // ul.remove();

// const button = document.querySelector('button');

// button.addEventListener('click', () => {
// // ul.innerHTML += '<li>something new</li>'
//     const li = document.createElement('li');
//     li.textContent = 'something new to do';
//     // ul.append(li);
//     ul.prepend(li);
// });

// // const items = document.querySelectorAll('li');

// // items.forEach(item => {
// //     item.addEventListener('click', e => {
// //        // console.log('item clicked');
// //     //    console.log(e);
// //     //    console.log(e.target);
// //     //    console.log(item);
// //     // e.target.style.textDecoration = 'line-through';
// //     console.log('event in LI');

// //     e.stopPropagation(); // prevent bubbling eventlistners
// //     e.target.remove();
// //     });
// // });

// ul.addEventListener('click', e => {
//     // console.log('event in UL');
//   if(e.target.tagName === 'LI') {
//       e.target.remove();
//   }
// });


// const copy = document.querySelector('.copy-me');

// copy.addEventListener('copy', () => {
//     console.log('OI!');
// });

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//   //  console.log(e);
//   //console.log(e.offsetX, e.offsetY);
//   box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });



// const button = document.querySelector('button');
// const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close')

// button.addEventListener('click', () => {
// popup.style.display = 'block';
// });

// close.addEventListener('click', () => {
// popup.style.display = 'none';
// });

// popup.addEventListener('click', () => {
// popup.style.display = 'none';
// });




const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-z]{6,12}$/;
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    // console.log(username.value);
    // console.log(form.username.value);

    const username = form.username.value;
    

    if(usernamePattern.test(username)){

        feedback.textContent = 'that username is valid!';
    }else  {
        feedback.textContent = 'username must contain letter only between 6-12 characters long'
    };

});


form.username.addEventListener('keyup', e => {
    console.log(e);
    // console.log(e.target.value, form.username.value);
    if(usernamePattern.test(e.target.value)) {
        // console.log('passed');
        form.username.setAttribute('class', 'success')
    } else {
        // console.log('failed');
        form.username.setAttribute('class', 'error')
    }
});




// const username = 'ddsdddddd';
// const pattern = /^[a-z]{6,}$/s;

// let result = pattern.test(username);

// if(result) {
//     console.log('regex test passed');
// } else {
//     console.log('regex did not pass ')
// }

// let result = username.search(pattern);
// console.log(result);