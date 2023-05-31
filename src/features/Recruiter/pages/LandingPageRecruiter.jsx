import React from "react";
import Footer from '../../../components/Footer';
import HeaderRecruiter from '../../../components/HeaderRecruiter';
import LandingPage from '../LandingPageRecruiter/LandingPage';
LandingPageRecruiter.propTypes = {};

function LandingPageRecruiter(props) {
  return (
		<div>
			<HeaderRecruiter />
			<LandingPage />
			<Footer />
		</div>
	);
}

export default LandingPageRecruiter;
