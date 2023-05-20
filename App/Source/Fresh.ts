
import config from '../deno.json' assert { type : "json" }
import * as $0 from "./Routes/_app.tsx";
import * as $2 from "./Routes/index.tsx";

const manifest = {
  routes: {
    "./routes/_app.tsx": $0,
    "./routes/index.tsx": $2
  },
  islands : {

  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
