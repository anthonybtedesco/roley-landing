import React, { useEffect } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
  email: string;
  modal: boolean;
  setModal: (modal: boolean) => void;
}
const Join = ({ email, modal, setModal }: ModalProps) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  function parsePhoneNumber(phoneNumber: string): string {
    const digitsOnly = phoneNumber.replace(/\D/g, ""); // remove all non-digit characters
    if (digitsOnly.length === 10) {
      return `1${digitsOnly}`; // add default country code of 1 if no country code is given
    } else {
      return digitsOnly;
    }
  }

  const _checkForm = () => {
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{0,2}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (
      !nameRegex.test(formData.firstName) ||
      !nameRegex.test(formData.lastName)
    ) {
      toast.error("Please enter a valid name");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const handleJoin = async () => {
    if (_checkForm()) {
      formData.phone = parsePhoneNumber(formData.phone);
      const res = await fetch("/api/join", {
        body: JSON.stringify(formData),
        method: "POST",
      });
      if (res.status === 200) {
        toast.success("Thanks for joining! We'll be in touch soon!");
        setModal(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, [e.target.name]: value });
  };

  if (ReactModal.defaultStyles.overlay) {
    ReactModal.defaultStyles.overlay.backgroundColor =
      "rgba(255, 255, 255, 0.2)";
  }
  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modal]);
  return (
    <ReactModal className="flex justify-center" isOpen={modal}>
      <div className="primary-color text-darkblue-100 h-fit w-[320px] mt-40 rounded-lg">
        <div className="mt-5 text-4xl font-bold text-center">Join Waitlist</div>
        <div className="flex items-center justify-center">
          <form className="flex flex-col items-center justify-center w-full pt-5 mb-5 space-y-5">
            <input
              type="name"
              name="firstName"
              className="w-4/5 h-10 pl-4 bg-gray-500 rounded-lg"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input
              type="name"
              name="lastName"
              className="w-4/5 h-10 pl-4 bg-gray-500 rounded-lg"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              type="phone"
              name="phone"
              className="w-4/5 h-10 pl-4 bg-gray-500 rounded-lg"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="w-4/5 h-10 pl-4 bg-gray-500 rounded-lg"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </form>
        </div>
        <div className="justify-stretch flex mx-8 space-x-5">
          <button
            onClick={() => setModal(false)}
            className=" bg-hotpink-500 hover:bg-hotpink-600 hover:font-bold w-32 p-2 mb-10 rounded-lg"
          >
            Close
          </button>
          <button
            onClick={handleJoin}
            className=" hover:bg-green-600 hover:font-bold w-64 p-2 mb-10 bg-green-500 rounded-lg"
          >
            Join Waitlist!
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default Join;
