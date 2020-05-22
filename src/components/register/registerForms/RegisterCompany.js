import React from 'react';
import { Divider, Form , Button } from 'semantic-ui-react';


export default({handleSubmit}) =>{


const args = {};

const handleChange = (ev,input)=>{
    args[input.name] = input.value;
}

return (
<div>
    <div >
<h1 className="text-center">Sign up your Company!</h1>

<Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

  <Form.Input name='email' label='Company Email' placeholder='Write Email'  onChange={handleChange} />
  <Form.Input name='password' label='Password' type='password' placeholder='Write Password' onChange={handleChange} />
  <Form.Input name='name' label='Company Name' placeholder='Write Name' onChange={handleChange} />
  <Form.Input name='city' label='City' placeholder='Write City' onChange={handleChange} />
  <Form.Input name='address' label='Company Address' placeholder='Write Address' onChange={handleChange} />
  <Form.Input name='phone' label='Contact Phone' type='number' placeholder='Write Phone number' onChange={handleChange}/>
  <Form.Input name='manager' label='Company Manager' placeholder='Write Manager' onChange={handleChange} />

<Button type='submit' 

className="bg-warning "
fluid 
>Sign up</Button>
</Form>
<Divider horizontal > 0</Divider>

    </div>





    
</div>

)
};