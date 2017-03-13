// closure
var addclosure = (() => {
  var counter = 0;
  return () => {
    counter += 2;
    console.log(counter);
  }
})();
addclosure();
addclosure();
addclosure();
