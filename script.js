// HOMEPAGE SEARCH
const homeSearch = document.getElementById("searchInput");

if (homeSearch) {

    homeSearch.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const word = this.value.trim();

            if (word !== "") {
                window.location.href =
                    "Gallery.html?search=" + encodeURIComponent(word);
            }

        }

    });

}


// GALLERY SEARCH
const gallerySearch = document.getElementById("searchInput");

if (gallerySearch) {

    gallerySearch.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            const word = this.value.trim();

            if (word !== "") {
                window.location.href =
                    "Gallery.html?search=" + encodeURIComponent(word);
            }

        }

    });

}


// SEARCH FUNCTIONALITY

const params = new URLSearchParams(window.location.search);
const searchWord = params.get("search");

if (searchWord) {

    const word = searchWord.toLowerCase();

    const elements = document.querySelectorAll(
        ".Games h1, .Games p"
    );

    const match = Array.from(elements).find(element =>
        element.textContent.toLowerCase().includes(word)
    );

    if (match) {

        match.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Highlight the matching section
        match.classList.add("search-highlight");

        // Remove highlight after 2 seconds
        setTimeout(() => {
            match.classList.remove("search-highlight");
        }, 2000);

    } else {
        alert("No matching word found!");
    }

}
