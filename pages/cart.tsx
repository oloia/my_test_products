import * as React from 'react';
import { Button, createStyles, Grid, List, ListItem, ListItemText, makeStyles, Theme } from '@material-ui/core';
import Link from 'next/link';
import productsStores from '../src/stores';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '80%',
			backgroundColor: theme.palette.background.paper,
		},
	}),
);

const Cart = observer(() => {
	const classes = useStyles();
	const { listProductStore } = productsStores;
	const { totalPrice, removeFromCart, cart } = listProductStore;

	return (
		<Grid container justifyContent="space-between" direction="row" style={{ marginTop: 100 }}>
			<Grid item xs={3}>
				<Grid container direction="column">
					<Grid item>
						<Link href={'/'}>
							<a>Back to Catalog</a>
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={9}>
				<Grid container spacing={6}>
					<div className={classes.root}>
						<List component="nav" aria-label="main mailbox folders">
							{cart.map(item => (
								<ListItem button key={item.id}>
									<ListItemText primary={item.id} />
									<ListItemText primary={item.name} />
									<ListItemText primary={item.price} />
									<Button variant={'contained'} onClick={() => removeFromCart(item)}>Remove from cart</Button>
								</ListItem>
							))}
						</List>
						<h1>Total price: ${totalPrice}</h1>
					</div>
				</Grid>
			</Grid>
		</Grid>
	);
});

export default Cart;
