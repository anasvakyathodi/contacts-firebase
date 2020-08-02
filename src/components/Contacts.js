import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDB from "../firebase";
const Contacts = () => {
  const addOrEdit = (obj) => {
    if (currentId == "") {
      firebaseDB.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    } else {
      firebaseDB.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure ?")) {
      firebaseDB.child(`contacts/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState("");
  useEffect(() => {
    firebaseDB.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      } else {
        setContactObjects({});
      }
    });
  }, []);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <div className="container">
            <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
          </div>
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-striped">
            <thead className="thread-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => (
                <tr key={id}>
                  <td>{contactObjects[id].fullname}</td>
                  <td>{contactObjects[id].mobile}</td>
                  <td>{contactObjects[id].email}</td>
                  <td>
                    <a
                      className="btn text-primary"
                      onClick={() => setCurrentId(id)}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a className="btn text-danger" onClick={() => onDelete(id)}>
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
