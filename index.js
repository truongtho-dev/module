module.exports = {
  log,
};

var apiKey = "123abc";
function log() {
  console.log("This is a simple module to log");
  console.log("This is v2");
  console.log("v3 with apikey");
  console.log(apiKey);
}
