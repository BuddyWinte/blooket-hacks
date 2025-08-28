// Made by BuddyWinte
// /d
javascript:(function(){
    console.log("setDefense.js - Made by BuddyWinte");
    if (window.location.pathname !== "/play/rush") {
        console.log("FAIL!")
        alert("You must be in a Blook Rush game to use this hack")
    } else {
        const obj = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;
        const p_b = prompt("How much defense do you want");
        if (b_j && !isNaN(b_j)) {
            obj.stateNode.props.firebase.setVal({
                id: obj.stateNode.props.client.hostId,
                path: "c/" + obj.stateNode.props.client.name + "/d",
                val: Number(parseFloat(p_b))
            });

        }
    }
})
