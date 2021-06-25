function parseCSVData(file) {
  //typeof file
  file
    .text()
    .then((data) => {
      const first = data.split("\n"); //creates an array for each newline

      const propertyNames = first[0].split(","); //gets the first index of comma seperated values as the headers/properties
      const values = first.slice(1, first.length); //the rest of the properties in the array and makes them the values

      let newArray = values.map((val) => {
        //mapping over the values
        const v = val.split(",");
        let newObj = {};

        for (let i = 0; i < propertyNames.length; i++) {
          const prop = propertyNames[i];
          const value = v[i];

          newObj[prop] = value;
        }

        return newObj;
      });

      return newArray;
    })
    .then((obj) => {
      console.log(obj);
    });
}
