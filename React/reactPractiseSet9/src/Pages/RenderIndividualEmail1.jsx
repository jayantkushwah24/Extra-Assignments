import { useContext } from "react"
import { EmailContext } from "../App"
import { useParams } from "react-router-dom";

export function RenderIndividualEmail(){
  const{data} = useContext(EmailContext);
  const {id} = useParams();
  const emails = data.emails;
  const individualEmail = emails.find(email => email.id === parseInt(id));

  return(
    <>
      <h1>{individualEmail.subject}</h1>
      <p>From : {individualEmail.sender}</p>
      <p>Message : {individualEmail.message}</p>
    </>
  )
}