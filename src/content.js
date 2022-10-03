
import React from 'react'
import { Message, Icon, } from 'semantic-ui-react'
import logo from '/Users/aiswaryaspillai/Desktop/my-app/src/Google-QR.png';
import nlqrocde from '/Users/aiswaryaspillai/Desktop/my-app/src/NL-QRCode.png';
const design = () => (


  <Message color='teal'>
    <Message.Header><Icon name='idea' size='large' />QR-Code API ENDPOINT</Message.Header>
    <div class="ui segment">
      <div class="ui black message">QR-Code is a type of matrix barcode, it uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently.<br />
        <p></p>
        QR Code is a add-on feature into our Newsletter. The need for this feature is for those clients who face internet separation concerns where they are unable to open the links within our automated newsletters.<br />


        <div class="ui white message">

          <div class="ui teal segment">
            <p>

              <h3 class="ui header">QR-CODE API ENDPOINT  <br /></h3>
              <br />
              <a class="ui teal image label">
                <i class="hand point right icon"></i>https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev
              </a>
              <p></p>
              <br/>
              <h3 class="ui header"><i class="lock icon"></i>Securing QR-Code API Endpoint</h3><br/>

              Encrypting and Decrypting the API endpoint.

              <p></p>
              <div class="ui two column grid">
                <div class="column">
                  <div class="ui raised segment">
                    <a class="ui teal ribbon label">Step 1</a>
                    <p></p>
                    <span button class="ui teal basic button" data-tooltip="Generate hash value of the input URL in XML file structure" data-position="bottom left" >
                      https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/hash?a
                    </span>

                  </div>
                </div>
                <div class="column">
                  <div class="ui segment">
                    <a class="ui teal right ribbon label">Step 2</a>
                    <p></p>
                    <span button class="ui teal basic button" data-tooltip="Pass the generated hash value to the query string parameter to get the QR-CODE of the input URL" data-position="bottom left">
                      https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/qr?a
                    </span>
                  </div>
                </div>
              </div>
              <p></p>
              1. Generate hash value of the input URL in an XML file structure.
              <p></p>
              <a class="ui black image label">
                <i class="star icon"></i>https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/hash?a = [ input url ]
              </a>
          <p></p>
              2. Passing the generated hash value to the query string parameter.
              <p></p>
              <a class="ui black image label">
                <i class="star icon"></i>https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/qr?a = [ hash value ]
              </a>
              <p></p>
              <br/>
             
              <br/>
              <h3 class="ui header">Example<br /></h3>
              <p></p>
              <table class="ui teal  fixed table">
  <thead>
    <tr><th>Endpoints</th>
    <th>Description</th>
    <th>Output</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/hash?a=https://www.google.com/</td>
      <td>Hash value generation</td>
      <td>
<a>e944d9543f8e709bf81d2db3f41eb40da3d80c721a2100d59952a4820ebbd9ed42c23e306ea74a2e30df76f96885944deebfddebde4e07722154205aa51e137ffc9b30db3a8faafc01c1f5eb99fce4c92498eaa0ea8065fd41f9b03e45b50d2e58bc131c26f9cdf1930cba5f153cf5b7a183c0b28f8a32</a>
</td>
    </tr>
    <tr>
      <td>https://uomprz51d4.execute-api.us-east-1.amazonaws.com/dev/qr?a=e944d9543f8e709bf81d2db3f41eb40da3d80c721a2100d59952a4820ebbd9ed42c23e306ea74a2e30df76f96885944deebfddebde4e07722154205aa51e137ffc9b30db3a8faafc01c1f5eb99fce4c92498eaa0ea8065fd41f9b03e45b50d2e58bc131c26f9cdf1930cba5f153cf5b7a183c0b28f8a32</td>
      <td>QR-Code generation</td>
      <td><div><img src={logo} width="200" height="200" /></div></td>
    </tr>
  </tbody>
</table>
          
            </p>
            <br />
            
          </div>
          

         
        </div>
        <p>
              <h3 class="ui header"><i class="eye icon"></i>How to use the API endpoint on Newsletter </h3>
              <br />
              The QR-Code API Endpoint will be used in the Newsletter XSLT Code and in the code, we can specify the height and width of the QR-Code image. <br />
              A QR-Code will be generated based on each article URL in the newsletter. Any parameters other than the valid URL will restrict the generation of the QR code.
              <p></p>
              <div><img src={nlqrocde} width="900" height="300" /></div>
              <p></p>
              <br/>
              <h4 class="ui header">Sample Newsletter Distribution </h4>
              <br/>
              <a href='https://app.meltwater.com/api/public/newsletters/600666e00d2621001a2cc8e7/newsletter/distribution/63180f920f8c2800140e9e69/html' target="_blank">https://app.meltwater.com/api/public/newsletters/600666e00d2621001a2cc8e7/newsletter/distribution/63180f920f8c2800140e9e69/html</a>
            </p>
      </div>
      
    </div>




  </Message>

)

export default design