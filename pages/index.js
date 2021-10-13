//* our-domain.com/
import Link from 'next/link';
import { Fragment, useState } from 'react';
// import Button from "@material-ui/Button";


function HomePage() {
    return (
        <Fragment>
            <h1>Aishas Cakes Homepage</h1>
            <Link href="/cakes">
                <p>Cakes Gallery</p>
            </Link>
        </Fragment>
    )
}

export default HomePage