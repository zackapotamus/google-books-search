export default {
  oxfordComma: function(arrayOfStrings) {
    if (!(Array.isArray(arrayOfStrings) && arrayOfStrings.length)) {
      return "";
    }
    let stringArray = [...arrayOfStrings];
    let arrayLength = stringArray.length;
    if (arrayLength <= 2) {
      return stringArray.join(" and ");
    } else {
      let lastWord = stringArray.splice(arrayLength - 1);
      return `${stringArray.join(", ")}, and ${lastWord}`
    }
  }
}