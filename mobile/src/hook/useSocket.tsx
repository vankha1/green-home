import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Socket } from "socket.io-client";

import { login } from "../redux/slice/loginSlice";

const useSocket = (socket: Socket) => {
  const dispatch = useDispatch();
  const onConnect = () => {
    socket.emit("join client room"); // emit "join client room" and it'll be listened at index.ts file in backend where it'll join the client room (socket.join('client room'))
  };
  const onLogin = (message: string) => {
    dispatch(login(JSON.parse(message)));
  };

  useEffect(() => {
    socket.on('connect', onConnect)
    socket.on("authController to client", onLogin); // listen from controller through socket.emit from index.ts file in backend

    return () => {
      socket.off("authController to client", onLogin);
    };
  }, [socket]);
};

export default useSocket;
