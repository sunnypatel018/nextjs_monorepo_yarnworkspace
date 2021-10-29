import { GraphQLClient } from "graphql-request";
import {GET_WEATHER_QUERY } from '../../graphql/queries'

export const fetchData = async(cityName)=>{
    const variable = {name:cityName}


    const endpoint = 'https://graphql-weather-api.herokuapp.com/'

    const graphQLClient = new GraphQLClient(endpoint, {header: {authorization : 'Bearer MY_TOKEN'  }})

    const data = await graphQLClient.request(GET_WEATHER_QUERY, variable)
    
    return data;

}