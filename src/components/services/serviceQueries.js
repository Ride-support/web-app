import { gql } from "apollo-boost";

export default{
    query:{
        GET_ALL_SERVICES : gql`
            {
                allServicesM{
                    Idcompany
                    Service
                    Name
                    Location
                    Prices
                    Shedule
                }
            }
        `,
    },
    mutation:{
        CREATE_SERVICE : gql`
            mutation CreateService($company_id: Int!,$type_service: String!,$company_name: String!,$company_location: String!,$prices_service: String!,$shedule_service: String!){
                createServiceM(service:{
                    company_id: $company_id,
                    type_service: $type_service,
                    company_name: $company_name,
                    company_location: $company_location,
                    prices_service: $prices_service,
                    shedule_service: $shedule_service
                })
                {
                    Mensaje
                }
            }
        `,
    },
}