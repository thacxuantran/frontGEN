import React from 'react';
import PropTypes from 'prop-types';
import ListCompany from '../components/ListCompany/ListCompany';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

function ListCompanyPage(props) {
	return (
		<>
			<Header />
			<ListCompany />
			<Footer />
		</>
	);
}

ListCompanyPage.propTypes = {};

export default ListCompanyPage;
