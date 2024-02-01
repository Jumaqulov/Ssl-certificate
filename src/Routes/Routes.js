import CSRgenerator from "../Components/CSR/CSRgenerator";
import CSRdecoder from "../Components/CSR/CSRdecoder";
import Certificates from "../Components/Certificates/Certificates";
import Company from "../Components/Company/Company";
import Lei from "../Components/Lei/Lei";
import Reseller from "../Components/Reseller/Reseller";
import Solutions from "../Components/Solutions/Solutions";
import Support from "../Components/Support/Support";
import Trustly from "../Components/Trustly/Trustly";
import TrustlyScaner from "../Components/Trustly/TrustlyScaner";
import SSLchecker from "../Components/CSR/SSLchecker";
import SSLmatcher from "../Components/CSR/SSLmatcher";
import Wiki from "../Components/Wiki/Wiki";
import Terms from "../Components/Terms&Conditions/Terms";
import Payment from "../Components/Payment/Payment";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";

export const routes = [
  { path: `${process.env.PUBLIC_URL}/ssl-certificates`, Component: <Certificates /> },
  { path: `${process.env.PUBLIC_URL}/reseller-program`, Component: <Reseller /> },
  { path: `${process.env.PUBLIC_URL}/lei`, Component: < Lei /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust`, Component: < Trustly /> },
  { path: `${process.env.PUBLIC_URL}/trulytrust-scanner`, Component: <TrustlyScaner /> },
  { path: `${process.env.PUBLIC_URL}/solutions`, Component: <Solutions /> },
  { path: `${process.env.PUBLIC_URL}/support`, Component: <Support /> },
  { path: `${process.env.PUBLIC_URL}/company`, Component: <Company /> },
  { path: `${process.env.PUBLIC_URL}/online-csr-generator`, Component: <CSRgenerator /> },
  { path: `${process.env.PUBLIC_URL}/online-csr-decoder`, Component: <CSRdecoder /> },
  { path: `${process.env.PUBLIC_URL}/check-ssl-installation`, Component: <SSLchecker /> },
  { path: `${process.env.PUBLIC_URL}/ssl-certificate-matcher-tool`, Component: <SSLmatcher /> },
  { path: `${process.env.PUBLIC_URL}/wiki`, Component: <Wiki /> },
  { path: `${process.env.PUBLIC_URL}/terms-and-conditions`, Component: <Terms /> },
  { path: `${process.env.PUBLIC_URL}/refund-policy`, Component: <Payment /> },
  { path: `${process.env.PUBLIC_URL}/privacy-policy`, Component: <PrivacyPolicy /> },
]