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
    previewDialog.showModal();
    const filterTitle = previewDialog.querySelector("#filterTitle");
    filterTitle.innerText = projectPreviews[projCat];
    allCheckBox.checked = true;
}

function closeModal() {
    // bigPic.src = "";
    // bigPic.alt = "placeholder for pciture";
    // set preview section blank
    // const viewer = e.currentTarget.id;
    // console.log("Button:", viewer);
    // console.log("Attempting to close!");
    if (previewDialog.open) previewDialog.close();
    if (randDialog.open) randDialog.close();
    // console.log("Closed!");
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
const allCheckBox = document.querySelector("#allFilters");
const menuBtn = document.querySelector("#menuButton");
const filtMenu = document.querySelector("#projViewFilt");

window.addEventListener('resize', handleResize);
document.querySelectorAll(".closeViewer").forEach(b => {b.addEventListener('click', closeModal)});
document.querySelectorAll(".projectBtn").forEach(b => {b.addEventListener('click', openPreviewdialog)});

menuBtn.addEventListener('click', toggleFilter);
randDialog.addEventListener('click', clickOutModal);
previewDialog.addEventListener('click', clickOutModal);

document.querySelector("#randBtn").addEventListener('click', (event) => {
    // bigPic.src = imgSrc;
    // bigPic.alt = img.alt;
    // pick three randoms and select the first
    randDialog.showModal();
});

allCheckBox.addEventListener('change', () => {
    const optionBoxes = previewDialog.querySelectorAll(".filtOption");
    if (allCheckBox.checked) {
        optionBoxes.forEach(i => i.checked = false);
    }
});

previewDialog.querySelectorAll(".filtOption").forEach(i => {i.addEventListener('change', () => {
    if (i.checked) {
        allCheckBox.checked = false;
        // adjust filter from here
    }
})});

handleResize();