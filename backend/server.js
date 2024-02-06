const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./utiles/db");
require("dotenv").config();
const socket = require("socket.io");
const port = process.env.PORT;

const server = http.createServer(app);

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
const io = socket(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});
var allCustomer = [];
var allSeller = [];

const addUser = (customerId, socketId, userInfo) => {
  const checkUser = allCustomer.some((u) => u.customerId === customerId);

  if (!checkUser) {
    allCustomer.push({
      customerId,
      socketId,
      userInfo,
    });
  }
};

const addseller = (selllerId, socketId, userInfo) => {
  const checkSeller = allSeller.some((u) => u.selllerId === selllerId);

  if (!checkSeller) {
    allSeller.push({
      selllerId,
      socketId,
      userInfo,
    });
  }
};

io.on("connection", (soc) => {
  console.log("socket server is connected");

  soc.on("add_user", (customerId, userInfo) => {
    addUser(customerId, soc.id, userInfo);
  });
  soc.on("add_seller", (sellerId, userInfo) => {
    addseller(sellerId, userInfo);
  });
});
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/", require("./routes/chatRoutes"));
app.use("/api/home", require("./routes/home/homeRoutes"));
app.use("/api/home", require("./routes/order/orderRoutes"));
app.use("/api", require("./routes/home/cardRoutes"));
app.use("/api", require("./routes/home/customerAuthRoutes"));
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/dashboard/categoryRoutes"));
app.use("/api", require("./routes/dashboard/productRoutes"));
app.use("/api", require("./routes/dashboard/sellerRoutes"));
app.get("/", (req, res) => res.send("hello"));
dbConnect();
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
