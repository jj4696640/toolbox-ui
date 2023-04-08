import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Loader from "../../../components/Loader";
import instance from "../../../axios";

function Suspect() {
  const { id } = useParams();
  const [suspect, setSuspect] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const fetchSuspect = useCallback(async () => {
    setLoading(true);
    instance
      .get(`/suspects/${id}`)
      .then((res) => {
        setSuspect(res.data.suspect);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    fetchSuspect();
  }, [fetchSuspect]);
  return (
    <div>
      <Header />
      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Suspect Images</h5>
                            {
                                suspect.images && suspect.images.map((image, index) => (
                                    <img key={index} src={image.image} alt={image.image} className="img-fluid" width={100} height={100}/>
                                ))
                            }
                            </div>
                    </div>
                </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{suspect.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <span className="fw-bold">Case Ref:</span>{" "}
                      {suspect.case_ref}
                    </h6>
                    <p className="card-text">
                      <span className="fw-bold">Suspect:</span>{" "}
                      {suspect.station}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Offence:</span>{" "}
                      {suspect.offence}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Briefs on case:</span>{" "}
                      {suspect.briefs_on_case}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Sex:</span> {suspect.sex}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Age:</span> {suspect.age}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Nationality:</span>{" "}
                      {suspect.nationality}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">NIN:</span> {suspect.nin}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Other ID No:</span>{" "}
                      {suspect.other_id_no}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Tribe:</span> {suspect.tribe}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Religion:</span>{" "}
                      {suspect.religion}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Marital status:</span>{" "}
                      {suspect.marital_status}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Place of birth:</span>{" "}
                      {suspect.place_of_birth}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Present Address:</span>{" "}
                      {suspect.present_address}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Distinguishing Feature:</span>{" "}
                      {suspect.distinguishing_features}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Height:</span> {suspect.height}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Bodybuild:</span>{" "}
                      {suspect.bodybuild}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">eye color:</span>{" "}
                      {suspect.eye_color}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Hair color:</span>{" "}
                      {suspect.hair_color}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Level of Education:</span>{" "}
                      {suspect.level_of_education}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Language(s) spoken:</span>{" "}
                      {suspect.languages_spoken}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Travel History:</span>{" "}
                      {suspect.travel_history}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Previous crime records:</span>{" "}
                      {suspect.previous_crime_records}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Occupation:</span>{" "}
                      {suspect.occupation}
                    </p>
                    <p className="card-text">
                        <span className="fw-bold">Telephone:</span>{" "}
                        {suspect.telephone_numbers &&
                            suspect.telephone_numbers.map((tel, index) => (
                                <li key={index}>{tel.number}</li>
                            ))}
                    </p>

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Associates</h5>
                    {suspect.associates &&
                      suspect.associates.map((associate, index) => (
                        <div key={index}>
                          <p className="card-text">
                            <span className="fw-bold">Name:</span>{" "}
                            {associate.name}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Residence:</span>{" "}
                            {associate.residence}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Telephone:</span>
                            <ul className="list-group">
                              {associate.telephone_numbers &&
                                associate.telephone_numbers.map((tel, index) => (
                                  <li key={index} className="list-group-item">
                                    <pre>
                                        {tel.number}
                                    </pre>
                                  </li>
                                ))}
                            </ul>
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Parents</h5>
                    {suspect.associates &&
                      suspect.associates.map((associate, index) => (
                        <div key={index}>
                          <p className="card-text">
                            <span className="fw-bold">Name:</span>{" "}
                            {associate.name}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Residence:</span>{" "}
                            {associate.residence}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Telephone:</span>
                            <ul className="list-group">
                              {associate.telephone_numbers &&
                                associate.telephone_numbers.map((tel, index) => (
                                  <li key={index} className="list-group-item">
                                    <pre>
                                        {tel.number}
                                    </pre>
                                  </li>
                                ))}
                            </ul>
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Spouse</h5>
                    {suspect.associates &&
                      suspect.associates.map((associate, index) => (
                        <div key={index}>
                          <p className="card-text">
                            <span className="fw-bold">Name:</span>{" "}
                            {associate.name}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Residence:</span>{" "}
                            {associate.residence}
                          </p>
                          <p className="card-text">
                            <span className="fw-bold">Telephone:</span>
                            <ul className="list-group">
                              {associate.telephone_numbers &&
                                associate.telephone_numbers.map((tel, index) => (
                                  <li key={index} className="list-group-item">
                                    <pre>
                                        {tel.number}
                                    </pre>
                                  </li>
                                ))}
                            </ul>
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <pre>{JSON.stringify(suspect, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default Suspect;
