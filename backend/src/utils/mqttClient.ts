import * as mqtt from "mqtt";
import {
  ADAFRUIT_IO_FEEDS,
  ADAFRUIT_IO_KEY,
  ADAFRUIT_IO_USERNAME,
} from "../config/adafruit";
import Publisher from "./publisher";

class MqttClient extends Publisher {
  private client: mqtt.MqttClient;

  constructor() {
    super();
    let option: Object = {
      host: "io.adafruit.com",
      port: "8883",
      protocol: "mqtts",
      username: ADAFRUIT_IO_USERNAME,
      password: ADAFRUIT_IO_KEY,
    };

    this.client = mqtt.connect(option);

    this.client.on("connect", () => console.log("Connected"));
    this.client.on("error", (err) => console.log(err));

    this.receiveMessage();
  }

  public subscribeTopic(topic: string): void {
    this.client.subscribe(ADAFRUIT_IO_FEEDS + topic, (err) => {
      if (err) console.log(err);
    });
  }

  public receiveMessage(): void {
    // topic: roopin216/feeds/overview.temperature
    this.client.on("message", (topic: string, message) => {
      const nameFeed = topic.includes('overview') ? topic.substring(25) : topic.substring(16); // temperature
      console.log("Check name feed : ", nameFeed)
      const nameController =
        nameFeed === "light" ? "luminosityController" : nameFeed + "Controller";

      const data = {
        from: nameController,
        to: "client",
        data: {
          value: message.toString(), // attriubute value must match with 'action.payload?.' in slice
        },
      };
      console.log("Received message:", topic, data);
      this.notify(data);
    });
  }

  public sendMessage(topic: string, message: string): void {
    this.client.publish(topic, message);// push adafruit
  }
}

export default MqttClient;
