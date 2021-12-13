import React, { useState } from "react";
import { gql } from "@apollo/client";
import client from "./apollo-clientCoba.js";

export default function CobaGraphql({ countries }) {
  const initialState = countries;
  const [countryy, setCountryy] = useState(initialState);
  console.log(countries);
  console.log("muncul lu!s");
  return (
    <div>
      <div>
        <h1>Negara yang saya ambil </h1>
        {/*     {countries.map((country) => (
          <div key={country.code}>
            <h3>{country.name}</h3>
            <p>
              {country.code} - {country.emoji}
            </p>
          </div>
        ))}
   */}
      </div>
      <p>
        <a href="https://www.spacex.com/launches/">Latest launches</a> from SpaceX
      </p>
    </div>
  );
}
/*
This will fetch the code, name,
 and emoji for each country, and then 
 we pass along the first four results to the React component via the countries prop. 
 Now that we have the data available, it’s time to update the component to 
 show the page’s data.
*/

//static rendering
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
