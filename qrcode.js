const qrcode = require("qrcode");

qrcode.toString("Hi Preeti Rahul Loves You Very Much", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
