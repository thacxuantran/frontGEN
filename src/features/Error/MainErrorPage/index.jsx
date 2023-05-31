import React from 'react';

MainErrorPage.propTypes = {};

function MainErrorPage(props) {
  return (
    <>
      <img style={{ width: 500, height: 500, margin: '0 auto' }} src="/mainerror.png"></img>
      <h1 style={{ textAlign: 'center', color: '#0DAB42' }}>INTERNAL SERVER ERROR</h1>
    </>
  );
}

export default MainErrorPage;
