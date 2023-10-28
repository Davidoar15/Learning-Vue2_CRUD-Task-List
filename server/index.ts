import app from "./app";
import { startConnection } from "./db";

startConnection();
app.listen(3000, () => {
    console.log("Server is listening in Port 3000");
})