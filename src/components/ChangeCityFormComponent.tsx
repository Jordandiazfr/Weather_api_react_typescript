import React, { useState } from "react";

export default function ChangeCityFormComponent({
  changeText,
  handleSubmit,
}: any) {
  const [inputHandler, setInputHandler] = useState("");

  return (
<div>
        <input type="text" onChange={(e) => setInputHandler(e.target.value)} />
        <button
          type="submit"
          className="btn-city"
          onClick={() => {
            changeText(inputHandler)
            handleSubmit();
          }}
        title="Look for the weather in the writed location">
          {" "}
          <i className="fas fa-search-location fa-2x icon"></i>
        </button>
</div>
  );
}
