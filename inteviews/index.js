console.log("something");

const data = [
  { id: 1, name: "zen" },
  { id: 2, name: "lukasz" },
  { id: 3, name: "huzaini" },
  { id: 4, name: "bujlo" },
  { id: 5, name: "" },
  { id: 5, name: "" },
];
const copyData = data;

console.log("before ", data);

//FInd
console.log("FInd :::::::::::::::::::::::::::::::::::::::::::::::: ");
const find = data.find((data) => data.name === "zen");

if (!find) {
  return console.log("no found");
}
console.log("findIndex: ", find);

//find index
console.log("Index :::::::::::::::::::::::::::::::::::::::::::::::: ");
const findIndex = data.findIndex((data) => data.name === "bujlo");
if (findIndex === -1) {
  return console.log("index no found");
}
console.log("findIndex: ", findIndex);

//map
console.log("MAP :::::::::::::::::::::::::::::::::::::::::::::::: ");
const mapData = data.map(({ id, name }) => {
  return !name ? { id, name: "no name" } : { id, name };
});

console.log("mapData : ", mapData);

//splice
//delete
console.log("Splicae :::::::::::::::::::::::::::::::::::::::::::::::: ");
const spliceData = data.splice(1, 1);
console.log("get splice data ", spliceData);
console.log(data);

//change
console.log("Splicae :::::::::::::::::::::::::::::::::::::::::::::::: ");
const spliceDataUpdate = data.splice(1, 1, {
  id: "s",
  name: "zen doerr",
});
console.log("get splice data ", spliceDataUpdate);
console.log(data);

//add
console.log("Splicae :::::::::::::::::::::::::::::::::::::::::::::::: ");
const spliceAdd = data.splice(1, 0, {
  id: 20,
  name: "karate do myagi",
});
console.log("get splice data ", spliceAdd);
console.log(data);

// /filter
console.log("Filter :::::::::::::::::::::::::::::::::::::::::::::::: ");
const filterData = copyData.filter((data) => data.name != "zen");
console.log(filterData);

//reduce
console.log("Reduce :::::::::::::::::::::::::::::::::::::::::::::::: ");
const reduceData = copyData.reduce();
console.log(reduceData);
