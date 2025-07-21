import {projects, getTags, getDates, getTopics} from './projs.js';

function handleResize() {
    const width = window.innerWidth;

    if (width >= 850) {
        menuBtn.classList.add('hide');
        filtMenu.classList.remove('hide');
        fun.classList.remove('hide');
    } else {
        menuBtn.classList.remove('hide');
        filtMenu.classList.add('hide');
        fun.classList.add('hide');
    }
}

function toggleFilter() {
    filtMenu.classList.toggle('hide');
}

function openPreviewdialog(event) {
    const projCat = event.target.id;
    const filterTitle = previewDialog.querySelector("#filterTitle");
    const filters = previewDialog.querySelector('.filters');
    filterTitle.innerText = projectPreviews[projCat];

    // wipes out all elements
    filters.replaceChildren();
    
    const allChk = document.createElement('input');
    allChk.type = 'checkbox';
    allChk.id = 'allFilters';
    allChk.checked = true;
    allChk.value = 'All';
    
    const allLbl = document.createElement('label');
    allLbl.innerText = 'All';
    allLbl.appendChild(allChk);
    
    filters.appendChild(allLbl);
    filters.appendChild(document.createElement('br'));
    
    const filtSelection = projCat === "projLangBtn" ? getTags() : projCat === "projTopicBtn" ? getTopics() : getDates();
    Object.keys(filtSelection).forEach(i => {
        const chkBx = document.createElement('input');
        chkBx.type = 'checkbox';
        chkBx.classList.add("filtOption");
        chkBx.checked = false;
        chkBx.value = i;
        
        const lbl = document.createElement('label');
        lbl.innerText = projCat !== "projRecentBtn" ? 
            i :
            `${(new Date(i)).getFullYear()}-${(new Date(i)).getMonth() + 1}`;
        lbl.appendChild(chkBx);
        
        filters.appendChild(lbl);
        filters.appendChild(document.createElement('br'));
        
        chkBx.addEventListener('change', () => {
            if (chkBx.checked) {
                allChk.checked = false;
            }
            updateResults(filtSelection);
        });
    });
    
    allChk.addEventListener('change', () => {
        const optionBoxes = filters.querySelectorAll(".filtOption");
        if (allChk.checked) {
            optionBoxes.forEach(i => i.checked = false);
            updateResults(filtSelection);
        }
    });

    updateResults(filtSelection);
    previewDialog.showModal();
}

function updateResults(data) {
    const allChk = previewDialog.querySelector("#allFilters");
    const selected = allChk.checked ? 
        Array.from(previewDialog.querySelectorAll(".filtOption")).map(i => i.value) : 
        Array.from(previewDialog.querySelectorAll(".filtOption:checked")).map(i => i.value);

    const filteredNames = new Set();

    if (selected.length > 0) {
        Object.entries(data).forEach(([key, value]) => {
          if (selected.includes(key)) {
              value.forEach(j => {
                  filteredNames.add(j);
              })
          }
        });
    }

    renderResults(Array.from(filteredNames));
}

function renderResults(opts) {
    const projList = previewDialog.querySelector('.projectList');
    projList.replaceChildren();

    
    opts.forEach(i => {
        const name = projects.find(proj => proj.id === i).title;
        const btn = document.createElement('button');
        btn.classList.add("projBtn");
        btn.id = i;
        btn.innerText = name;
        
        const listEl = document.createElement('li');
        listEl.appendChild(btn);
        
        projList.appendChild(listEl);
        
        btn.addEventListener('click', () => {
            renderSelection(btn.id);
        });
    });
}

function renderSelection(projId) {
    const proj = projects.find(i => i.id === projId);
    const sect = previewDialog.open ? 
        previewDialog.querySelector(".preview") :
        randDialog.querySelector(".preview");
    
    const projTitle = sect.querySelector(".projectTitle");
    const projDate = sect.querySelector(".projectDate");
    const projTags = sect.querySelector(".tagList");
    const projDesc = sect.querySelector(".projDesc");
    const projObj = sect.querySelector(".projObj");
    const projImg = sect.querySelector(".heroPortrait");

    if (proj !== undefined) {
        projTitle.innerText = proj.title;
        projDate.innerText = `Last Updated: ${proj.date}`;
        projTags.innerText = proj.tags;
        projDesc.innerText = proj.description;
        projObj.innerText = proj.objective;
        projImg.src = proj.media.find(i => i.order === "hero").file;
    } else {
        projTitle.innerText = "Project Name"
        projDate.innerText = `Last Updated: date`;
        projTags.innerText = "Code/Tool, Code/Tool, Code/Tool";
        projDesc.innerText = "Some shorter description";
        projObj.innerText = "Project was meant to do";
        projImg.src = "";
    }
}

function closeModal() {
    renderSelection("none");
    if (previewDialog.open) previewDialog.close();
    if (randDialog.open) randDialog.close();
}

function clickOutModal(event) {
    if (event.target === previewDialog || event.target === randDialog) {
        closeModal();
    }
}

const projectPreviews = {
    projLangBtn: "Projects by Languages & Tools",
    projTopicBtn: "Projects by Topic",
    projRecentBtn: "Projects by Most Recent"
};

const fun = document.querySelector("#funny");
const previewDialog = document.querySelector("#projectViewer");
const randDialog = document.querySelector("#randProjViewer");
const menuBtn = document.querySelector("#menuButton");
const filtMenu = document.querySelector("#projViewFilt");

window.addEventListener('resize', handleResize);
document.querySelectorAll(".closeViewer").forEach(b => {b.addEventListener('click', closeModal)});
document.querySelectorAll(".projectBtn").forEach(b => {b.addEventListener('click', openPreviewdialog)});

menuBtn.addEventListener('click', toggleFilter);
randDialog.addEventListener('click', clickOutModal);
previewDialog.addEventListener('click', clickOutModal);

document.querySelector("#randBtn").addEventListener('click', (event) => {
    const projIds = [];
    projects.forEach(i => {
        projIds.push(i.id);
    });

    const randIndex = Math.floor(Math.random() * projIds.length);
    randDialog.showModal();
    renderSelection(projIds[randIndex]);
});

handleResize();