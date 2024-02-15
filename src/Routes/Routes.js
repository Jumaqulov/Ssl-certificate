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
import General from "../Components/Wiki/GeneralQuestion/General";
import SslValidation from "../Components/Wiki/SslValidation/SslValidation";
import Problems_Issues from "../Components/Wiki/Problems&Issues/Problems_Issues";
import Intermediate from "../Components/Wiki/IntermediateCertificate/Intermediate";
import Reissue from "../Components/Wiki/Reissue/Reissue";
import Basic from "../Components/Wiki/BasicFaq/Basic";
import CsrGeneration from "../Components/Wiki/CSR/CsrGeneration";
import Installitions from "../Components/Wiki/Installitions/Installitions";
import OrderCancelation from "../Components/Wiki/GeneralQuestion/OrderCancelation";
import MothlyBilling from "../Components/Wiki/GeneralQuestion/MothlyBilling";
import DisAllowedDomian from "../Components/Wiki/GeneralQuestion/DisAllowedDomian";
import TaxVat from "../Components/Wiki/GeneralQuestion/TaxVat";
import ComodoSectigo from "../Components/Wiki/GeneralQuestion/ComodoSectigo";
import MultiYearSsl from "../Components/Wiki/GeneralQuestion/MultiYearSsl";
import MDF from "../Components/Wiki/GeneralQuestion/MDF";
import CodeSigning from "../Components/Wiki/GeneralQuestion/CodeSigning";
import OrderStuck from "../Components/Wiki/SslValidation/OrderStuck";
import DomianValidation from "../Components/Wiki/SslValidation/DomianValidation";
import Digicert from "../Components/Products/Digicert/Digicert";
import Detail from "../Components/Products/Digicert/Detail";
import GeoTrust from "../Components/Products/GeoTrust/GeoTrust";
import GoGetSSL from "../Components/Products/GoGetSSL/GoGetSSL";
import Sectigo from "../Components/Products/Sectigo/Sectigo";
import RapidSSL from "../Components/Products/RapidSSL/RapidSSL";
import Thawte from "../Components/Products/Thawte/Thawte";
import DVSSL from "../Components/Products/DV-SSL/DVSSL";
import OVSSL from "../Components/Products/OV-SSL/OVSSL";
import EVSSL from "../Components/Products/EV-SSL/EVSSL";
import MDSSL from "../Components/Products/Multi-Domian/MDSSL";
import WSSL from "../Components/Products/Wildcard-SSL/WSSL";

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
  { path: `${process.env.PUBLIC_URL}/wiki/general`, Component: <General /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation`, Component: <SslValidation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/problems`, Component: <Problems_Issues /> },
  { path: `${process.env.PUBLIC_URL}/wiki/intermediate-certificates`, Component: <Intermediate /> },
  { path: `${process.env.PUBLIC_URL}/wiki/ssl-reissue-renewal`, Component: <Reissue /> },
  { path: `${process.env.PUBLIC_URL}/wiki/ssl-basics`, Component: <Basic /> },
  { path: `${process.env.PUBLIC_URL}/wiki/csr-generation`, Component: <CsrGeneration /> },
  { path: `${process.env.PUBLIC_URL}/wiki/installation`, Component: <Installitions /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/order-cancellation-and-refund-rules`, Component: <OrderCancelation /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/monthly-billing`, Component: <MothlyBilling /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/disalowed-domains`, Component: <DisAllowedDomian /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/tax-vat-rules`, Component: <TaxVat /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/comodo-is-now-sectigo`, Component: <ComodoSectigo /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/multi-year-subscription-ssl`, Component: <MultiYearSsl /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/mdf`, Component: <MDF /> },
  { path: `${process.env.PUBLIC_URL}/wiki/general/code-signing-2023`, Component: <CodeSigning /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/order-stuck-for-manual-check-brand-validation`, Component: <OrderStuck /> },
  { path: `${process.env.PUBLIC_URL}/wiki/validation/domain-validation-ssl-verification`, Component: <DomianValidation /> },

  { path: `${process.env.PUBLIC_URL}/product/:id`, Component: <Detail /> },
  { path: `${process.env.PUBLIC_URL}/digicert`, Component: <Digicert /> },
  { path: `${process.env.PUBLIC_URL}/geotrust`, Component: <GeoTrust /> },
  { path: `${process.env.PUBLIC_URL}/ssl-certs`, Component: <GoGetSSL /> },
  { path: `${process.env.PUBLIC_URL}/sectigo`, Component: <Sectigo /> },
  { path: `${process.env.PUBLIC_URL}/rapidssl`, Component: <RapidSSL /> },
  { path: `${process.env.PUBLIC_URL}/thawte`, Component: <Thawte /> },
  { path: `${process.env.PUBLIC_URL}/dv-ssl`, Component: <DVSSL /> },
  { path: `${process.env.PUBLIC_URL}/ov-ssl`, Component: <OVSSL /> },
  { path: `${process.env.PUBLIC_URL}/ev-ssl`, Component: <EVSSL /> },
  { path: `${process.env.PUBLIC_URL}/multi-domain-ssl`, Component: <MDSSL /> },
  { path: `${process.env.PUBLIC_URL}/wildcard-ssl`, Component: <WSSL /> },

]