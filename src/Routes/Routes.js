import Acomponent from "../Components/Layout/a";
import Bcomponent from "../Components/Layout/b";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/ssl-certificates`, Component: <Acomponent /> },
  { path: `${process.env.PUBLIC_URL}/reseller-program`, Component: <Bcomponent /> }
]