import Certificates from "../Components/Certificates/Certificates";
import Company from "../Components/Company/Company";
import Lei from "../Components/Lei/Lei";
import Reseller from "../Components/Reseller/Reseller";
import Solutions from "../Components/Solutions/Solutions";
import Support from "../Components/Support/Support";
import Trustly from "../Components/Trustly/Trustly";
import TrustlyScaner from "../Components/Trustly/TrustlyScaner";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/ssl-certificates`, Component: <Certificates /> },
  { path: `${process.env.PUBLIC_URL}/reseller-program`, Component: <Reseller /> },
  { path: `${process.env.PUBLIC_URL}/lei`, Component: < Lei /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust`, Component: < Trustly /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust-scanner`, Component: <TrustlyScaner /> },
  { path: `${process.env.PUBLIC_URL}/solutions`, Component: <Solutions /> },
  { path: `${process.env.PUBLIC_URL}/support`, Component: <Support /> },
  { path: `${process.env.PUBLIC_URL}/company`, Component: <Company /> },
]