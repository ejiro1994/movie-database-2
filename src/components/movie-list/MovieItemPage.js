import React from "react";


const MovieItemPage = ({ movieDetails }) => {

 const title =  movieDetails[0].title

    return (    

        <>

            <p>
                {title}
               


            </p>


        </>


    );
}

export default MovieItemPage;
