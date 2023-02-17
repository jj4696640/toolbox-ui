import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../../axios";

const directorates = [
  {
    id: 1,
    name: "Directorate of Traffic and Road Safety",
  },
  {
    id: 2,
    name: "Directorate of Information & Communication Technology",
  },
  {
    id: 3,
    name: "Directorate of Human Rights and Legal Services",
  },
  {
    id: 4,
    name: "Directorate of Police Fire Prevention and Rescue Services",
  },
  {
    id: 5,
    name: "Directorate of Police Health Services",
  },
  {
    id: 6,
    name: "Directorate of Forensic Services",
  },
  {
    id: 7,
    name: "Directorate of Criminal Investigations",
  },
  {
    id: 8,
    name: "Directorate Crime Intelligence",
  },
  {
    id: 9,
    name: "Directorate of Human Resource Administration & Management",
  },
  {
    id: 10,
    name: "Directorate of Human Resource Development",
  },
  {
    id: 11,
    name: "Directorate of Interpol and International Relations",
  },
  {
    id: 12,
    name: "Directorate of Kampala Metropolitan Police",
  },
  {
    id: 13,
    name: "Directorate of Logistics and Engineering",
  },
  {
    id: 14,
    name: "Directorate of Operations",
  },
  {
    id: 15,
    name: "Directorate of Chief Political Commissariat",
  },
  {
    id: 16,
    name: "Directorate of Research, Planning & Development",
  },
  {
    id: 17,
    name: "Directorate of Welfare, Production and Sports",
  },
  {
    id: 18,
    name: "Directorate of Counter terrorism",
  },
];

