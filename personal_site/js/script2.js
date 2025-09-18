import {projects} from "./projs.js";

function buildContent() {
    // Main Area
    const projTitle = document.querySelector("#projectTitle");
    const projDate = document.querySelector("#projectDate");
    const projTags = document.querySelector("#tagList");
    const projDesc = document.querySelector("#projDesc");
    const projHero = document.querySelector("#heroPortrait");
    
    // Overview Area
    const projOver = document.querySelector("#projOverview")
    const projObj = document.querySelector("#projObj");
    const projImgP = document.querySelector("#primaryImg");
    const projImgS = document.querySelector("#secondaryImg");
    const projImgT = document.querySelector("#tertiaryImg");

    // Embed Area
    const projEmbed = document.querySelector("#embedArea");

    const proj = projects.find(i => i.id === projHash);
    const projMedia = proj.media;
    if (proj !== undefined) {
        projTitle.innerText = proj.title;
        projDate.innerText = `Last Updated: ${proj.date}`;
        projTags.innerText = proj.tags;
        projDesc.innerText = proj.description;
        projHero.src = projMedia.find(i => i.order.toLowerCase() === "hero").file;

        projOver.innerText = proj.overview;
        projObj.innerText = proj.objective;
        if (projMedia.find(i => i.order.toLowerCase() === "primary").file.toLowerCase() === "none") {
            // no primary image hide it
            projImgP.classList.add('hide');
        } else {
            projImgP.src = projMedia.find(i => i.order.toLowerCase() === "primary").file;
        }
        if (projMedia.find(i => i.order.toLowerCase() === "secondary").file.toLowerCase() === "none") {
            // no primary image hide it
            projImgS.classList.add('hide');
        } else {
            projImgS.src = projMedia.find(i => i.order.toLowerCase() === "secondary").file;
        }
        if (projMedia.find(i => i.order.toLowerCase() === "tertiary").file.toLowerCase() === "none") {
            // no primary image hide it
            projImgT.classList.add('hide');
        } else {
            projImgT.src = projMedia.find(i => i.order.toLowerCase() === "tertiary").file;
        }

        if (proj.link.toLowerCase() === "none") {
            projEmbed.classList.add('hide');
        } else {
            const embedCntnr = document.querySelector("#embeddedContainer");
            document.querySelector("#embedBtn").addEventListener('click', () => {
                const embedFrame = embedCntnr.querySelector("iframe");
                embedFrame.src = proj.link;
            });
        }
    } else {
        projTitle.innerText = "Project Name"
        projDate.innerText = `Last Updated: date`;
        projTags.innerText = "Code/Tool, Code/Tool, Code/Tool";
        projDesc.innerText = "Some shorter description";
        projHero.src = "";

        projObj.innerText = "Project was meant to do";
    }
}

const projHash = window.location.hash.substring(1);
buildContent();