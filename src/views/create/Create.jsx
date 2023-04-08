import React, { useState } from "react";
import ShowAlert from "./alert/ShowAlert";
import Header from "./header/Header";
import Step1 from "./steps/Step1";
import data from "../../data/data";

function Create() {
  const [isLoading, setIsLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const [name, setName] = useState("");
  const [caseRef, setCaseRef] = useState("");
  const [station, setStation] = useState("");
  const [offence, setOffence] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("Uganda");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleTelephoneChange = (e) => {
    console.log(telephone);
    const numbers = e.target.value.split(",");
    setTelephone(
      numbers.map((number) => {
        return number.trim();
      })
    );
  };

  const [front, setFront] = useState(
    "url('https://randomuser.me/api/portraits/lego/7.jpg')"
  );
  const [left, setLeft] = useState(
    "url('https://randomuser.me/api/portraits/lego/7.jpg')"
  );
  const [right, setRight] = useState(
    "url('https://randomuser.me/api/portraits/lego/7.jpg')"
  );
  const [hind, setHind] = useState(
    "url('https://randomuser.me/api/portraits/lego/7.jpg')"
  );

  const [frontImage, setFrontImage] = useState("");
  const [leftImage, setLeftImage] = useState("");
  const [rightImage, setRightImage] = useState("");
  const [hindImage, setHindImage] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      switch (e.target.id) {
        case "formFileFront":
          setFrontImage(reader.result);
          setFront(`url(${reader.result})`);
          break;
        case "formFileLeft":
          setLeftImage(reader.result);
          setLeft(`url(${reader.result})`);
          break;
        case "formFileRight":
          setRightImage(reader.result);
          setRight(`url(${reader.result})`);
          break;
        case "formFileHind":
          setHindImage(reader.result);
          setHind(`url(${reader.result})`);
          break;
        default:
          break;
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Header />
      <div className="container">
        {showAlert && (
          <ShowAlert
            type={alertType}
            message={alertMessage}
            setShowAlert={setShowAlert}
          />
        )}
        <div className="row">
          {step1 && (
            <Step1
              functions={{
                handleImageUpload,
                setStep1,
                setStep2,
                setStep3,
                setStep4,
                setShowAlert,
                setAlertType,
                setAlertMessage,
                setName,
                setCaseRef,
                setStation,
                setOffence,
                setSex,
                setAge,
                setNationality,
                setPlaceOfBirth,
                setPresentAddress,
                setTelephone,
                setTelephone,
              }}
              state={{
                front,
                left,
                right,
                hind,
                name,
                caseRef,
                data,
                station,
                offence,
                sex,
                age,
                nationality,
                placeOfBirth,
                presentAddress,
                telephone,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Create;
