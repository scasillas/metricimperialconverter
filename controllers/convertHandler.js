/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  let regex = /([A-Za-z]+)/;
  
  this.getNum = (input) => {
    let result = input.split(regex)[0];
    if (result == "") { // default value is 1, per instructions
      result = 1;
    };
    
    console.log("resultlength", result.length);
    console.log("getNum: ", result);

    return result || "invalid number"; // check if this does what you think it will
  };
  
  this.getUnit = (input) => {
    let result;
    if (input.split(regex)[1]) { // if there's a unit included
      result = input.split(regex)[1].toLowerCase();
    }
    else {
      result = "invalid unit";
    }
        
    console.log("getUnit: ", result);
    return result;
  };
  
  this.getReturnUnit = (initUnit) => {
    let result;
    
    switch(initUnit) {
    case "gal":
      result = "l";
      break;
    case "l":
      result = "gal";
      break;
    case "lbs":
      result = "kg";
      break;
    case "kg":
      result = "lbs";
      break;
    case "mi":
      result = "km";
      break;
    case "km":
      result = "mi";
      break;
    default:
      result = "invalid unit";
  }
    return result;
  };
  
  
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
