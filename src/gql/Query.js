import { gql } from "@apollo/client";


export const GET_ALBUMS = gql `
query GetAlbums {
    albums{
        id
        title
        user
        photo
   }
}
`;


export const GET_PHOTO = gql `
query GetPhoto {
  photo{
    id
    title
    url
    thumbnailUrl
    album
  }
}
`;

export const GET_USER = gql `
   query getuser {
    User { 
    id
    name
    username
    email
    address
    phone
    website
    company
   }  
}
`