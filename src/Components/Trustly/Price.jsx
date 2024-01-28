import React from 'react'

export default function Price() {

  function DesktopTitle1(txt) {
    return (
      <tr>
        <td className='ts-table-title' colSpan={5}>{txt}</td>
      </tr>
    )
  }

  function DesktopOnceYes({ title, txt }) {
    return (
      <tr>
        <td className='ts-brown-1'>
          <h4>{title}</h4>
          <p>{txt}</p>
        </td>
        <td className='ts-brown-2' colSpan={2}></td>
        <td className='ts-td-center ts-brown-3' colSpan={2}>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
      </tr>
    )
  }

  function DesktopDoubleYes({ title, txt }) {
    return (
      <tr>
        <td className='ts-brown-1'>
          <h4>{title}</h4>
          <p>{txt}</p>
        </td>
        <td className='ts-td-center ts-brown-2' colSpan={2}>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
        <td className='ts-td-center ts-brown-3' colSpan={2}>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
      </tr>
    )
  }

  function Doubleyes() {
    return (
      <tr>
        <td className='ts-td-center ts-brown-2'>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
        <td className='ts-td-center ts-brown-3'>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
      </tr>
    )
  }

  function Onceyes() {
    return (
      <tr>
        <td className='ts-td-center ts-brown-2'></td>
        <td className='ts-td-center ts-brown-3'>
          <svg className='ts-check' viewBox="0 0 32 25">
            <path
              d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
            </path>
          </svg>
        </td>
      </tr>
    )
  }

  function MobileTitle1(title) {
    return (
      <tr>
        <td className='ts-brown-1' colSpan={4}>{title}</td>
      </tr>
    )
  }

  function MobileTitle2(title) {
    return (
      <tr>
        <td className='ts-table-title' colSpan={4}>{title}</td>
      </tr>
    )
  }

  function MobileSpan1(text) {
    return (
      <td className='ts-brown-2 ts-td-center'>
        <span>{text}</span>
      </td>
    )
  }

  function MobileSpan2(text) {
    return (
      <td className='ts-brown-3 ts-td-center'>
        <span>{text}</span>
      </td>
    )
  }

  return (
    <div className='ts-price-table'>
      <div className="ts-desktop-table">
        <table>
          <thead>
            <th></th>
            <th className='ts-brown-2' colSpan={2}>Basic</th>
            <th className='ts-brown-3' colSpan={2}>Professional</th>
          </thead>
          <tbody>
            {DesktopTitle1('General Features')}
            <tr>
              <td className='ts-brown-1'>
                <h4>Scanner type</h4>
                <p>Full scan requires domain verification via validation file (HTTPS)</p>
              </td>
              <td className='ts-brown-2 ts-td-center' colSpan={2}>
                <p>Quick scan</p>
              </td>
              <td className='ts-brown-3 ts-td-center' colSpan={2}>
                <p>Full Scan</p>
              </td>
            </tr>
            {DesktopOnceYes({ title: "OWASP Top 10 Vulnerability Scanning", txt: 'Scans for the OWASP Top 10 vulnerabilities. A complete list of our scanners in the "Features" tab.' })}
            {DesktopOnceYes({ title: 'Automated Domain Verification', txt: 'Verify scan targets for invasive scanning through placing a file on your system or a specific API-response for a GET-statement.' })}
            {DesktopOnceYes({ title: 'Speed up Scanning', txt: 'Enables adjusting the scan requests per second.' })}
            {DesktopDoubleYes({ title: 'Access to security wiki', txt: 'Includes general descriptions, code snippets for fixing, and videos.' })}
            {DesktopDoubleYes({ title: 'Regular Updates', txt: 'We provide regular updates and new features to our scanners and the user interface.' })}
            {DesktopTitle1('Scan Targets')}
            {DesktopDoubleYes({ title: 'Multi Page Web Applications', txt: 'An application, which consists of multiple individual pages. This is typically the case, if you have a HTML, JSP, etc. per page displayed in your browser.' })}
            {DesktopOnceYes({ title: 'Deep Scan – Automated JavaScript Scanning', txt: 'An application, which is based on JavaScript. This is typically the case, if the application is based on or uses frameworks like Angular, React, Vue, jQuery or similar.' })}
            {DesktopOnceYes({ title: 'REST API Scanning', txt: 'An application programming interface (API), which is documented in a Swagger / OpenAPI version 2 file. Usually the documentation is stored in a swagger.json file, which can be imported by the scanner.' })}
            {DesktopTitle1('Authentication')}
            {DesktopOnceYes({ title: 'Application Login with Credentials', txt: 'Log in to your application via BasicAuth or with user credentials (user/password).' })}
            {DesktopOnceYes({ title: 'Advanced Application Login', txt: 'Log in to your application by defining keys and values for Cookies, HTTP Headers, or GET parameters.' })}
            {DesktopTitle1('Scheduling / Automation')}
            {DesktopDoubleYes({ title: 'Detailed PDF Reporting', txt: 'Get our detailed pdf reporting with a high-level scan summary, detailed scan findings, general and specific descriptions of the found attack vectors, and remediation support.' })}
            {DesktopOnceYes({ title: 'Scheduled Scanning', txt: 'Create a scan schedule for your project to start scans on a daily or weekly basis.' })}
            {DesktopOnceYes({ title: 'Machine-readable reports', txt: 'Get our machine-readable reports in CSV, JSON, or XML format.' })}
            {DesktopTitle1('Scanning vulnerabilities and security issues')}
            {DesktopDoubleYes({ txt: 'Server Version Fingerprinting' })}
            {DesktopDoubleYes({ txt: 'Web Application Version Fingerprinting' })}
            {DesktopDoubleYes({ txt: 'CVE Comparison' })}
            {DesktopDoubleYes({ txt: 'Heartbleed' })}
            {DesktopDoubleYes({ txt: 'ROBOT, BREACH, BEAST' })}
            {DesktopDoubleYes({ txt: 'Old SSL/TLS Version' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS Cipher Order' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS Perfect Forward Secrecy' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS Session Resumption' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS secure algorithm' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS key size' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS trust chain' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS expiration date' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS revocation (CRL, OCSP)' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS OCSP stapling' })}
            {DesktopDoubleYes({ txt: 'Security Headers' })}
            {DesktopDoubleYes({ txt: 'Content-Security-Policy headers' })}
            {DesktopDoubleYes({ txt: 'Portscan' })}
            {DesktopOnceYes({ txt: 'Boolean-based blind SQL Injection' })}
            {DesktopOnceYes({ txt: 'Time-based blind SQL Injection' })}
            {DesktopOnceYes({ txt: 'Error-based SQL Injection' })}
            {DesktopOnceYes({ txt: 'UNION query-based SQL Injection' })}
            {DesktopOnceYes({ txt: 'Stacked queries SQL Injection' })}
            {DesktopOnceYes({ txt: 'Out-of-band SQL Injection' })}
            {DesktopOnceYes({ txt: 'Reflected Cross-site scripting (XSS)' })}
            {DesktopOnceYes({ txt: 'Stored Cross-site scripting (XSS)' })}
            {DesktopOnceYes({ txt: 'Cross-Site Request Forgery (CSRF)' })}
            {DesktopOnceYes({ txt: 'File Inclusion' })}
            {DesktopOnceYes({ txt: 'Directory Fuzzer' })}
            {DesktopOnceYes({ txt: 'File Fuzzer' })}
            {DesktopOnceYes({ txt: 'Command Injection' })}
            {DesktopOnceYes({ txt: 'XML External Entity Processing (XXE)' })}
            {DesktopTitle1('Billing Cycle')}
            <tr>
              <td className='ts-brown-1'>Payment type</td>
              <td className='ts-brown-2 ts-txt-price'>
                <span>One-time</span>
              </td>
              <td className='ts-brown-2 ts-txt-price'>
                <span>Yearly</span>
              </td>
              <td className='ts-brown-3 ts-txt-price'>
                <span>One-time</span>
              </td>
              <td className='ts-brown-3 ts-txt-price'>
                <span>Yearly</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>Number of scans annualy</td>
              <td className='ts-brown-2 ts-td-center'>
                <span>1</span>
              </td>
              <td className='ts-brown-2 ts-td-center'>
                <span>12</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>1</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>12</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>1 year</td>
              <td className='ts-brown-2 ts-td-center'>
                <span>$15.00</span>
              </td>
              <td className='ts-brown-2 ts-td-center'>
                <span>$150.00</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>$48.00</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>$480.00</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>2 years</td>
              <td className='ts-brown-2'></td>
              <td className='ts-brown-2 ts-td-center'>
                <span>$262.50</span>
              </td>
              <td className='ts-brown-3'></td>
              <td className='ts-brown-3 ts-td-center'>
                <span>$840.00</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>3 years</td>
              <td className='ts-brown-2'></td>
              <td className='ts-brown-2 ts-td-center'>
                <span>$375.00</span>
              </td>
              <td className='ts-brown-3'></td>
              <td className='ts-brown-3 ts-td-center'>
                <span>$1,200.00</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'></td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="#">Order</a>
              </td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="#">Order</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="#">Order</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="#">Order</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ts-mobile-table">
        <table>
          <thead>
            <th className='ts-brown-2'>Basic</th>
            <th className='ts-brown-3'>Professional</th>
          </thead>
          <tbody>
            {MobileTitle2('General Features')}
            {MobileTitle1('OWASP Top 10 Vulnerability Scanning')}
            {MobileTitle1('Scan type')}
            <tr>
              <td className="ts-brown-2">Quick scan</td>
              <td className="ts-brown-3">Full Scan</td>
            </tr>
            {Onceyes()}
            {MobileTitle1('Automated Domain Verification')}
            {Onceyes()}
            {MobileTitle1('Speed up Scanning')}
            {Onceyes()}
            {MobileTitle1('Access to security wiki')}
            {Onceyes()}
            {MobileTitle1('Regular Updates')}
            {Onceyes()}
            {MobileTitle2('Scan Targets')}
            {MobileTitle1('Multi Page Web Applications')}
            {Doubleyes()}
            {MobileTitle1('Deep Scan – Automated JavaScript Scanning')}
            {Onceyes()}
            {MobileTitle1('REST API Scanning')}
            {Onceyes()}
            {MobileTitle2('Authentication')}
            {MobileTitle1('Application Login with Credentials')}
            {Onceyes()}
            {MobileTitle1('Advanced Application Login')}
            {Onceyes()}
            {MobileTitle2('Scheduling / Automation')}
            {MobileTitle1('Detailed PDF Reporting')}
            {Doubleyes()}
            {MobileTitle1('Scheduled Scanning')}
            {Onceyes()}
            {MobileTitle1('Machine-readable reports')}
            {Onceyes()}
            {MobileTitle2('SScanning vulnerabilities and security issues')}
            {MobileTitle1('Server Version Fingerprinting')}
            {Doubleyes()}
            {MobileTitle1('Web Application Version Fingerprinting')}
            {Doubleyes()}
            {MobileTitle1('CVE Comparison')}
            {Doubleyes()}
            {MobileTitle1('Heartbleed')}
            {Doubleyes()}
            {MobileTitle1('ROBOT, BREACH, BEAST')}
            {Doubleyes()}
            {MobileTitle1('Old SSL/TLS Version')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS Cipher Order')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS Perfect Forward Secrecy')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS Session Resumption')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS secure algorithm')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS key size')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS trust chain')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS expiration date')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS revocation (CRL, OCSP)')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS OCSP stapling')}
            {Doubleyes()}
            {MobileTitle1('Security Headers')}
            {Doubleyes()}
            {MobileTitle1('Content-Security-Policy headers')}
            {Doubleyes()}
            {MobileTitle1('Portscan')}
            {Doubleyes()}
            {MobileTitle1('Boolean-based blind SQL Injection')}
            {Onceyes()}
            {MobileTitle1('Time-based blind SQL Injection')}
            {Onceyes()}
            {MobileTitle1('Error-based SQL Injection')}
            {Onceyes()}
            {MobileTitle1('UNION query-based SQL Injection')}
            {Onceyes()}
            {MobileTitle1('Stacked queries SQL Injection')}
            {Onceyes()}
            {MobileTitle1('Out-of-band SQL Injection')}
            {Onceyes()}
            {MobileTitle1('Reflected Cross-site scripting (XSS)')}
            {Onceyes()}
            {MobileTitle1('Stored Cross-site scripting (XSS)')}
            {Onceyes()}
            {MobileTitle1('Cross-Site Request Forgery (CSRF)')}
            {Onceyes()}
            {MobileTitle1('File Inclusion')}
            {Onceyes()}
            {MobileTitle1('Directory Fuzzer')}
            {Onceyes()}
            {MobileTitle1('File Fuzzer')}
            {Onceyes()}
            {MobileTitle1('Command Injection')}
            {Onceyes()}
            {MobileTitle1('XML External Entity Processing (XXE)')}
            {Onceyes()}
            {MobileTitle2('Billing Cycle')}
            {MobileTitle1('Payment type')}
            <tr>
              {MobileSpan1('One-time')}
              {MobileSpan1('Yearly')}
            </tr>
            <tr>
              {MobileSpan2('One-time')}
              {MobileSpan2('Yearly')}
            </tr>
            {MobileTitle1('Number of scans annualy')}
            <tr>
              {MobileSpan1('1')}
              {MobileSpan1('12')}
            </tr>
            <tr>
              {MobileSpan2('1')}
              {MobileSpan2('12')}
            </tr>
            {MobileTitle1('1-year')}
            <tr>
              {MobileSpan1('$15.00')}
              {MobileSpan1('$150.00')}
            </tr>
            <tr>
              {MobileSpan2('$48.00')}
              {MobileSpan2('$480.00')}
            </tr>
            {MobileTitle1('2-years')}
            <tr>
              {MobileSpan1('')}
              {MobileSpan1('$262.50')}
            </tr>
            <tr>
              {MobileSpan2('')}
              {MobileSpan2('$840.00')}
            </tr>
            {MobileTitle1('3-years')}
            <tr>
              {MobileSpan1('')}
              {MobileSpan1('$375.00')}
            </tr>
            <tr>
              {MobileSpan2('')}
              {MobileSpan2('$1,200.00')}
            </tr>
            <tr>
              <td className='ts-brown-2'>
                <a className='ts-order' href="">Order</a>
              </td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="">Order</a>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-3'>
                <a className='ts-order' href="">Order</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="">Order</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}