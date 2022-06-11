import io from "socket.io-client";
import { BASE_URL } from "./util";
 
export const socket = io(BASE_URL, {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttempts: Infinity,
  jsonp: false,
  transports: ["websocket"],
});