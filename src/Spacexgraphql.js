import React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function Spacexgraphql({ launches }) {
  return (
    <div>
      <h1>Spacex Launches senn!!</h1>
      <div>
        {launches.map((launch) => {
          return (
            <a key={launch.id} href={launch.links.video_link}>
              <h3>{launch.mission_name}</h3>
              <p>
                <strong>Launch Date:</strong> {new Date(launch.launch_date_local).toLocaleDateString("en-US")}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Spacexgraphql;
/* jangan taro
export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });
 
*/
