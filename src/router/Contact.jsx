import React from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../data/item";
import { useMemo } from "react";

export const Contact = () => {
  const params = useParams();
  const contact = useMemo(
    () => getContact(params.contactId),
    [params.contactId]
  );

  if (!contact) {
    throw new Error("Contact does not exist!");
  }

  return (
    <div className="contactContainer">
      <h1>{contact.name}</h1>
      <p>{contact.phone}</p>
      <p>{contact.favorite?"favorite" : "Regular contact"}</p>
    </div>
  );
};
export default Contact;
