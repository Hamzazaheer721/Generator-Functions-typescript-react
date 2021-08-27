import colorObjectType from "./types";

function* initializeIterator() {
  let colorArray: colorObjectType[] = [
    {
      color1: "blue",
      color2: "green"
    },
    {
      color1: "red",
      color2: "yellow"
    },
    {
      color1: "white",
      color2: "black"
    }
  ];
  let colorObject: colorObjectType;
  for (let i = 0; i < colorArray.length; i++) {
    colorObject = colorArray[i];
    yield colorObject;
  }
}

export default initializeIterator;

