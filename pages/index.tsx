import type { NextPage } from 'next'
import {Container} from "@material-ui/core";
import {ListOfProducts} from "../src/components";
import { useEffect } from 'react';
import productsStores from '../src/stores';

const MainPage: NextPage = () => {
	const { listProductStore } = productsStores;
	const { loadProductDetails } = listProductStore;

	useEffect(() => {
		(async () => {
			await loadProductDetails();
		})()
	}, [])

	return (
		<Container>
			<ListOfProducts />
		</Container>

	)
}

export default MainPage
