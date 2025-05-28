import style from "./contact.module.css";
import ContactCard from './../components/ContactCard/ContactCard';
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={style.contactList}>
        <ContactCard href={`https://api.whatsapp.com/send?phone=5511985885233`} contactName="Telefone" contactContent="+55 11 98588-5233">
            <MdOutlineLocalPhone color="#FFD700" size={35} />
        </ContactCard>
        <ContactCard href={`https://www.instagram.com/dutattooartena/`} contactName="Instagram" contactContent="dutattooartena
">
            <FaInstagram color="#FFD700" size={35} />
        </ContactCard>
        <ContactCard href={`https://www.facebook.com/profile.php?id=100057202496885&locale=pt_BR`} contactName="Facebook" contactContent="Dutattoo arte na pele">
            <FaFacebook color="#FFD700" size={35} />
        </ContactCard>
    </div>
  );
}
