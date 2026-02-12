console.log("append js")

const placeList=document.getElementById('places-list')
const li=document.createElement('li');
li.innerText='pahartoli-bon';
placeList.appendChild(li)



const maincontainer=document.getElementById('main-container')

const section=document.createElement('section')
const h1=document.createElement('h1');
h1.innerText='my food list';
section.appendChild(h1);



const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='biriany';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='borhani'
ul.appendChild(li2);

section.appendChild(ul)


maincontainer.append(section)


// set innerHTML 
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
h1

`
