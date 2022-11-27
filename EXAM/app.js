// Selectors

const form = document.querySelector('#form');
const section = document.querySelector('.items');
const formSubmit = document.querySelector('.form-submit');
const imageURL = document.querySelector('#image');
const btnSection = document.querySelector('.buttons');
let child = section.children;

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

formSubmit.addEventListener('click', (e) => {

    console.log(imageURL.value);

    // console.log(e.target.previousElementSibling.value);
    // console.log(e.target.previousElementSibling.previousElementSibling.previousElementSibling.value);
    if(imageURL.value == '') {
        return ;
    }

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
        console.log(child);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    } 

    else if (e.target.previousElementSibling.value == 'mobile') {
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
        console.log(child);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    } 
    else if (e.target.previousElementSibling.value == 'laptop') {
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
        console.log(child);
        e.target.previousElementSibling.previousElementSibling.previousElementSibling.value = '';
    }
});

section.addEventListener('click', (e) => {
    const target = e.target;
    const parent = target.parentElement;
    // console.log(parent);
    parent.remove();
    console.log(child);
});

btnSection.addEventListener('click', (e) => {
    if (e.target.textContent == 'All') {
        for (let i = 0; i < child.length; i++) {
            child[i].style.display = 'flex';
            console.log(child[i]);
        }
    }
    else if (e.target.textContent == 'Headphones') {
        for (let i = 0; i < child.length; i++) {
            if (child[i].classList.contains('headphone')) {
                child[i].style.display = 'flex';
                console.log(child[i]);
            } else {
                child[i].style.display = 'none';
                console.log(child[i]);
            }
        }
    }
    else if(e.target.textContent == 'Laptops') {
        for (let i = 0; i < child.length; i++) {
            if (child[i].classList.contains('laptop')) {
                child[i].style.display = 'flex';
                console.log(child[i]);
            } else {
                child[i].style.display = 'none';
                console.log(child[i]);
            }
        }
    }
    else if(e.target.textContent == 'Mobile') {
        for (let i = 0; i < child.length; i++) {
            if (child[i].classList.contains('mobile')) {
                child[i].style.display = 'flex';
                console.log(child[i]);
            } else {
                child[i].style.display = 'none';
                console.log(child[i]);
            }
        }
    }
})

























