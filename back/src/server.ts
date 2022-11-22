import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = +process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is up and runnig on port ${PORT}`);
});