import React from "react"

const UserContext= React.createContext("panchal"); 
const Provider = UserContext.Provider;
const Consumer = UserContext.Consumer;

export {Provider,Consumer}
