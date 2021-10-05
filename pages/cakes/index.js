import Link from 'next/link';
import { Fragment } from 'react';

//* our-domain.com/cakes

function Cakes() {
    return (
        <Fragment>
            <h1>The Cakes Page</h1>
            <ul>
                <li>
                    <Link href='/cakes/NextJs is cool'>
                        NextJs is cool
                    </Link>

                </li>
                <li>
                    <a href='/cakes/NextJs is cool'>
                        NextJs is cool
                    </a>
                </li>
            </ul>
        </Fragment>
    )
}

export default Cakes