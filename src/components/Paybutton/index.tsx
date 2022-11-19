import React from "react";
import { Item } from "../../models/item.model";

const publicKey = import.meta.env.VITE_MP_PUBLIC;
declare var MercadoPago: any;
export const Paybutton = (props:any) => {
  React.useEffect(() => {
  
    const createPreference = async (items:Item[]) => {
      debugger
      
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
        debugger
      const preference = await response.json();
    
      const mp = new MercadoPago(publicKey, {
        locale: "es-CL",
      });

      mp.checkout({
        preference: {
          id: preference.id,
        },
        render: {
          container: ".cho-container",
          
          label: "Pagar",
        },
      });
    };
    createPreference(props.items);
  }, []);

  return (
    <div className="cho-container">

    </div>
  );
};
