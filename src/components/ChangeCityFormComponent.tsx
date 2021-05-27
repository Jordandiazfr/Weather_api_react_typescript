import React, { useState } from "react";

type props = {
  handleSubmit: (requestCity: string) => void
}

export default function ChangeCityFormComponent({handleSubmit}: props) {

  const [inputHandler, setInputHandler] = useState("");

  return (
    <>
        <input type="text" onChange={(e) => setInputHandler(e.target.value)} />
        <button
          type="submit"
          className="btn-city"
          onClick={() => {
            handleSubmit(inputHandler);
          }}
        title="Look for the weather in the writed location">
          {" "}
          <i className="fas fa-search-location fa-2x icon"></i>
        </button>
  </>
  );
}
