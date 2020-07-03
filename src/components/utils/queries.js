import gql from 'graphql-tag';

export default{
    query:{
      GET_ALL_COMPANYS : gql`
      {
        allCompanys{
          id,
          email,
          password
        }
      }
      `,
      GET_ALL_DRIVERS : gql`
      {
        allDrivers{
          id,
          email,
          password
        }
      }
      `,
      GET_ALL_COORDINATES : gql`
      {
        allCoordinates{
          _id,
          latitude,
          longitude
        }
      }
      `,

        GET_DRIVER_BY_ID : gql`
            query driverById($id: Int!){
                driverById(id: $id) {
                    name
                    lastname
                }
            }
        `,


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
        token
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
        token
      }
    }
    `,
    LOGIN_DRIVER : gql`
  	mutation loginDriver($email : String! , $password: String!){
	  	loginDriver( driver : {
        email:$email,
        password:$password
      }){
            token
        }
	  }
    `,

    LOGIN_COMPANY : gql`
    mutation loginCompany($email : String! , $password: String!){
      loginCompany( company : {
        email:$email,
        password:$password
      }){
          token
      }
    }
    `,
    CREATE_RESERVAS:gql`
    mutation createReserva($tipoServicio: String!,$fechaServicio: String! ,$horaServicio:String!,$lugarServicio:String!){
      createReserva(id:"5eb20691c88543c61655446e",reserva: {
        tipoServicio:$tipoServicio
        fechaServicio:$fechaServicio
        horaServicio:$horaServicio
        lugarServicio:$lugarServicio
      }) {
        tipoServicio
        fechaServicio
        horaServicio
        lugarServicio
      }
    }
    `,
        UPDATE_COMPANY : gql`
        mutation UPDATE_COMPANY($id: Int!,$email: String!,$password: String!,$name: String!,$city: String!,$address: String!,$phone: Int!,$manager: String!){
            updateCompany(id: $id, company: {
                email: $email,
                password: $password,
                name: $name,
                city: $city,
                address: $address,
                phone: $phone,
                manager: $manager

            }) {
                id
            }
        }
`,
        UPDATE_DRIVER : gql`
            mutation UPDATE_DRIVER($id: Int!,$email: String!,$password: String!,$name: String!,$lastname: String!,$age: Int!,$address: String!,$phone: Int!,$vehicle: String!){
                    updateDriver(id: $id, driver: {
                        email:$email
                        password:$password
                        name:$name
                        lastname:$lastname
                        age:$age
                        address:$address
                        phone:$phone
                        vehicle:$vehicle
                    
                      }) {
                        id
                      }
                    }
        `,
    },



}