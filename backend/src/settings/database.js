// import { connect } from "mongoose";
// import { env } from "./config.js";

// const startConnection = async () => {
//     try {
//         const db = await connect(env.MONGO_URI, {
//             dbName: env.DATABASE_NAME,
//         });
//         console.log(`Estamos conectados a: ${db.connection.name}`);
        
//     } catch (error) {
//         console.error(error)
//     }
// };

// export {startConnection}

import { connect } from "mongoose";
import { env } from "./config.js";

const startConnection = async () => {
  try {
    const db = await connect(env.MONGO_URI, {
      dbName: env.DATABASE_NAME,
    });
    console.log("Estamos conectados a:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
};

export {startConnection}