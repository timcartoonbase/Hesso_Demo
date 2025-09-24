const riveCanvas = document.getElementById("riveCanvas");
let r;

r = new rive.Rive({
  src: "assets/hesso.riv",
  canvas: riveCanvas,
  layout: new rive.Layout({ fit: rive.Fit.Cover }),
  stateMachines: ["State Machine 1"],
  autoplay: true,
  fitCanvasToArtboardWidth: true,
  fitCanvasToArtboardHeight: true,
  autoBind: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    window.riveInputs = r.stateMachineInputs("State Machine 1");

    // Push values into Rive
    console.log(data[0].value);

    const namedVM = file.viewModelByName("textBoxes");
    // const namedVM = file.viewModelByIndex(0);
    console.log(namedVM);
  },
});

// Listens to events from Rive when user clicks on map areas, or resets map
function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;

  if (eventData.type === rive.RiveEventType.General) {
    switch (eventData.name) {
      case "triggerArea1":
        console.log("Area 1 event triggered from Rive");
        break;
      case "triggerArea2":
        console.log("Area 2 event triggered from Rive");
        break;
      case "triggerArea3":
        console.log("Area 3 event triggered from Rive");
        break;
      case "triggerArea4":
        console.log("Area 4 event triggered from Rive");
        break;
      case "triggerArea5":
        console.log("Area 5 event triggered from Rive");
        break;
      case "triggerArea6":
        console.log("Area 6 event triggered from Rive");
        break;
      case "triggerArea7":
        console.log("Area 7 event triggered from Rive");
        break;
      case "triggerArea8":
        console.log("Area 8 event triggered from Rive");
        break;
    }
  }
}

r.on(rive.EventType.RiveEvent, onRiveEventReceived);

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});

// Activate reseting state and reset all values
document.getElementById("resetMapBtn").addEventListener("click", () => {
  story.value = 0;
});
