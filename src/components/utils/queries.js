import { gql } from "apollo-boost";

export default{
    query:{

    },
    mutation:{
        CREATE_COMPANY : gql`
    mutation  createCompany( $email: String! , $password: String! , $name: String! , $city: String! , $address: String! , $phone : Int! , $manager: String! ) {
      createCompany( company :{
        email:$email ,
        password:$password ,
        name:$name ,
        city:$city ,
        address:$address ,
        phone:$phone ,
        manager:$manager
      }) 
      {
        id
      }
    }
    `,
    CREATE_DRIVER : gql`
    mutation  createDriver( $email: String! , $password: String! , $name: String! , $lastname: String! , $age: Int!  $address: String!, $phone : Int!  , $vehicle: String! ) {
      createDriver( driver :{
        email:$email ,
        password:$password ,
        name:$name ,
        lastname:$lastname ,
        age:$age,
        address:$address,
        phone:$phone ,
        vehicle:$vehicle
      }) 
      {
        id
      }
    }
    `,
    LOGIN_DRIVER : gql`
  	mutation loginDriver($email : String! , $password: String!){
	  	loginDriver( driver : {
        email:$email,
        password:$password
      })
	  }
    `,

    LOGIN_COMPANY : gql`
    mutation loginCompany($email : String! , $password: String!){
      loginCompany( company : {
        email:$email,
        password:$password
      })
    }
    `
  

    },


}