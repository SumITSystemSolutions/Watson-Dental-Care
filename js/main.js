// * collecting all of the element with this class in the document using the query method
const collapsibles = document.querySelectorAll(".collapsible");
// * for each collapsible we are going to add a event listener that can toggle the expand class
collapsibles.forEach((item)=>
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
        console.log('it works')
    })
);