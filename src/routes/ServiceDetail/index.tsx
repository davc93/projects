import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Paybutton } from "../../components/Paybutton";
import { context } from "../../context";
import { Service } from "../../models";
import { Item } from "../../models/item.model";

export const ServiceDetail = () => {
  const handleClick = () => {
    window.location.href = "mailto:davc93@gmail.com";
  };
  const { services }: any = useContext(context);
  const { slug } = useParams();
  const service: Service = services.find(
    (service: Service) =>
      service.name.replaceAll(" ", "-").toLowerCase() == slug
  );

  if (service) {

    const items= {
      items: [
        {
          quantity:1,
          unit_price:service.price,
          description:service.description
        }
      ]
    } 
    const priceFormated = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CLP",
    });
    return (
      <header className="mx-6 md:mx-24 mt-8">
        <article className="flex flex-col gap-4 md:w-2/3">
          <h1>{service.name}</h1>
          <p>{service.description}</p>
          <span>{priceFormated.format(service.price)} / Per section</span>
          {service.discount && (
            <span>{service.price * (1 - service.discount)}</span>
          )}
          <p>Each section has the size of the monitor display</p>
          <div className="service-detail__buttons flex flex-col md:flex-row">
            <button onClick={handleClick} className="btn btn--primary">
              Contactar
            </button>
            <Paybutton items={items} />
          </div>
        </article>
      </header>
    );
  } else {
    return <></>;
  }
};
