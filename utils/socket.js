// const Users = require("../models/users");
// require("dotenv").config();
// const socketFunc = (io) => {
//   // const users = await Users.find({ name });

//   io.use((socket, next) => {
//     const token = socket.handshake.query.token;

//     if (!token) {
//       return next(new Error("Authentication error: Token missing"));
//     }

//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return next(new Error("Authentication error: Invalid token"));
//       }

//       // Attach user info to the socket for later use
//       socket.user = decoded;
//       next();
//     });
//   });

//   const users = {};
//   io.on("connection", (socket) => {
//     const userName = socket.user.name;
//     if (userName) {
//       users[socket.id] = userName;
//       console.log("New user connected:", userName);

//       // Notify others about the new user
//       socket.broadcast.emit("user-joined", userName);
//     }

//     // socket.on("new-user-joined", async (name) => {
//     //   console.log("new user", name);
//     //   users[socket.id] = name;
//     //   socket.broadcast.emit("user-joined", name);
//     // });

//     socket.on("send", (message) => {
//       socket.broadcast.emit("recieve", {
//         message: message,
//         name: users[socket.id],
//       });
//     });

//     socket.on("disconnect", (message) => {
//       if (users[socket.id]) {
//         console.log("User disconnected:", users[socket.id]);
//         socket.broadcast.emit("left", users[socket.id]);
//         delete users[socket.id];
//       }
//     });
//   });
// };
// module.exports = socketFunc;
