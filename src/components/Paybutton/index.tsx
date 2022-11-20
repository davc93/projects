import React from "react";
import { Item } from "../../models/item.model";

const publicKey = import.meta.env.VITE_MP_PUBLIC;
declare var MercadoPago: any;
export const Paybutton = (props:any) => {

  const [preference, setPreference] = React.useState('')
  React.useEffect(() => {
  
    const createPreference = async (items:Item[]) => {
     
      const response = await fetch(
        "https://davc93.uw.r.appspot.com/create_preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(items),
        }
      );
      const preference = await response.json();
      setPreference(preference.id)

    
      
    };
    createPreference(props.items);
  }, []);
  const handleClick = () => {
    debugger
    const mp = new MercadoPago(publicKey, {
      locale: "es-CL",
    });

    const checkout = mp.checkout({
      preference: {
        id: preference,
      }
    });
    checkout.open()
    
  }

  return (
    <div className="btn btn--primary" onClick={handleClick}>
      Pagar
    </div>
  );
};
