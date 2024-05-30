import { FC } from "react";
import ContactHeader from "../../components/contact/Contactheader";
import ContactForm from "../../components/contact/ContactForm";

const Contact: FC = () => {
  return (
    <div className="mt-24">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Contact;
