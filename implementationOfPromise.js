function getMedicine1() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("1 Received")
      resolve();
    }, 1000);
  });
}

function getMedicine2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
			console.log("2 Received")
      resolve();
    }, 2000);
  });
}

getMedicine1()
	.then(getMedicine2())
