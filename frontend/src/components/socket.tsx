import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

// ------------------------------
// 🔌 Socket Context
// ------------------------------
interface SocketContextType {
  socket: any | null;
  isConnected: boolean;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

const SocketContext = createContext<SocketContextType | null>(null);


export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<any>(null);

  const connectSocket = () => {
    if (socketRef.current) return; // avoid duplicate connections

    const newSocket = io("http://localhost:5000", {

      autoConnect: true,
    });

    socketRef.current = newSocket;
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket Connected");
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      console.log("Socket Disconnected");
      setIsConnected(false);
    });
  };

  const disconnectSocket = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
      socketRef.current = null;
      setSocket(null);
      setIsConnected(false);
    }
  };

  useEffect(() => {
    return () => {
      disconnectSocket(); 
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket: socketRef.current, isConnected, connectSocket, disconnectSocket }}
    >
      {children}
    </SocketContext.Provider>
  );
};


export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used inside SocketProvider");
  }
  return context;
};
