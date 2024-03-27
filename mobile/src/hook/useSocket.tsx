import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Socket } from "socket.io-client";

import { login } from "../redux/slice/loginSlice";
import { updateTemperature } from "../redux/slice/temperatureSlice";
import { updateMoisture } from "../redux/slice/moistureSlice";
import { updateHumidity } from "../redux/slice/humiditySlice";
import { updateLuminosity } from "../redux/slice/luminositySlice";

const useSocket = (socket: Socket) => {
  const dispatch = useDispatch();
  const onConnect = () => {
    socket.emit("join client room"); // emit "join client room" and it'll be listened at index.ts file in backend where it'll join the client room (socket.join('client room'))
  };
  const onLogin = (message: string) => {
    dispatch(login(JSON.parse(message)));
  };

  const onTemperatureUpdate = (message: string) => {
    dispatch(updateTemperature(JSON.parse(message)));
  };

  const onMoistureUpdate = (message: string) => {
    dispatch(updateMoisture(JSON.parse(message)));
  };

  const onHumidityUpdate = (message: string) => {
    dispatch(updateHumidity(JSON.parse(message)));
  };

  const onLuminosityUpdate = (message: string) => {
    dispatch(updateLuminosity(JSON.parse(message)));
  };

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("authController to client", onLogin); // listen from controller through socket.emit from index.ts file in backend
    socket.on("temperatureController to client", onTemperatureUpdate);
    socket.on("moistureController to client", onMoistureUpdate);
    socket.on("humidityController to client", onHumidityUpdate);
    socket.on("luminosityController to client", onLuminosityUpdate);

    return () => {
      socket.off("connect", onConnect);
      socket.off("authController to client", onLogin);
      socket.off("temperatureController to client", onTemperatureUpdate);
      socket.off("moistureController to client", onMoistureUpdate);
      socket.off("humidityController to client", onHumidityUpdate);
      socket.off("luminosityController to client", onLuminosityUpdate);
    };
  }, [socket]);
};

export default useSocket;
