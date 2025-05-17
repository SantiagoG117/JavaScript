/* 
    Move start, stop and reset to the prototype of the stopwatch

    Now prototype level members can only access the public members of the sub class. Private members (let local variables) cannot
    be accessed by prototype members.

    To access the attributes of stopwatch from the prototype level members we must make the public (prefix them with 'this')
*/

function StopWatch() {
  //Attributes
  let isRunning,
    startTime,
    endTime,
    duration = 0;

  //Properties:
  Object.defineProperty(this, "isRunning", {
    get: function () {
      return isRunning;
    },

    set: function (value) {
      if (typeof value !== "boolean")
        throw new Error("isRunning can only be true or false");

      isRunning = value;
    },
  });

  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },

    set: function (value) {
      if (!(value instanceof Date || value === null))
        throw new Error("startTime must be a Date object");
      startTime = value;
    },
  });

  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },

    set: function (value) {
      if (!value instanceof Date || value === null)
        throw new Error("endTime must be a Date object");

      endTime = value;
    },
  });

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },

    set: function (value) {
      duration = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.isRunning) throw new Error("Stopwatch has already started");

  this.isRunning = true;
  this.startTime = new Date();
  console.log("Stopwatch is running");
};

StopWatch.prototype.stop = function () {
  if (!this.isRunning) throw new Error("Stopwatch has not been started");
  this.endTime = new Date();
  this.duration = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.isRunning = false;
  console.log(`Stopwatch stopped. Duration: ${this.duration}`);
};

StopWatch.prototype.reset = function () {
  duration = 0;
  startTime = null;
  stopTime = null;
  isRunning = false;

  console.log(`
      Stopwatch was reset
      Duration: ${duration}
      isRunning: ${isRunning}
      `);
};

const sw = new StopWatch();
