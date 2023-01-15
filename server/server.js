import config from "../config/config.js";
import app from "./express.js";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri);

mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${mongoUri}`);
});

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server started on port ${config.port}`);
});