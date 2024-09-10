import { useState } from "react";
import { saveNewContact } from "../store/contact";
import { useDispatch } from "react-redux";
import { ContactType } from "../utils/utils";
import { AppDispatch } from "../store";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { ContactButton } from "../components/ContactButton";
import { Form } from "../components/Form";

export const NewContact = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState<ContactType>({
    id: "",
    firstName: "",
    lastName: "",
    status: "",
  });
  const handleChange = (e: any) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const addNewContact = (e: any) => {
    dispatch(saveNewContact({ ...newContact, id: uuidv4() }));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center pt-20 w-full lg:w-1/2">
      <p className="text-2xl font-bold mb-4">Create Contact Screen</p>
      <Form changeHandler={handleChange} newContact={newContact} />
      <div className="pt-6"></div>
      <ContactButton text={"Add Contact"} clickHandler={addNewContact} />
      <div className="h-12" />
    </div>
  );
};
