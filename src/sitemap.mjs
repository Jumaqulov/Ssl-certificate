import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import fs from 'fs-extra';

const routes = [
  { url: '/ssl-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/lei', changefreq: 'monthly', priority: 0.8 },
  { url: '/trulytrust', changefreq: 'monthly', priority: 0.8 },
  { url: '/trulytrust-scanner', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
  { url: '/support', changefreq: 'monthly', priority: 0.8 },
  { url: '/company', changefreq: 'monthly', priority: 0.8 },
  { url: '/report-better-price', changefreq: 'monthly', priority: 0.8 },
  { url: '/online-csr-generator', changefreq: 'monthly', priority: 0.8 },
  { url: '/online-csr-decoder', changefreq: 'monthly', priority: 0.8 },
  { url: '/check-ssl-installation', changefreq: 'monthly', priority: 0.8 },
  { url: '/ssl-certificate-matcher-tool', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki', changefreq: 'monthly', priority: 0.8 },
  { url: '/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
  { url: '/refund-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/sitemap', changefreq: 'monthly', priority: 0.8 },
  { url: '/404', changefreq: 'monthly', priority: 0.8 },
  { url: '/order/product/:id', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/general', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-reissue-renewal', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/csr-generation', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/installation', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/general/disallowed-domains', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/general/comodo-is-now-sectigo', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/general/multi-year-subscription-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/general/code-signing-2023', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation/order-stuck-for-manual-check-brand-validation', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation/domain-validation-ssl-verification', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation/business-validation-ssl-verification', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation/extended-validation-ssl-verification', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/validation/sectigo-dcv-methods', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/caa-record', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/how-to-fix-modulus-missmatch-error', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_cert_common_name_invalid', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_ssl_version_or_cipher_mismatch', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_ssl_protocol_error', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_ssl_pinned_key_not_in_cert_chain', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/ssl_error_rx_record_too_long', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_certificate_transparency_required', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/err_cert_date_invalid', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/sec_error_expired_certificate', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/sec_error_unknown_issuer', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/windows-does-not-have-enough-information-to-verify-certificate', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/lost-private-key', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/common-name-missmatch-error', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/problems/why-no-padlock', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/gogetssl-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/sectigo-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/rapidssl-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/thawte-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/geotrust-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/digicert-intermediate-root-certificates', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/intermediate-certificates/sectio-addtrust-external-ca-root-expires', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-reissue-renewal/how-to-reissue-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-reissue-renewal/ssl-renewal-process', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-reissue-renewal/buy-more-san-items', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/what-is-ssl-tls', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/dv-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/ov-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/ev-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/wildcard-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/san-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/code-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/flex-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/ecc-sha-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/ssl-warranty', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/google-seo-booster', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/supported-devices', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/idn-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/site-seal-logo', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/how-to-check-ssl-details-in-browser', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/ssl-for-localhost', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/ssl-basics/do-i-need-ssl-for-content-website', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/csr-generation/generate-csr-without-cn', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/csr-generation/generate-csr-iis-7', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/csr-generation/generate-csr-iis-10', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/installation/digicert-sectigo-ssl-installation', changefreq: 'monthly', priority: 0.8 },
  { url: '/wiki/installation/redirect-http-to-https-in-nginx-apache', changefreq: 'monthly', priority: 0.8 },
  { url: '/product/:id', changefreq: 'monthly', priority: 0.8 },
  { url: '/digicert', changefreq: 'monthly', priority: 0.8 },
  { url: '/geotrust', changefreq: 'monthly', priority: 0.8 },
  { url: '/ssl-certs', changefreq: 'monthly', priority: 0.8 },
  { url: '/sectigo', changefreq: 'monthly', priority: 0.8 },
  { url: '/rapidssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/thawte', changefreq: 'monthly', priority: 0.8 },
  { url: '/dv-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/ov-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/ev-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/multi-domain-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/wildcard-ssl', changefreq: 'monthly', priority: 0.8 },
  { url: '/code-signing-ssl', changefreq: 'monthly', priority: 0.8 }
];

const generateSitemap = async () => {
  try {
    const publicDir = resolve('./public');
    await fs.ensureDir(publicDir);

    const sitemapStream = new SitemapStream({ hostname: 'https://sslcertificate.uz' });
    const writeStream = createWriteStream(resolve(publicDir, 'sitemap.xml'));

    sitemapStream.pipe(writeStream);

    const promise = streamToPromise(sitemapStream).then(() => {
      console.log('Sitemap generated!');
    });

    for (const route of routes) {
      sitemapStream.write(route);
    }

    sitemapStream.end();
    await promise;
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();