const ranks = [
  {
    id: "1",
    name: "Inspector General",
  },
  {
    id: "2",
    name: "Deputy Inspector General",
  },
  {
    id: "3",
    name: "Assistant Inspector General",
  },
  {
    id: "4",
    name: "Senior Commissioner",
  },
  {
    id: "5",
    name: "Commissioner",
  },
  {
    id: "6",
    name: "Senior Superintendent",
  },
  {
    id: "7",
    name: "Superintendent",
  },
  {
    id: "8",
    name: "Assistant Superintendent",
  },
  {
    id: "9",
    name: "Cadet Assistant Superintendent",
  },
  {
    id: "10",
    name: "Inspector",
  },
  {
    id: "11",
    name: "Assistant Inspector",
  },
  {
    id: "12",
    name: "Head Constable Major (Scraped)",
  },
  {
    id: "13",
    name: "Station Sergeant Constable (Scraped)",
  },
  {
    id: "14",
    name: "Sergeant",
  },
  {
    id: "15",
    name: "Corporal",
  },
  {
    id: "16",
    name: "Constable",
  },
  {
    id: "17",
    name: "Recruited Constable",
  },
  {
    id: "18",
    name: "Special Constable",
  },
];
const stations = [
  {
    id: "1",
    name: "KATWE",
  },
  {
    id: "2",
    name: "KAJJANSI",
  },
  {
    id: "3",
    name: "NSANGI",
  },
  {
    id: "4",
    name: "KABALAGALA",
  },
  {
    id: "5",
    name: "ENTEBBE",
  },
  {
    id: "6",
    name: "CPS KAMPALA",
  },
  {
    id: "7",
    name: "KAWEMPE",
  },
  {
    id: "8",
    name: "OLD KAMPALA",
  },
  {
    id: "9",
    name: "WANDEGEYA",
  },
  {
    id: "10",
    name: "WAKISO",
  },
  {
    id: "11",
    name: "KASANGATI",
  },
  {
    id: "12",
    name: "KAKIRI",
  },
  {
    id: "13",
    name: "JINJA ROAD",
  },
  {
    id: "14",
    name: "KIRA ROAD",
  },
  {
    id: "15",
    name: "KIRA DIVISION",
  },
  {
    id: "16",
    name: "MUKONO",
  },
  {
    id: "17",
    name: "NAGALAMA",
  },
  {
    id: "18",
    name: "IGANGA",
  },
  {
    id: "19",
    name: "NAMAYINGO",
  },
  {
    id: "20",
    name: "MAYUGE",
  },
  {
    id: "21",
    name: "BUGIRI",
  },
  {
    id: "22",
    name: "NAMUTUMBA",
  },
  {
    id: "23",
    name: "BUYENDE",
  },
  {
    id: "24",
    name: "KAMULI",
  },
  {
    id: "25",
    name: "KALIRO",
  },
  {
    id: "26",
    name: "LUUKA",
  },
  {
    id: "27",
    name: "KIIRA CENTRAL/ JINJA",
  },
  {
    id: "28",
    name: "KIIRA EAST/ KAKIRA",
  },
  {
    id: "29",
    name: "KIIRA NORTH/ BUWENGE",
  },
  {
    id: "30",
    name: "MBALE",
  },
  {
    id: "31",
    name: "SIRONKO",
  },
  {
    id: "32",
    name: "MANAFWA",
  },
  {
    id: "33",
    name: "BULAMBULI",
  },
  {
    id: "34",
    name: "BUDUDA",
  },
  {
    id: "35",
    name: "TORORO",
  },
  {
    id: "36",
    name: "BUTALEJA",
  },
  {
    id: "37",
    name: "KIBUKU",
  },
  {
    id: "38",
    name: "BUSIA",
  },
  {
    id: "39",
    name: "BUDAKA",
  },
  {
    id: "40",
    name: "PALLISA",
  },
  {
    id: "41",
    name: "SOROTI",
  },
  {
    id: "42",
    name: "BUKEDEA",
  },
  {
    id: "43",
    name: "KATAKWI",
  },
  {
    id: "44",
    name: "KABERAMAIDO",
  },
  {
    id: "45",
    name: "SERERE",
  },
  {
    id: "46",
    name: "NGORA",
  },
  {
    id: "47",
    name: "AMURIA",
  },
  {
    id: "48",
    name: "KUMI",
  },
  {
    id: "49",
    name: "MOROTO",
  },
  {
    id: "50",
    name: "NAPAK",
  },
  {
    id: "51",
    name: "NAKAPIRIPIRIT",
  },
  {
    id: "52",
    name: "AMUDAT",
  },
  {
    id: "53",
    name: "KOTIDO",
  },
  {
    id: "54",
    name: "ABIM",
  },
  {
    id: "55",
    name: "KABONG",
  },
  {
    id: "56",
    name: "MOYO",
  },
  {
    id: "57",
    name: "ADJUMANI",
  },
  {
    id: "58",
    name: "YUMBE",
  },
  {
    id: "59",
    name: "ARUA",
  },
  {
    id: "60",
    name: "KOBOKO",
  },
  {
    id: "61",
    name: "ZOMBO",
  },
  {
    id: "62",
    name: "MARACHA",
  },
  {
    id: "63",
    name: "NEBBI",
  },
  {
    id: "64",
    name: "GULU",
  },
  {
    id: "65",
    name: "KITGUM",
  },
  {
    id: "66",
    name: "AGAGO",
  },
  {
    id: "67",
    name: "LAMWO",
  },
  {
    id: "68",
    name: "NWOYA",
  },
  {
    id: "69",
    name: "AMURU",
  },
  {
    id: "70",
    name: "OMORO",
  },
  {
    id: "71",
    name: "PADER",
  },
  {
    id: "72",
    name: "LIRA",
  },
  {
    id: "73",
    name: "APAC",
  },
  {
    id: "74",
    name: "OYAM",
  },
  {
    id: "75",
    name: "KOLE",
  },
  {
    id: "76",
    name: "DOKOLO",
  },
  {
    id: "77",
    name: "ALEBTONG",
  },
  {
    id: "78",
    name: "OTUKE",
  },
  {
    id: "79",
    name: "AMORLATAR",
  },
  {
    id: "80",
    name: "MPIGI",
  },
  {
    id: "81",
    name: "BUTAMBALA",
  },
  {
    id: "82",
    name: "GOMBA",
  },
  {
    id: "83",
    name: "MITYANA",
  },
  {
    id: "84",
    name: "MUBENDE",
  },
  {
    id: "85",
    name: "KIBOGA",
  },
  {
    id: "86",
    name: "KYANKWANZI",
  },
  {
    id: "87",
    name: "BUIKWE",
  },
  {
    id: "88",
    name: "BUVUMA",
  },
  {
    id: "89",
    name: "KAYUNGA",
  },
  {
    id: "90",
    name: "NJERU Division",
  },
  {
    id: "91",
    name: "HOIMA",
  },
  {
    id: "92",
    name: "BULISA",
  },
  {
    id: "93",
    name: "MASINDI",
  },
  {
    id: "94",
    name: "KIRYADONGO",
  },
  {
    id: "95",
    name: "KIBAALE",
  },
  {
    id: "96",
    name: "KAGADI",
  },
  {
    id: "97",
    name: "KAKUMIRO",
  },
  {
    id: "98",
    name: "KABAROLE",
  },
  {
    id: "99",
    name: "KAMWENGE",
  },
  {
    id: "100",
    name: "NTOROKO",
  },
  {
    id: "101",
    name: "BUNDIBUGYO",
  },
  {
    id: "102",
    name: "KYENJOJO",
  },
  {
    id: "103",
    name: "KYEGEGWA",
  },
  {
    id: "104",
    name: "MBARARA",
  },
  {
    id: "105",
    name: "IBANDA",
  },
  {
    id: "106",
    name: "NTUNGAMO",
  },
  {
    id: "107",
    name: "KIRUHURA",
  },
  {
    id: "108",
    name: "ISINGIRO",
  },
  {
    id: "109",
    name: "BUSHENYI",
  },
  {
    id: "110",
    name: "RUBIRIZI",
  },
  {
    id: "111",
    name: "MITOOMA",
  },
  {
    id: "112",
    name: "SHEEMA/ KIBINGO",
  },
  {
    id: "113",
    name: "BUHWEJU/ NSIIKA",
  },
  {
    id: "114",
    name: "KABALE",
  },
  {
    id: "115",
    name: "KANUNGU",
  },
  {
    id: "116",
    name: "RUKUNGIRI",
  },
  {
    id: "117",
    name: "KISORO",
  },
  {
    id: "118",
    name: "RUBANDA",
  },
  {
    id: "119",
    name: "MASAKA",
  },
  {
    id: "120",
    name: "LWENGO",
  },
  {
    id: "121",
    name: "KALUNGU",
  },
  {
    id: "122",
    name: "BUKOMANSIMBI",
  },
  {
    id: "123",
    name: "LYANTONDE",
  },
  {
    id: "124",
    name: "KALANGALA",
  },
  {
    id: "125",
    name: "RAKAI/ MUTUKULA",
  },
  {
    id: "126",
    name: "SSEMBABULE",
  },
  {
    id: "127",
    name: "LUWERO",
  },
  {
    id: "128",
    name: "NAKASEKE",
  },
  {
    id: "129",
    name: "NAKASONGOLA",
  },
  {
    id: "130",
    name: "KAPCHORWA",
  },
  {
    id: "131",
    name: "KWEEN",
  },
  {
    id: "132",
    name: "BUKWO",
  },
  {
    id: "133",
    name: "KASESE",
  },
  {
    id: "134",
    name: "HIMA DIVISION",
  },
  {
    id: "135",
    name: "BWEERA",
  },
  {
    id: "136",
    name: "KATWE/ KABATOORO",
  },
];

