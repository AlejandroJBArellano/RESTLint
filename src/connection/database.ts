import { connect } from "mongoose";
import keys from "./keys";

connect(keys.uri as string)
    .then( e => console.log("DB is connected on" + e.connection))
    .catch( e => console.log(e));