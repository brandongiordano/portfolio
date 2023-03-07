let links = document.getElementsByClassName("tab-links");
let content = document.getElementsByClassName("tab-contents");
console.log(content);

function openTab(tabName) {
    for (tablink of links) {
        tablink.classList.remove("active-link");
    }
    for (colcontents of content) {
        colcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
    }