// Made by BuddyWinte
javascript:(function() {
    console.log("setBlook.js - Made by BuddyWinte");
    if (window.location.pathname !== "/play/rush") {
        console.log("FAIL!")
        alert("You must be in a Blook Rush game to use this hack")
    } else {
        const obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;
        // const p_b = prompt("How much food do you want?");
        // p_b = p_b.replace(/[^\d]/g, ''); // remove invalid chars
        if (b_j) {
            obj.stateNode.state.foods.forEach(e => e.stock = 99999);
            obj.stateNode.forceUpdate();
            console.log("SUCCEED");
        }
    }
})
