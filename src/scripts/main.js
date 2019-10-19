//  captures location on the dom
const wishlistContainer = document.querySelector("#wishlistContainer")

document.querySelector("#saveBTN")
saveBTN.addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const favoriteThing = document.querySelector("#favoriteThing").value
    const location = document.querySelector("#location").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    wishlistContainer.innerHTML += `
        <section>
            <p>I can purchase ${favoriteThing} at ${location}.</p> 
        </section>
    `
})


