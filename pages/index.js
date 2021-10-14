//* our-domain.com/
import Link from 'next/link';
import { Fragment, useState } from 'react';

import styled from 'styled-components';


function HomePage() {
    return (
        <Fragment>
            <h1>Cake Magic</h1>
            <Link href="/cakes">
                <p
                    style={{
                        cursor: 'pointer'
                    }}
                    >Cakes Gallery</p>
            </Link>
        </Fragment>
    )
}

export default HomePage