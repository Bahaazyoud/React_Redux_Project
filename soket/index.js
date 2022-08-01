import { Server } from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:3000"
    }
});
let onlineUser = []
const addNewUser = (username,soketId) => {
    !onlineUser.some(user=>user.username === username && onlineUser.push({username,soketId}))
};
const deleteUser = (soketId) => {
    onlineUser = onlineUser.filter(user=>user.soketId !== soketId)
};
const getUser = (username)=>{
    return onlineUser.find(user=>user.username === username);
};
io.on("connection", (socket) => {
    socket.on("newUser",(username)=>{
        addNewUser(username,socket.id);
    });
  socket.on("disconnect",()=>{
    deleteUser(socket.id);
  })
});


io.listen(5000);