const regions = [
  {
    id: "1",
    name: "Kampala Metropolitan Police South",
    value: "KMP SOUTH",
  },
  {
    id: "2",
    name: "Kampala Metropolitan Police North",
    value: "KMP NORTH",
  },
  {
    id: "3",
    name: "Kampala Metropolitan Police East",
    value: "KMP EAST",
  },
  {
    id: "4",
    name: "Busoga East",
    value: "BUSOGA EAST",
  },
  {
    id: "5",
    name: "Busoga North",
    value: "BUSOGA NORTH",
  },
  {
    id: "6",
    name: "Kiira",
    value: "KIIRA",
  },
  {
    id: "7",
    name: "Elgon",
    value: "ELGON",
  },
  {
    id: "8",
    name: "BukedI",
    value: "BUKEDI",
  },
  {
    id: "9",
    name: "East Kyoga",
    value: "EAST KYOGA",
  },
  {
    id: "10",
    name: "Mt. Moroto",
    value: "MT. MOROTO",
  },
  {
    id: "11",
    name: "Kidepo",
    value: "KIDEPO",
  },
  {
    id: "12",
    name: "North West Nile",
    value: "NORTH WEST NILE",
  },
  {
    id: "13",
    name: "West Nile",
    value: "WEST NILE",
  },
  {
    id: "14",
    name: "Aswa River",
    value: "ASWA RIVER",
  },
  {
    id: "15",
    name: "North Kyoga",
    value: "NORTH KYOGA",
  },
  {
    id: "16",
    name: "Katonga",
    value: "KATONGA",
  },
  {
    id: "17",
    name: "Wamala",
    value: "WAMALA",
  },
  {
    id: "18",
    name: "Sezibwa",
    value: "SEZIBWA",
  },
  {
    id: "19",
    name: "Albert",
    value: "ALBERT",
  },
  {
    id: "20",
    name: "Rwizi",
    value: "RWIZI",
  },
  {
    id: "21",
    name: "Greater Bushenyi",
    value: "GREATER BUSHENYI",
  },
  {
    id: "22",
    name: "Kigezi",
    value: "KIGEZI",
  },
  {
    id: "23",
    name: "Greater Masaka",
    value: "GREATER MASAKA",
  },
  {
    id: "24",
    name: "Savannah",
    value: "SAVANNAH",
  },
  {
    id: "25",
    name: "Sipi",
    value: "SIPI",
  },
  {
    id: "26",
    name: "Rwenzori East",
    value: "RWENZORI EAST",
  },
];

