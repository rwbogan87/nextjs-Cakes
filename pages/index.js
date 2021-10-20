//* our-domain.com/
import Link from 'next/link';
import { Fragment, useState } from 'react';
import Button from "@material-ui/core/Button";

function HomePage() {
    return (
        <Fragment>
            <Link href="/cakes">
                <Button color='inherit'
                    style={{
                        cursor: 'pointer',
                    }}
                    >Cakes Gallery</Button>
            </Link>
            <p>Home</p>
        </Fragment>
    )
}

export default HomePage