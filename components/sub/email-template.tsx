import * as React from "react";
import { ContactType } from "../main/FormContact";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<ContactType>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Hi, i'm {name}!</h1>
    <h2>my email is:  {email}</h2>
    <h3>message : {message} </h3>
  </div>
);
