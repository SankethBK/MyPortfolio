import React from 'react';

import './PrivacyPolicies.css';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

function Dairyaholic() {
  return (
    <>
      <div className='privacy-policies-container'>
        <div id='corner-tl' className='corner'></div>
        <div id='corner-tr' className='corner'></div>

        {/* --- */}
        <h1 className='main-heading'>Dairyaholic Privacy Policies</h1>

        {/* --- */}
        <h3 className='secondary-heading'>Introduction</h3>
        <p className='content'>
          Our privacy policy will help you understand what information we
          collect at Dairyaholic, how Dairyaholic uses it, and what choices you
          have. Dairyaholic built the Dairyaholic app as a free app. This
          SERVICE is provided by Dairyaholic at no cost and is intended for use
          as is. If you choose to use our Service, then you agree to the
          collection and use of information in relation with this policy. The
          Personal Information that we collect are used for providing and
          improving the Service. We will not use or share your information with
          anyone except as described in this Privacy Policy. The terms used in
          this Privacy Policy have the same meanings as in our Terms and
          Conditions, which is accessible in our website, unless otherwise
          defined in this Privacy Policy.
        </p>

        {/* --- */}
        <h3 className='secondary-heading'>Information Collection and Use</h3>
        <p className='content'>
          We only collect user credentials (email and password). Your notes,
          images and videos belonging to Dairyaholic will be stored in your
          google drive only if you consent the app to do so. We do not collect
          any of your personal data including notes, images and videos which are
          part of Dairyaholic app. Your email will be used only to send password
          recovery emails when you request for same.
        </p>

        {/* ---- */}
        <h3 className='secondary-heading'>Location Information</h3>
        <p className='content'>
          We do not collect any of the location related information.
        </p>

        {/* --- */}
        <h3 className='secondary-heading'>Device Information</h3>
        <p className='content'>
          We do not collect information about your device.
        </p>

        {/* --- */}
        <h3 className='secondary-heading'>Service Providers</h3>
        <p className='content'>
          We may employ third-party companies and individuals due to the
          following reasons:
        </p>

        <ul className='privacy-policy-list'>
          <li className='list-content content'>
            To provide the Service on our behalf;
          </li>
          <li className='list-content content'> To facilitate our Service;</li>
          <li className='list-content content'>
            To perform Service-related services; or
          </li>
          <li className='list-content content'>
            To assist us in analyzing how our Service is used.
          </li>
        </ul>

        <p className='content'>
          We want to inform users of this Service that these third parties have
          access to your Personal Information. The reason is to perform the
          tasks assigned to them on our behalf. However, they are obligated not
          to disclose or use the information for any other purpose.
        </p>

        {/* ---- */}

        <h3 className='secondary-heading'>Security</h3>
        <p className='content'>
          We value your trust in providing us your Personal Information, thus we
          are striving to use commercially acceptable means of protecting it.
          But remember that no method of transmission over the internet, or
          method of electronic storage is 100% secure and reliable, and we
          cannot guarantee its absolute security.
        </p>

        {/*  */}
        <h3 className='secondary-heading'>Children’s Privacy</h3>
        <p className='content'>
          This Service is a note taking application, it does not carries any
          content that could be inappropriate for children of any age.
        </p>

        {/*  */}
        <h3 className='secondary-heading'>Data Loss</h3>
        <p className='content'>
          We have ensured our app does not cause data loss under normal
          circumstances. However, there are higher risks involved while syncing
          notes with cloud and Dairyaholic will not be accountable for any data
          loss that might occur.
        </p>

        {/*  */}
        <h3 className='secondary-heading'>Changes to This Privacy Policy</h3>
        <p className='content'>
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page. These changes are effective immediately, after they are posted
          on this page.
        </p>

        {/*  */}
        <h3 className='secondary-heading'>Contact Us</h3>
        <p className='content'>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us.
        </p>

        <div className='contact-container'>
          <div className='contact-icon-container'>
            <EmailOutlinedIcon className='contact-icon' />
          </div>
          <div className='contact-details'>
            <h4 className='contact-type'>Email:</h4>
            <p className='contact-detail'>sankethbk7777@gmail.com</p>
          </div>
        </div>

        {/*  */}

        <div id='corner-br' className='corner'></div>
        <div id='corner-bl' className='corner'></div>
      </div>
      <div className='buffer-space'></div>
    </>
  );
}

export default Dairyaholic;
