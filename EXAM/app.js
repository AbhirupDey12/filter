// Selectors

const form = document.querySelector('#form');
const section = document.querySelector('.items');
const formSubmit = document.querySelector('.form-submit');
const imageURL = document.querySelector('#image');
const arr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

formSubmit.addEventListener('click', (e) => {
    console.log(imageURL.value);
    // console.log(e.target.previousElementSibling.value);
    // console.log(e.target.previousElementSibling.previousElementSibling.previousElementSibling.value);
    if (e.target.previousElementSibling.value == 'headphone') {
        const newItem = document.createElement('div');
        newItem.setAttribute('class', 'item');
        newItem.classList.add('headphone');
        const newHTML = `
            <img src="${imageURL.value}" alt="">
            <button id="btn" class="hello">Delete</button>
        `;
        newItem.innerHTML = newHTML;
        section.append(newItem);
        arr.push(newItem);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    } else if (e.target.previousElementSibling.value == 'mobile') {
        const newItem = document.createElement('div');
        newItem.setAttribute('class', 'item');
        newItem.classList.add('mobile');
        const newHTML = `
            <img src="${imageURL.value}" alt="">
            <button id="btn" class="hello">Delete</button>
        `;
        newItem.innerHTML = newHTML;
        section.append(newItem);
        arr.push(newItem);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    } else if (e.target.previousElementSibling.value == 'laptop') {
        const newItem = document.createElement('div');
        newItem.setAttribute('class', 'item');
        newItem.classList.add('laptop');
        const newHTML = `
            <img src="${imageURL.value}" alt="">
            <button id="btn" class="hello">Delete</button>
        `;
        newItem.innerHTML = newHTML;
        section.append(newItem);
        arr.push(newItem);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    }
});

section.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.parentElement;
    // console.log(parent);
    parent.remove();
});

const section2 = document.querySelector('.buttons');
let child = section.childNodes;
console.log(child);

// section2.addEventListener('click', (e) => {
//     console.log(e.target);
//     console.log(child);
//     if (e.target.classList.contains('all')) {
//         child.forEach((element) => {
//             element.style.display = 'flex';
//         })
//         // console.log("all")
//     }
//     if (e.target.classList.contains('headphone')) {
//         // child.forEach((element) => {
//         //     if(element.classList.contains('headphone')) {
//         //         element.style.display = 'flex' ;
//         //     } else {
//         //         element.style.display = 'none' ;
//         //     }
//         // })
//         for (let val of child) {
//             if (element.classList.contains('headphone')) {
//                 if (val.classList.contains('headphone')) {
//                     val.style.display = 'flex';
//                 } else {
//                     val.style.display = 'none';
//                 }
//             }

//         }
//         if (e.target.classList.contains('laptop')) {
//             child.forEach((element) => {
//                 if (element.classList.contains('laptop')) {
//                     element.style.display = 'flex';
//                 } else {
//                     element.style.display = 'none';
//                 }
//             })
//         }
//         if (e.target.classList.contains('mobile')) {
//             child.forEach((element) => {
//                 if (element.classList.contains('mobile')) {
//                     element.style.display = 'flex';
//                 } else {
//                     element.style.display = 'none';
//                 }
//             })
//         }
//     });


// console.log(child);







