import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OauthRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log('In OauthRedirect');
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get('code');
    console.log(`searchParams = ${searchParams}`);
    console.log(`authorizationCode = ${authorizationCode}`);

    const redirectUrl = `db-rqndas0qvioj4f1://oauth/callback?code=${authorizationCode}`;

    // Redirect to your app's custom URL scheme
    window.location.href = redirectUrl;
  }, []);

  return (
    <>
      <h1>THis is redirection page</h1>
      <p>you should be redirected soon </p>
      <h1>THis is redirection page</h1>
      <p>you should be redirected soon </p>
      <h1>THis is redirection page</h1>
      <p>you should be redirected soon </p>
      <h1>THis is redirection page</h1>
      <p>you should be redirected soon </p>
    </>
  );
};

export default OauthRedirect;
