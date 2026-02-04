const { greetUser } = require("./app");

function testGreeting() {
  const expected = "Hola Pepito, el pipeline está funcionando correctamente 🚀";
  const result = greetUser("Pepito");

  if (result === expected) {
    console.log("Test passed");
    process.exit(0);
  } else {
    console.error("Test failed");
    process.exit(1);
  }
}

testGreeting();
