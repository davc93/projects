import React from "react";

const publicKey = import.meta.env.VITE_MP_PUBLIC;

export const Paybutton = () => {
  React.useEffect(() => {
    const createPreference = async () => {
      const data = {
        items: [
          {
            description: "Hamburguesa",
            quantity: 1,
            unit_price: 10000,
          },
        ],
      };
      const response = await fetch("https://davc93.uw.r.appspot.com/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const preference = await response.json()
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
    createPreference();
  }, []);

  

  return <button className="cho-container"></button>;
};
