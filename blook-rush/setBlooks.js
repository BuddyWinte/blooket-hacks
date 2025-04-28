javascript:(function() {
  if (window.location.pathname !== "/play/rush") {
    alert("You must be in a blook rush game mode to use this hack!");
  } else {
    const e = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner;
    const blooks = prompt("How many blooks do you want?");
    if (blooks && !isNaN(blooks)) {
      e.stateNode.props.firebase.setVal({
        id: e.stateNode.props.client.hostId,
        path: "c/" + e.stateNode.props.client.name + "/bs",
        val: Number(parseFloat(blooks))
      });
      alert("Blooks set!");
    } else {
      alert("Invalid number of blooks!");
    }
  }
})();
