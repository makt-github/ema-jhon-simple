
import React from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Login/userAuth';

const Shipment = () => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => { console.log(data) }

    const auth = useAuth();

  //console.log(watch('example')) // watch input value by passing the name of it

  return (
      
   
    <form className="shipment-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Customers/Consumers Details</h1>
    
      
      <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Your Name" />
      
      {errors.name && <span  className="error">*Name is required</span>}

      
      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Your Email Address" />
      
      {errors.email && <span  className="error">*Email is required</span>}

      
      <input name="phone" ref={register({ required: true })} placeholder="+XXX-Your Phone Number"/>
      {errors.phone && <span className="error">*Phone is required</span>}

      
      <input name="Country" ref={register({ required: true })} placeholder="Country"/>
      {errors.Country && <span className="error">*Your Country is required</span>}

      <input name="Street" ref={register({ required: true })} placeholder="Street" />
      {errors.Street && <span className="error">*Street is required</span>}

      <input name="City" ref={register({ required: true })} placeholder="City"/>
      {errors.City && <span className="error">*City is required</span>}

      <input name="ZipCode" ref={register({ required: true })} placeholder="Zip Code" />
      {errors.ZipCode && <span className="error">*Zip Code is required</span>}

      <input name="PresentAddress" ref={register({ required: true })} placeholder="Present House Address" />
      {errors.PresentAddress && <span className="error">*Present Address is required</span>}


      
      <input className="add-cart-btn" type="submit" value="Confirm Your Details" />
    </form>
  )
};

export default Shipment;