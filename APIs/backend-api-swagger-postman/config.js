import dotnev from "dotenv";

dotnev.config();

const PORT = process.env.PORT;
const MONGOCONNECTION = process.env.MONGOCONNECTION;

export { PORT, MONGOCONNECTION };
