import io from "socket.io-client";
import { SOCKET_URL } from "./util";
 
export const socket = io(SOCKET_URL, {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttempts: Infinity,
  jsonp: false,
  transports: ["websocket"],
});