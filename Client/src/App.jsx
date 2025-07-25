import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact"; // Make sure the name matches the export!
import AddContact from "./AddContact";
import { ToastContainer } from "react-toastify";
const App = () => {
  const [contacts, setContact] = useState([]);
  const [showmodal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [reload, setReload] = useState(false);
  const [id, setId] = useState();
  const url = "http://localhost:5000";
  useEffect(() => {
    let fetchdatafromapi = async () => {
      let fetchdata = await axios.get(`${url}/`, {
        headers: { "Content-Type": "application/json" },
      });
      setContact(fetchdata.data.contact);
    };
    fetchdatafromapi();
  }, [reload]);

  let showModelCode = () => {
    setShowModal(!showmodal);
    setOpacity(!opacity);
  };
  return (
    <>
      <ToastContainer />
      <AddContact
        showModelCode={showModelCode}
        showmodal={showmodal}
        url={url}
        reload={reload}
        setReload={setReload}
        id={id}
        setId={setId}
        contacts={contacts}
      />
      <Contact
        contacts={contacts}
        opacity={opacity}
        url={url}
        reload={reload}
        setReload={setReload}
        id={id}
        setId={setId}
        showModelCode={showModelCode}
      />
    </>
  );
};

export default App;