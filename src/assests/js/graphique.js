window.addEventListener('load', ()=> {

  horseshoe = new RGraph.SVG.Horseshoe({
    id: "skate",
    min: 0,
    max: 100,
    value: 90,
    options: {
      labelsCenterUnitsPost: "%",
      textSize: 50,
      width: 5,
      marginLeft: 0,
      marginBottom: 0,
    },
  }).grow();
})

