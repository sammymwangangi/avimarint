import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/var/www/avimar/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
