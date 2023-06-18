import { gql } from "apollo-angular";

const GET_PRODUCTS = gql`
    query GetInfo {
        productsCollection {
        items {
            productImage
            productName
            numberInPresentation
            kilocalories
        }
        }
    }
`

export { GET_PRODUCTS };