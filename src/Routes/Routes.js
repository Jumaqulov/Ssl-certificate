import Certificates from "../Components/Certificates/Certificates";
import Reseller from "../Components/Reseller/Reseller";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/ssl-certificates`, Component: <Certificates /> },
  { path: `${process.env.PUBLIC_URL}/reseller-program`, Component: <Reseller /> },
  
]