function Circle(radius) {
  this.radius = radius;

  //Hide
  let defaultLocation = { x: 0, y: 0 };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(
    this, //Object we want to add a new property to
    "defaultLocation", //Name of the property
    //Object defining getters and setters
    {
      get: function () {
        return defaultLocation;
      },

      set: function (value) {
        defaultLocation = value;
      },
    }
  );
}
