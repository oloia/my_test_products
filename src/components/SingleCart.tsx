import React, { FC } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import productsStores from '../../src/stores';
import { ProductDetail } from '../../src/services/listProducts/types';
import { ASSETS_URL } from '../../src/config/products/endpoints';

interface SingleCartProps {
	product: ProductDetail
}

const SingleCart: FC<SingleCartProps> = observer((props) => {
	const { product } = props;
	const { name, image, price, id } = product;
	const { listProductStore } = productsStores;
	const { addToCart, removeFromCart } = listProductStore;

	return (
		<Card>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				src={ASSETS_URL(image)}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>
				<Typography gutterBottom variant="h5" component="div">
					Price: ${price}
				</Typography>
			</CardContent>
			<CardActions>
				<Button variant={'contained'} onClick={() => addToCart(product)}>Add to cart</Button>
				<Button variant={'contained'} onClick={() => removeFromCart(product)}>Remove from cart</Button>
			</CardActions>
		</Card>
	);
});

export default SingleCart;
