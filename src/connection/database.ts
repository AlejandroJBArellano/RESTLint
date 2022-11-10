import { connect } from "mongoose";
import keys from "./keys";

connect(keys.uri as string)
    .then(() => console.log("DB is connected"))
    .catch( e => console.log(e));