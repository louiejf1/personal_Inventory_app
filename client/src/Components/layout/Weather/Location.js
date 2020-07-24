import React, { useState } from "react";

export default function Location(props) {
  const [city, setCity] = useState("Los Angeles");
  const [state, setState] = useState("California");

  return (
    <div>
      <input
        onChange={(event) => setCity(event.target.value)}
        value={city}
        type="text"
        class="form-control"
        placeholder={props.city}
        aria-label="City"
        aria-describedby="basic-addon1"
      />
      <br />
      <input
        onChange={(event) => setState(event.target.value)}
        value={state}
        type="text"
        class="form-control"
        placeholder={props.state}
        aria-label="location"
        aria-describedby="basic-addon1"
      />
      <br />
      {/* <button type="button" class="btn btn-primary">
        Primary
      </button> */}
      <br />
    </div>
  );
}
