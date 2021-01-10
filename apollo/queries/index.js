import { gql } from '@apollo/client';

export const GET_PORTFOLIO = gql`
    query Portfolio($id: ID) {
        portfolio (id: $id) {
            _id
            title
            company
            companyWebsite
            location
            jobTitle
            description
            startDate
            endDate
        }
    }
`

export const GET_PORTFOLIOS = gql`
    query Portfolios {
        portfolios {
            _id
            title
            company
            companyWebsite
            location
            jobTitle
            description
            startDate
            endDate
        }
    }
`

export const CREATE_PORTFOLIO = gql `
    mutation createPortfolio {
        createPortfolio(input: {
            title: "New Job"
            company: "New Job"
            companyWebsite: "New Job"
            location: "New Job"
            jobTitle: "New Job"
            description: "New Job"
            startDate: "New Job"
            endDate: "New Job"
        }) {
            _id
            title
            company
            companyWebsite
            location
            jobTitle
            description
            startDate
            endDate
        }
    }
`

export const UPDATE_PORTFOLIO = gql`
    mutation updatePortfolio($id: ID) {
        updatePortfolio(id: $id, input: {
            title: "Update Job"
            company: "Update Job"
            companyWebsite: "Update Job"
            location: "Update Job"
            jobTitle: "Update Job"
            description: "Update Job"
            startDate: "Update Job"
            endDate: "Update Job"
        }) {
            _id
            title
            company
            companyWebsite
            location
            jobTitle
            description
            startDate
            endDate
        }
    }
`

export const DELETE_PORTFOLIO = gql`
        mutation DeletePortfolio($id: ID) {
        deletePortfolio(id: $id)
    }
`