import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../../axios";
import Loader from "../../../components/Loader";

const gender = [
  {
    id: 1,
    value: "female",
    label: "Female",
  },
  {
    id: 2,
    value: "male",
    label: "Male",
  },
];

const countries = [
  { name: "Afghanistan", code: "AF" },
  { name: "Åland Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Aruba", code: "AW" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bermuda", code: "BM" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Bouvet Island", code: "BV" },
  { name: "Brazil", code: "BR" },
  { name: "British Indian Ocean Territory", code: "IO" },
  { name: "Brunei Darussalam", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cape Verde", code: "CV" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Christmas Island", code: "CX" },
  { name: "Cocos (Keeling) Islands", code: "CC" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Congo", code: "CG" },
  { name: "Congo, The Democratic Republic of the", code: "CD" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote D'Ivoire", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czech Republic", code: "CZ" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Ethiopia", code: "ET" },
  { name: "Falkland Islands (Malvinas)", code: "FK" },
  { name: "Faroe Islands", code: "FO" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "French Guiana", code: "GF" },
  { name: "French Polynesia", code: "PF" },
  { name: "French Southern Territories", code: "TF" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Gibraltar", code: "GI" },
  { name: "Greece", code: "GR" },
  { name: "Greenland", code: "GL" },
  { name: "Grenada", code: "GD" },
  { name: "Guadeloupe", code: "GP" },
  { name: "Guam", code: "GU" },
  { name: "Guatemala", code: "GT" },
  { name: "Guernsey", code: "GG" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Heard Island and Mcdonald Islands", code: "HM" },
  { name: "Holy See (Vatican City State)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hong Kong", code: "HK" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran, Islamic Republic Of", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Isle of Man", code: "IM" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jersey", code: "JE" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Korea, Democratic People'S Republic of", code: "KP" },
  { name: "Korea, Republic of", code: "KR" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Lao People'S Democratic Republic", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libyan Arab Jamahiriya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Macao", code: "MO" },
  { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Martinique", code: "MQ" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mayotte", code: "YT" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia, Federated States of", code: "FM" },
  { name: "Moldova, Republic of", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montserrat", code: "MS" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "Netherlands Antilles", code: "AN" },
  { name: "New Caledonia", code: "NC" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "Norfolk Island", code: "NF" },
  { name: "Northern Mariana Islands", code: "MP" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Palestinian Territory, Occupied", code: "PS" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Pitcairn", code: "PN" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Puerto Rico", code: "PR" },
  { name: "Qatar", code: "QA" },
  { name: "Reunion", code: "RE" },
  { name: "Romania", code: "RO" },
  { name: "Russian Federation", code: "RU" },
  { name: "RWANDA", code: "RW" },
  { name: "Saint Helena", code: "SH" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Pierre and Miquelon", code: "PM" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia and Montenegro", code: "CS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", code: "GS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Svalbard and Jan Mayen", code: "SJ" },
  { name: "Swaziland", code: "SZ" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syrian Arab Republic", code: "SY" },
  { name: "Taiwan, Province of China", code: "TW" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania, United Republic of", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tokelau", code: "TK" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Turks and Caicos Islands", code: "TC" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "United States Minor Outlying Islands", code: "UM" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Viet Nam", code: "VN" },
  { name: "Virgin Islands, British", code: "VG" },
  { name: "Virgin Islands, U.S.", code: "VI" },
  { name: "Wallis and Futuna", code: "WF" },
  { name: "Western Sahara", code: "EH" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

const educationLevels = [
  {
    id: 1,
    value: "primary",
    label: "Primary",
  },
  {
    id: 2,
    value: "secondary",
    label: "Secondary",
  },
  {
    id: 3,
    value: "vocational/technical",
    label: "Vocational/Technical",
  },
  {
    id: 4,
    value: "bachelor",
    label: "Bachelor",
  },
  {
    id: 5,
    value: "master",
    label: "Master",
  },
  {
    id: 6,
    value: "doctorate",
    label: "Doctorate",
  },
  {
    id: 7,
    value: "other",
    label: "Other",
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

const ethnicGroups = [
  { id: 1, name: "Acholi" },
  { id: 2, name: "Aliba" },
  { id: 3, name: "Alur" },
  { id: 4, name: "Aringa" },
  { id: 5, name: "Baamba" },
  { id: 6, name: "Babukuso" },
  { id: 7, name: "Babwisi" },
  { id: 8, name: "Bafumbira" },
  { id: 9, name: "Baganda" },
  { id: 10, name: "Bagisu" },
  { id: 11, name: "Bagungu" },
  { id: 12, name: "Bagwe (part of Samia-Bugwe)" },
  { id: 13, name: "Bagwere" },
  { id: 14, name: "Bahehe" },
  { id: 15, name: "Bahororo" },
  { id: 16, name: "Bakenyi" },
  { id: 17, name: "Bakiga" },
  { id: 18, name: "Bakonzo" },
  { id: 19, name: "Banyabindi" },
  { id: 20, name: "Banyabutumbi" },
  { id: 21, name: "Banyankore" },
  { id: 22, name: "Banyara" },
  { id: 23, name: "Banyaruguru" },
  { id: 24, name: "Banyarwanda" },
  { id: 25, name: "Banyole" },
  { id: 26, name: "Banyoro" },
  { id: 27, name: "Baruli" },
  { id: 28, name: "Barundi" },
  { id: 29, name: "Basamia" },
  { id: 30, name: "Basoga" },
  { id: 31, name: "Basongora" },
  { id: 32, name: "Batagwenda" },
  { id: 33, name: "Batoro" },
  { id: 34, name: "Batuku" },
  { id: 35, name: "Batwa" },
  { id: 36, name: "Chope" },
  { id: 37, name: "Dodoth" },
  { id: 38, name: "Ethur (Acholi-Labwor)" },
  { id: 39, name: "Gimara" },
  { id: 40, name: "Ik (Teuso)" },
  { id: 41, name: "Iteso" },
  { id: 42, name: "Jie" },
  { id: 43, name: "Jonam" },
  { id: 44, name: "Jopadhola" },
  { id: 45, name: "Kakwa" },
  { id: 46, name: "Karimojong" },
  { id: 47, name: "Kebu (Okebu)" },
  { id: 48, name: "Kuku" },
  { id: 49, name: "Kumam" },
  { id: 50, name: "Langi" },
  { id: 51, name: "Lendu" },
  { id: 52, name: "Lugbara" },
  { id: 53, name: "Madi" },
  { id: 54, name: "Mening" },
  { id: 55, name: "Mvuba" },
  { id: 56, name: "Napore" },
  { id: 57, name: "Ngikutio" },
  { id: 58, name: "Nubi" },
  { id: 59, name: "Nyangia" },
  { id: 60, name: "Pokot" },
  { id: 61, name: "Reli" },
  { id: 62, name: "Sabiny" },
  { id: 63, name: "Shana" },
  { id: 64, name: "So (Tepeth)" },
  { id: 65, name: "Vonoma" },
];

const maritalStatuses = [
  { id: 1, name: "Single" },
  { id: 2, name: "Married" },
  { id: 3, name: "Divorced" },
  { id: 4, name: "Widowed" },
  { id: 5, name: "Separated" },
];

const parentRelationships = [
  { id: 1, name: "Father" },
  { id: 2, name: "Mother" },
  { id: 3, name: "Guardian" },
  { id: 4, name: "Other" },
];

const spouseRelationships = [
  { id: 1, name: "Husband" },
  { id: 2, name: "Wife" },
  { id: 3, name: "Other" },
];

function CreateNew() {
  const navigate = useNavigate();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    switch (currentStep) {
      case 1:
        setStep1(false);
        setStep2(true);
        setCurrentStep(2);
        break;
      case 2:
        setStep2(false);
        setStep3(true);
        setCurrentStep(3);
        break;
      case 3:
        setStep3(false);
        setStep4(true);
        setCurrentStep(4);
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    switch (currentStep) {
      case 2:
        setStep1(true);
        setStep2(false);
        setCurrentStep(1);
        break;
      case 3:
        setStep2(true);
        setStep3(false);
        setCurrentStep(2);
        break;
      case 4:
        setStep3(true);
        setStep4(false);
        setCurrentStep(3);
        break;
      default:
        break;
    }
  };

  // background images
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

  // form data
  const [frontImage, setFrontImage] = useState(null);
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [hindImage, setHindImage] = useState(null);

  const [name, setName] = useState("");
  const [caseRef, setCaseRef] = useState("");
  const [station, setStation] = useState("");
  const [offence, setOffence] = useState("");
  const [briefsOnCase, setBriefsOnCase] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [nationality, setNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [placeOfResidence, setPlaceOfResidence] = useState("");
  const [telephone, setTelephone] = useState([]);
  const handleTelephoneChange = (e, index) => {
    console.log(telephone);
    const numbers = e.target.value.split(",");
    setTelephone(numbers.map((number, i) => number.trim()));
  };
  const [distinguishingFeatures, setDistinguishingFeatures] = useState("");
  const [height, setHeight] = useState("");
  const [bodyBuild, setBodyBuild] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [levelOfEducation, setLevelOfEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [religion, setReligion] = useState("");
  const [tribe, setTribe] = useState("");
  const [language, setLanguage] = useState("");
  const [nin, setNin] = useState("");
  const [otherIDNo, setOtherIDNo] = useState("");
  const [travelHistory, setTravelHistory] = useState("");
  const [criminalHistory, setCriminalHistory] = useState("");
  const [parents, setParents] = useState([
    {
      name: "",
      residence: "",
      relationship: "",
      telephone_numbers: [],
    },
  ]);

  const handleNameChange = (e, index) => {
    const name = e.target.value;
    setParents((prevState) => {
      const parents = [...prevState];
      parents[index].name = name;
      return parents;
    });
  };

  const handleResidenceChange = (e, index) => {
    const residence = e.target.value;
    setParents((prevState) => {
      const parents = [...prevState];
      parents[index].residence = residence;
      return parents;
    });
  };

  const handleRelationshipChange = (e, index) => {
    const relationship = e.target.value;
    setParents((prevState) => {
      const parents = [...prevState];
      parents[index].relationship = relationship;
      return parents;
    });
  };

  const handleParentTelephoneChange = (e, index) => {
    const numbers = e.target.value.split(",");
    setParents((prevState) => {
      const parents = [...prevState];
      parents[index].telephone_numbers = numbers.map((number, i) =>
        number.trim()
      );
      return parents;
    });
  };

  const handleAddParent = (event) => {
    event.preventDefault();
    setParents((prevState) => {
      const parents = [...prevState];
      parents.push({
        name: "",
        residence: "",
        relationship: "",
        telephone_numbers: [],
      });
      return parents;
    });
  };

  const handleRemoveParent = (index) => {
    setParents((prevState) => {
      const parents = [...prevState];
      parents.splice(index, 1);
      return parents;
    });
  };

  // Spouse
  const [spouses, setSpouses] = useState([
    {
      name: "",
      residence: "",
      relationship: "",
      telephone_numbers: [],
    },
  ]);

  const handleSpouseNameChange = (e, index) => {
    const name = e.target.value;
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses[index].name = name;
      return spouses;
    });
  };

  const handleSpouseResidenceChange = (e, index) => {
    const residence = e.target.value;
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses[index].residence = residence;
      return spouses;
    });
  };

  const handleSpouseRelationshipChange = (e, index) => {
    const relationship = e.target.value;
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses[index].relationship = relationship;
      return spouses;
    });
  };

  const handleSpouseTelephoneChange = (e, index) => {
    const numbers = e.target.value.split(",");
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses[index].telephone_numbers = numbers.map((number, i) =>
        number.trim()
      );
      return spouses;
    });
  };

  const handleAddSpouse = () => {
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses.push({
        name: "",
        residence: "",
        relationship: "",
        telephone_numbers: [],
      });
      return spouses;
    });
  };

  const handleRemoveSpouse = (index) => {
    setSpouses((prevState) => {
      const spouses = [...prevState];
      spouses.splice(index, 1);
      return spouses;
    });
  };

  // Spouse
  const [associates, setAssociates] = useState([
    {
      name: "",
      residence: "",
      telephone_numbers: [],
    },
  ]);

  const handleAssociateNameChange = (e, index) => {
    const name = e.target.value;
    setAssociates((prevState) => {
      const associates = [...prevState];
      associates[index].name = name;
      return associates;
    });
  };

  const handleAssociateResidenceChange = (e, index) => {
    const residence = e.target.value;
    setAssociates((prevState) => {
      const associates = [...prevState];
      associates[index].residence = residence;
      return associates;
    });
  };

  const handleAssociateTelephoneChange = (e, index) => {
    const numbers = e.target.value.split(",");
    setAssociates((prevState) => {
      const associates = [...prevState];
      associates[index].telephone_numbers = numbers.map((number, i) =>
        number.trim()
      );
      return associates;
    });
  };

  const handleAddAssociate = () => {
    setAssociates((prevState) => {
      const associates = [...prevState];
      associates.push({
        name: "",
        residence: "",
        relationship: "",
        telephone_numbers: [],
      });
      return associates;
    });
  };

  const handleRemoveAssociate = (index) => {
    setAssociates((prevState) => {
      const associates = [...prevState];
      associates.splice(index, 1);
      return associates;
    });
  };

  // handle image upload
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

  const [required, setRequired] = useState(false);
  const [requiredField, setRequiredField] = useState(null);

  const closeAlert = () => {
    setRequired(false);
  };

  // function to take underscored string and return title case
  const titleCase = (str) => {
    return str
      .toLowerCase()
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const data = {
      case_ref: caseRef,
      station,
      offence,
      briefs_on_case: briefsOnCase,
      name,
      sex,
      age,
      nationality,
      nin,
      other_id_no: otherIDNo,
      tribe,
      religion,
      marital_status: maritalStatus,
      place_of_birth: placeOfBirth,
      present_address: placeOfResidence,
      distinguishing_features: distinguishingFeatures,
      height,
      bodybuild: bodyBuild,
      eye_color: eyeColor,
      hair_color: hairColor,
      level_of_education: levelOfEducation,
      languages_spoken: language,
      travel_history: travelHistory,
      previous_crime_records: criminalHistory,
      occupation,
      telephone_numbers: telephone,
      associates,
      parents,
      spouses,
      left: leftImage,
      right: rightImage,
      front: frontImage,
      hind: hindImage,
    };

    // if (!required) {
      instance
        .post("/suspects", data)
        .then((res) => {
          // Reset form
          setCaseRef("");
          setStation("");
          setOffence("");
          setBriefsOnCase("");
          setName("");
          setSex("");
          setAge("");
          setNationality("");
          setNin("");
          setOtherIDNo("");
          setTribe("");
          setReligion("");
          setMaritalStatus("");
          setPlaceOfBirth("");
          setPlaceOfResidence("");
          setDistinguishingFeatures("");
          setHeight("");
          setBodyBuild("");
          setEyeColor("");
          setHairColor("");
          setLevelOfEducation("");
          setLanguage("");
          setTravelHistory("");
          setCriminalHistory("");
          setOccupation("");
          setTelephone([]);
          setAssociates([
            {
              name: "",
              residence: "",
              telephone_numbers: [],
            },
          ]);
          setParents([
            {
              name: "",
              residence: "",
              telephone_numbers: [],
            },
          ]);
          setSpouses([
            {
              name: "",
              residence: "",
              telephone_numbers: [],
            },
          ]);
          setFrontImage("");
          setLeftImage("");
          setRightImage("");
          setHindImage("");
          setFront("url('https://randomuser.me/api/portraits/lego/6.jpg')");
          setLeft("url('https://randomuser.me/api/portraits/lego/7.jpg')");
          setRight("url('https://randomuser.me/api/portraits/lego/8.jpg')");
          setHind("url('https://randomuser.me/api/portraits/lego/9.jpg')");
          setSuccess(true);
          setIsSubmitting(false);
          navigate("/suspects");
        })
        .catch((err) => {
          console.log(err)
          setIsSubmitting(false);
          setError(true);
          setErrorMessage("An error occurred. Please try again later");
        });
    // }
  };

  return (
    <>
      <div className="border-bottom mb-5 d-flex justify-content-between align-items-end">
        <div>
          <p className="h2">Add New Profile</p>
          <p>
            Fields marked with <span className="text-danger">*</span> are
            required. Please provide all required information. Click on the{""}
            <i className="bi bi-plus"></i> to add fields in case of multiple
            options.
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {required && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>{requiredField}</strong> is required
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={closeAlert}
            ></button>
          </div>
        )}
        {success && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Success!</strong> Suspect profile created successfully
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                setSuccess(false);
              }}
            ></button>
          </div>
        )}
        {error && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error!</strong> {errorMessage}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setError(false)}
            ></button>
          </div>
        )}
        {step1 && (
          <div className="row">
            <h2 className="h4">Step 1: Suspect Bio Information</h2>
            <div className="col-sm-12 col-md-6 col-lg-3 my-1">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: front,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="h6 fw-bold my-2">Front</p>
              <div>
                <input
                  className="form-control form-control-sm"
                  id="formFileFront"
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-1">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: left,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="h6 fw-bold my-2">Left</p>
              <div>
                <input
                  className="form-control form-control-sm"
                  id="formFileLeft"
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-1">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: right,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="h6 fw-bold my-2">Right</p>
              <div>
                <input
                  className="form-control form-control-sm"
                  id="formFileRight"
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-1">
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  backgroundImage: hind,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <p className="h6 fw-bold my-2">Hind</p>
              <div>
                <input
                  className="form-control form-control-sm"
                  id="formFileHind"
                  type="file"
                  onChange={handleImageUpload}
                  required
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="caseRef" className="form-label">
                Case Ref
              </label>
              <input
                type="text"
                className="form-control"
                id="caseRef"
                value={caseRef}
                onChange={(e) => setCaseRef(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="height" className="form-label">
                Station
              </label>
              <select
                className="form-select"
                aria-label=""
                value={station}
                onChange={(e) => setStation(e.target.value)}
              >
                <option defaultValue>Station</option>
                {stations.map((station) => (
                  <option key={station.id} value={station.name}>
                    {station.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="offence" className="form-label">
                Offence
              </label>
              <input
                type="text"
                className="form-control"
                id="offence"
                value={offence}
                onChange={(e) => setOffence(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="briefsOnCase" className="form-label">
                Briefs on Case
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                value={briefsOnCase}
                onChange={(e) => setBriefsOnCase(e.target.value)}
              ></textarea>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="sex" className="form-label">
                Sex
              </label>
              <select
                className="form-select"
                aria-label=""
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option defaultValue>Sex</option>
                {gender.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                min={0}
                className="form-control"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <label htmlFor="nationality" className="form-label">
                Nationality
              </label>
              <select
                className="form-select"
                aria-label=""
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option defaultValue>Nationality</option>
                {countries.map((item, index) => {
                  return (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <label htmlFor="placeOfBirth" className="form-label">
                Place of Birth
              </label>
              <input
                type="text"
                className="form-control"
                id="placeOfBirth"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <label htmlFor="presentResidence" className="form-label">
                Present Residence
              </label>
              <input
                type="text"
                className="form-control"
                id="presentResidence"
                value={placeOfResidence}
                onChange={(e) => setPlaceOfResidence(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="telephone" className="form-label">
                Telephone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="0772123123, 0770123123"
                aria-label="0772123123"
                value={telephone}
                onChange={handleTelephoneChange}
              />
              <div className="text-muted small">
                Enter multiple numbers separated by commas
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
              <label htmlFor="Name" className="form-label">
                NIN
              </label>
              <input
                type="text"
                className="form-control"
                id="Name"
                value={nin}
                onChange={(e) => setNin(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <label htmlFor="caseRef" className="form-label">
                Other ID no.
              </label>
              <input
                type="text"
                className="form-control"
                id="caseRef"
                value={otherIDNo}
                onChange={(e) => setOtherIDNo(e.target.value)}
              />
            </div>
            <div className="col-12 d-flex justify-content-end my-4">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleNext}
                disabled={currentStep === 4}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step2 && (
          <div className="row">
            <h2 className="h4">Step 2: Suspect Details</h2>
            <div className="row my-2">
              <div className="col-12">
                <label htmlFor="distinguishingFeature" className="form-label">
                  Distinguishing Features
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="distinguishingFeature"
                  value={distinguishingFeatures}
                  onChange={(e) => setDistinguishingFeatures(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Height (cm)
                </label>
                <input
                  type="number"
                  min={0}
                  className="form-control"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="bodybuild" className="form-label">
                  Bodybuild
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bodybuild"
                  value={bodyBuild}
                  onChange={(e) => setBodyBuild(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Religion
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="height"
                  value={religion}
                  onChange={(e) => setReligion(e.target.value)}
                />
              </div>
              {/* <div className="col-6">
                <label htmlFor="bodybuild" className="form-label">
                  Bodybuild
                </label>
                <input type="text" className="form-control" id="bodybuild" />
              </div> */}
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Hair Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="height"
                  value={hairColor}
                  onChange={(e) => setHairColor(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="bodybuild" className="form-label">
                  Eye Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bodybuild"
                  value={eyeColor}
                  onChange={(e) => setEyeColor(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Level of Education
                </label>
                <select
                  className="form-select"
                  aria-label=""
                  value={levelOfEducation}
                  onChange={(e) => setLevelOfEducation(e.target.value)}
                >
                  <option defaultValue>Level of Education</option>
                  {educationLevels.map((level) => (
                    <option key={level.id} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Tribe
                </label>
                <select
                  className="form-select"
                  aria-label=""
                  value={tribe}
                  onChange={(e) => setTribe(e.target.value)}
                >
                  <option defaultValue>Tribe</option>
                  {ethnicGroups.map((tribe) => (
                    <option key={tribe.id} value={tribe.name}>
                      {tribe.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <label htmlFor="height" className="form-label">
                  Marital Status
                </label>
                <select
                  className="form-select"
                  aria-label=""
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                >
                  <option defaultValue>Marital Status</option>
                  {maritalStatuses.map((status) => (
                    <option key={status.id} value={status.name}>
                      {status.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="bodybuild" className="form-label">
                  Occupation
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bodybuild"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end my-4">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleNext}
                disabled={currentStep === 4}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step3 && (
          <div className="row">
            <h2 className="h4">Step 3: Suspect Parents/associates & Spouses</h2>
            <div className="d-flex justify-content-between align-items-end">
              <div className="h5">Parent(s)</div>
              <div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleAddParent}
                >
                  <i className="bi bi-plus"></i> Add Parent
                </button>
              </div>
            </div>
            {parents.map((parent, index) => (
              <div className="row mb-2" key={index}>
                {index > 0 && (
                  <div className="col-12 mt-2">
                    <div className="d-flex justify-content-end align-items-end">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={(event) => {
                          event.preventDefault();
                          handleRemoveParent(index);
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                )}
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="parentName" className="form-label">
                    Relationship
                  </label>
                  <select
                    className="form-select"
                    aria-label=""
                    value={parent.relationship}
                    onChange={(event) => handleRelationshipChange(event, index)}
                  >
                    <option defaultValue>Relationship</option>
                    {parentRelationships.map((parent) => (
                      <option key={parent.id} value={parent.name}>
                        {parent.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="parentName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="parentName"
                    value={parent.name}
                    onChange={(event) => handleNameChange(event, index)}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="residence" className="form-label">
                    Residence
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="residence"
                    value={parent.residence}
                    onChange={(event) => handleResidenceChange(event, index)}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    value={parent.telephone_numbers}
                    onChange={(event) =>
                      handleParentTelephoneChange(event, index)
                    }
                  />
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-end">
              <div className="h5">Spouse(s)</div>
              <div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={(event) => {
                    event.preventDefault();
                    handleAddSpouse();
                  }}
                >
                  <i className="bi bi-plus"></i> Add Spouse
                </button>
              </div>
            </div>
            {spouses.map((spouse, index) => (
              <div className="row mb-2" key={index}>
                {index > 0 && (
                  <div className="col-12 mt-2">
                    <div className="d-flex justify-content-end align-items-end">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={(event) => {
                          event.preventDefault();
                          handleRemoveSpouse(index);
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                )}
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="parentName" className="form-label">
                    Relationship
                  </label>
                  <select
                    className="form-select"
                    aria-label=""
                    value={spouse.relationship}
                    onChange={(event) =>
                      handleSpouseRelationshipChange(event, index)
                    }
                  >
                    <option defaultValue>Relationship</option>
                    {spouseRelationships.map((spouse) => (
                      <option key={spouse.id} value={spouse.name}>
                        {spouse.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="parentName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="parentName"
                    value={spouse.name}
                    onChange={(event) => handleSpouseNameChange(event, index)}
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="residence" className="form-label">
                    Residence
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="residence"
                    value={spouse.residence}
                    onChange={(event) =>
                      handleSpouseResidenceChange(event, index)
                    }
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    value={spouse.telephone_numbers}
                    onChange={(event) =>
                      handleSpouseTelephoneChange(event, index)
                    }
                  />
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-end">
              <div className="h5">Associate(s)</div>
              <div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={(event) => {
                    event.preventDefault();
                    handleAddAssociate();
                  }}
                >
                  <i className="bi bi-plus"></i> Add Associate
                </button>
              </div>
            </div>
            {associates.map((associate, index) => (
              <div className="row mb-2" key={index}>
                {index > 0 && (
                  <div className="col-12 mt-2">
                    <div className="d-flex justify-content-end align-items-end">
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={(event) => {
                          event.preventDefault();
                          handleRemoveAssociate(index);
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                )}

                <div className="col-sm-12 col-md-12 col-lg-4">
                  <label htmlFor="parentName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="parentName"
                    value={associate.name}
                    onChange={(event) =>
                      handleAssociateNameChange(event, index)
                    }
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <label htmlFor="residence" className="form-label">
                    Residence
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="residence"
                    value={associate.residence}
                    onChange={(event) =>
                      handleAssociateResidenceChange(event, index)
                    }
                  />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                  <label htmlFor="contact" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact"
                    value={associate.telephone_numbers}
                    onChange={(event) =>
                      handleAssociateTelephoneChange(event, index)
                    }
                  />
                </div>
              </div>
            ))}
            <div className="col-12 d-flex justify-content-end my-4">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleNext}
                disabled={currentStep === 4}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step4 && (
          <div className="row">
            <h2 className="h4">Step 4: Other Information</h2>
            <div className="row">
              <div className="col-12">
                <label className="form-label">Languages spoken</label>
                <input
                  type="text"
                  className="form-control"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Travel history</label>
                <input
                  type="text"
                  className="form-control"
                  value={travelHistory}
                  onChange={(event) => setTravelHistory(event.target.value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="briefsOnCase" className="form-label">
                  Previous crime records if any
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={criminalHistory}
                  onChange={(event) => setCriminalHistory(event.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-end my-4">
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={handleNext}
                disabled={currentStep === 4}
              >
                Next
              </button>
              {currentStep === 4 && (
                <div className="d-flex justify-content-center ">
                  <button type="submit" className="btn btn-primary mx-2" disabled={isSubmitting}>
                  submit
                </button>
                {
                  isSubmitting && (
                <Loader />
                  )
                }
                </div>
              )}
            </div>
          </div>
        )}
      </form>
    </>
  );
}

export default CreateNew;
