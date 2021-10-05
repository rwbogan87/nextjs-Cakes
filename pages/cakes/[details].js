import { useRouter } from 'next/router';

//* our-domain.com/cakes/DYNAMIC PATH   (cakes/anythinghere will direct to this same page)
//! dynamic because of [] in file name

function Details() {
    const router = useRouter();
    //*details is used because its the name of the file
    const cakesId = router.query.details;



    return (
        <>
            <h1>Dynamic Details page</h1>
            <h1>{cakesId}</h1>
        </>
    )

}

export default Details