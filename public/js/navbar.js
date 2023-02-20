const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach(item => {
    const dropdownContent = item.querySelector(".dropdown-content");

    item.addEventListener("mouseover",()=>{
        dropdownContent.classList.add("show");
    });

    item.addEventListener("mouseout",()=>{
        dropdownContent.classList.remove("show");
    });
})