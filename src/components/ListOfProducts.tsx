import { Badge, Grid } from '@material-ui/core';
import Link from 'next/link';
import { SingleCart } from './index';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import productsStores from '../stores';

const ListOfProducts: FC = observer(() => {
    const { listProductStore } = productsStores;
    const { productDetail, cart, totalPrice } = listProductStore;

    return (
        <Grid container justifyContent="space-between" direction="row" style={{ marginTop: 100}}>
            <Grid item xs={3}>
                <Grid container direction="column">
                    <Grid item>
                      <Link href={'/cart'}>
                        <a>
                          <Badge badgeContent={cart.length} color="secondary" >User Cart</Badge>
                        </a>
                      </Link>
                    </Grid>
                    <Grid item>
                        Product Filter
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={9}>
                <Grid container spacing={6}>
                    {productDetail.map((item) =>
                        <Grid item xs={4} key={item.id}>
                            <SingleCart product={item}/>
                        </Grid>
                    )}

                </Grid>

            </Grid>
        </Grid>
    );
});

export default ListOfProducts
