const projectdata = [
  {
    id: 'portfolio4',
    title: 'ToDo List',
    frames: ['Todo', 'Font end development', 2022],
    Image: './Pictures/Todo list.PNG',
    description: "In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime ",
    description2: "In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime ",
    language: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'portfolio1',
    title: 'ToDo List',
    frames: ['Todo', 'Font end development', 2022],
    Image: './Pictures/Todo list.PNG',
    description: "In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime ",
    description2: "In this project that you can add your daily schedule. This system also help you mark and unmark what you have finshed. Also you can edit the input that you add in it. You can clear all the input that you add and also clear all the complete task. All of this will be save in local storage that you can see even you refersh the page or come back after sometime ",
    language: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'portfolio2',
    title: 'FACEBOOK 360',
    frames: ['FACBOOK', 'Full Stack Dev', 2015],
    Image: './Btn-icon/Snapshoot Portfolio-d-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
  },
  {
    id: 'portfolio3',
    title: 'Uber Navigation',
    frames: ['UBER', 'Lead Developer', 2018],
    Image: './Btn-icon/Snapshoot Portfolio-d-3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    language: ['HTML', 'Ruby on Rail', 'CSS', 'JavaScript'],
  },
];

function fetchOneProject(id) {
  const projects = projectdata;
  let project = {};
  projects.forEach((i) => {
    if (i.id === id) {
      project = i;
    }
  });
  if (project) {
    const heading = document.querySelector('#popup');
    //  This is html part
    const pophead = document.createElement('div');
    pophead.classList.add('heading-pop');

    const popupheading = document.createElement('h2');

    const popclose = document.createElement('img');
    popclose.classList.add('material-symbols-outlined');
    popclose.src = './Btn-icon/Disabled.png';
    popclose.alt = 'Close';
    pophead.append(
      popupheading,
      popclose,
    );
    const popframe = document.createElement('ul');
    popframe.classList.add('popup-experience-d');
    const popimage = document.createElement('img');
    popimage.alt = 'Project image';
    popimage.classList.add('popup-image');
    const poppara = document.createElement('p');
    poppara.classList.add('desktop');
    const popparam = document.createElement('p');
    popparam.classList.add('mobile');
    const poplang = document.createElement('ul');
    poplang.classList.add('popup-language');
    const btnmain = document.createElement('div');
    btnmain.classList.add('mobile-button');
    const poplive = document.createElement('button');
    poplive.innerText = 'See Live';
    poplive.classList.add('mobile-btn');
    const popsource = document.createElement('button');
    popsource.innerText = 'See Source';
    popsource.classList.add('mobile-btn');
    btnmain.append(
      poplive,
      popsource,
    );
    const wraptext = document.createElement('div');
    wraptext.classList.add('main-lnag');
    wraptext.append(
      poplang,
      btnmain,
    );
    const popmaindes = document.createElement('div');
    popmaindes.classList.add('main-des');
    popmaindes.append(
      poppara,
      popparam,
      wraptext,
    );

    project.language.forEach((lang) => {
      const langli = document.createElement('li');
      langli.innerText = lang;
      poplang.appendChild(langli);
    });

    const mainbranch1 = document.createElement('div');
    mainbranch1.classList.add('main-branch-1');

    popupheading.innerText = project.title;
    popimage.src = project.Image;
    poppara.innerText = project.description;
    popparam.innerText = project.description2;
    project.frames.forEach((frame) => {
      const frameli = document.createElement('li');
      frameli.innerText = frame;
      popframe.appendChild(frameli);
    });

    mainbranch1.append(
      pophead,
      popframe,
      popimage,
      popmaindes,
    );

    const mainhead = document.createElement('div');
    mainhead.classList.add('mainhead');
    mainhead.append(
      mainbranch1,
    );

    heading.append(
      mainhead,
    );
    popclose.addEventListener('click', () => {
      mainhead.style.visibility = 'hidden';
    });
  }
}

const connect = document.querySelectorAll('.connect');

connect.forEach((conn) => {
  conn.addEventListener('click', (e) => {
    fetchOneProject(e.target.id);
  });
});

// For validation

const error = document.querySelector('.error');
const fname = document.getElementById('name');
const text = document.getElementById('Complaint');

function store(n, e, t) {
  const stored = { name: n, email: e, comment: t };
  const convert = JSON.stringify(stored);
  localStorage.setItem('data', convert);
}

function validation() {
  const email = document.getElementById('email');
  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Email should be in lower case';
    return false;
  }
  error.textContent = '';
  return store(fname.value, email.value, text.value);
}

const submitButton = document.getElementById('Submit');
submitButton.addEventListener('click', validation);
