const app = require("./server");
const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Your server, listening on port ${port}`));