function Register() {
  // React classes
  const navigate = useNavigate();
  // form fields
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [otherName, setOtherName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [forceNumber, setForceNumber] = useState("");
  const [region, setRegion] = useState("");
  const [station, setStation] = useState("");
  const [rank, setRank] = useState("");
  const [directorate, setDirectorate] = useState("");
  const [officeRole, setOfficeRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Form Errors
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const closeAlert = () => {
    setError(false);
    setMessage("");
  };

  // check if passwords match
  const passwordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  // Ensure passwords have at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
  const passwordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Reset the form
  const resetForm = () => {
    setFirstName("");
    setSurname("");
    setOtherName("");
    setEmail("");
    setTelephone("");
    setForceNumber("");
    setRegion("");
    setStation("");
    setRank("");
    setDirectorate("");
    setOfficeRole("");
    setPassword("");
    setConfirmPassword("");
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      second_name: surname,
      other_name: otherName,
      email,
      telephone,
      force_number: forceNumber,
      region,
      station,
      rank,
      directorate,
      office_role: officeRole,
      password,
      password_confirmation: confirmPassword,
    };

    instance
      .post("/users/register", data)
      .then(({data}) => {
        if (data.status) {
            navigate("/new-user");
        } else {
          setError(true);
          setMessage(data.message);
        }
      })
      .catch((err) => {
        setError(true);
        setMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div
      className="shadow-lg p-3 mb-5 bg-body rounded align-self-center"
      style={{ width: "50%" }}
    >
      <p className="h3 text-center fw-bold">Register</p>
      <p className="small text-center">
        Please provide correct information for verification purposes. Fields
        marked with <span className="text-danger">*</span> are required.
      </p>
      {/* Start: Alert for errors */}
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error: </strong> {message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={closeAlert}
          ></button>
        </div>
      )}
      {/* End: Alert for errors */}
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="firstName" className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="firstNameHelp"
              required
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col">
            {" "}
            <label htmlFor="surname" className="form-label">
              Second Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="surname"
              aria-describedby="surnameHelp"
              required
              placeholder="Doe"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="col">
            {" "}
            <label htmlFor="otherName" className="form-label">
              Other Name
            </label>
            <input
              type="text"
              className="form-control"
              id="otherName"
              aria-describedby="otherNameHelp"
              placeholder="Smith"
              value={otherName}
              onChange={(e) => setOtherName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="email" className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              required
              placeholder="john.doe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col">
            {" "}
            <label htmlFor="telephone" className="form-label">
              Telephone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="telephone"
              aria-describedby="emailHelp"
              required
              placeholder="+256772123456"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="forceNumber" className="form-label">
              Force Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="forceNumber"
              aria-describedby="forceNumberHelp"
              required
              placeholder="000-01"
              value={forceNumber}
              onChange={(e) => setForceNumber(e.target.value)}
            />
          </div>
          <div className="col">
            {" "}
            <label htmlFor="region" className="form-label">
              Region <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option defaultValue>Select region</option>
              {regions.map((region) => (
                <option key={region.id} value={region.value}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            {" "}
            <label htmlFor="Station" className="form-label">
              Station <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={station}
              onChange={(e) => setStation(e.target.value)}
            >
              <option defaultValue>Select station</option>
              {stations.map((station) => (
                <option key={station.id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="rank" className="form-label">
              Rank <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <option defaultValue>Select rank</option>
              {ranks.map((rank) => (
                <option key={rank.id} value={rank.name}>
                  {rank.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            {" "}
            <label htmlFor="directorate" className="form-label">
              Directorate <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              value={directorate}
              onChange={(e) => setDirectorate(e.target.value)}
            >
              <option defaultValue>Select directorate</option>
              {directorates.map((directorate) => (
                <option key={directorate.id} value={directorate.name}>
                  {directorate.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            {" "}
            <label htmlFor="officeRole" className="form-label">
              OfficeRole <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="officeRole"
              aria-describedby="officeRoleHelp"
              placeholder="Head of ICT"
              value={officeRole}
              onChange={(e) => setOfficeRole(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            {" "}
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              required
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!passwordValid(password) && (
              <p className="text-danger small">
                Password must be at least 8 characters long, contain at least
                one uppercase letter, one lowercase letter, one number and one
                special character.
              </p>
            )}
          </div>
          <div className="col">
            {" "}
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              aria-describedby="confirmPasswordHelp"
              required
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!passwordMatch(password, confirmPassword) && (
              <p className="text-danger small">Passwords do not match.</p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
        <p className="small text-center">
          Already registered?{" "}
          <Link to="/login" className="text-decoration-none">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
