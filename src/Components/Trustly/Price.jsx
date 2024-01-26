import React from 'react'

export default function Price() {
  return (
    <div className='ts-price-table'>
      <div className="ts-desktop-table">
        <table>
          <thead>
            <th></th>
            <th colSpan={2}>Basic</th>
            <th colSpan={2}>Professional</th>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>General Features</td>
            </tr>
            <tr>
              <td>
                <h4>Scanner type</h4>
                <p>Full scan requires domain verification via validation file (HTTPS)</p>
              </td>
              <td colSpan={2}>
                <p>Quick scan</p>
              </td>
              <td colSpan={2}>
                <p>Full Scan</p>
              </td>
            </tr>
            <tr>
              <td>
                <h4>OWASP Top 10 Vulnerability Scanning</h4>
                <p>Scans for the OWASP Top 10 vulnerabilities. A complete list of our scanners in the "Features" tab.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Automated Domain Verification</h4>
                <p>Verify scan targets for invasive scanning through placing a file on your system or a specific API-response for a GET-statement.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Speed up Scanning</h4>
                <p>Enables adjusting the scan requests per second.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Access to security wiki</h4>
                <p>Includes general descriptions, code snippets for fixing, and videos.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Regular Updates</h4>
                <p>We provide regular updates and new features to our scanners and the user interface.</p>
              </td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>Scan Targets</td>
            </tr>
            <tr>
              <td>
                <h4>Multi Page Web Applications</h4>
                <p>An application, which consists of multiple individual pages. This is typically the case, if you have a HTML, JSP, etc. per page displayed in your browser.</p>
              </td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Deep Scan – Automated JavaScript Scanning</h4>
                <p>An application, which is based on JavaScript. This is typically the case, if the application is based on or uses frameworks like Angular, React, Vue, jQuery or similar.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                <h4>REST API Scanning</h4>
                <p>An application programming interface (API), which is documented in a Swagger / OpenAPI version 2 file. Usually the documentation is stored in a swagger.json file, which can be imported by the scanner.</p>
              </td>
              <td colSpan={2}></td>
              <td colSpan={2}>
                <svg className='ts-check' viewBox="0 0 32 25">
                  <path
                    d="M31.904 5.088c0 .504-.144 1.008-.505 1.368L13.696 24.16c-.431.36-.863.575-1.44.575a1.97 1.97 0 0 1-1.368-.575L.596 13.94c-.358-.431-.502-.862-.502-1.44 0-.504.144-1.007.505-1.368l2.806-2.807c.432-.432.864-.576 1.44-.576.504 0 1.007.144 1.367.576l6.046 6.045L25.788.84c.36-.36.862-.575 1.368-.575.575 0 1.007.216 1.439.575l2.806 2.808c.36.431.505.862.505 1.439l-.002.001z">
                  </path>
                </svg>
              </td>
            </tr>
            <tr>
              <td colSpan={5}>Authentication</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}