function navOnclick(event){
    event.preventDefault();
    if(event.target.closest('ul').getAttribute('data-nav-active-type') === 'active-class'){
        document.querySelectorAll(".nav-link").forEach(node => {
            node.classList.remove("active");
        })
        event.target.classList.add("active");
    }

    if(event.target.closest('ul').getAttribute('data-nav_click_action') === 'scroll'){
        document.querySelector("#" + event.target.closest('li').getAttribute('data-nav-point')).scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener("DOMContentLoaded", () => {

})