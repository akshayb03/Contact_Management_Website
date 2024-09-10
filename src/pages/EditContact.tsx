import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContactType } from "../utils/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { editContact } from "../store/contact";
import { ContactButton } from "../components/ContactButton";
import { Form } from "../components/Form";

export const EditContact = () => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const existingContact = location.state.contact;
  const [newContact, setNewContact] = useState<ContactType>({
    id: "",
    firstName: "",
    lastName: "",
    status: "",
  });
  const handleChange = (e: any) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const updateContact = (e: any) => {
    dispatch(editContact(newContact));
    navigate("/");
  };
  useEffect(() => {
    if (existingContact) {
      setNewContact(existingContact);
    }
  }, [existingContact]);
  return (
    <div className="flex flex-col items-center pt-20 w-full lg:w-1/2">
      <p className="text-2xl font-bold mb-4">Edit Contact Screen</p>
      <Form changeHandler={handleChange} newContact={newContact} />
      <div className="pt-6" />
      <ContactButton text={"Edit Contact"} clickHandler={updateContact} />
      <div className="h-12" />
    </div>
  );
};
