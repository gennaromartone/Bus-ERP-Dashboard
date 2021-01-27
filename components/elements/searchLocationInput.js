import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current,
    // { types: ["(cities)"], componentRestrictions: { country: "us" } }
  );
  autoComplete.setFields(["address_components", "formatted_address","geometry"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  console.log('first',addressObject);
  const query = addressObject.formatted_address;
  updateQuery(query);
  console.log(addressObject);
}

function SearchLocationInput({type,label,name,placeHolder,validate,registerToForm}) {

    const[ firstTouch, setFirstTouch ] = useState(true)
    const[ error, setError ] = useState(false)  

  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className={!error && !firstTouch && validate? 'error':''}>
            <label htmlFor={name}>{label}</label>
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter an Address"
        value={query}
        name={name} placeholder={placeHolder}
      />
      <style jsx>{`
                div{
                    position:relative;
                    height:var( --input-height);
                    background: var( --background-element );
                    border: var( --border-input);
                    border-radius: var( --border-radius );
                }
                label{
                    position: absolute;
                    left: var( --left-position-content);
                    right: 68.65%;
                    top: calc(50% - 16px/2 - 11px);
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 16px;
                    color: #697A81;
                }
                input{
                    position: absolute;
                    left: var( --left-position-content);
                    right: 47.34%;
                    top: calc(50% - 20px/2 + 9px);
                    height: 20px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    color: #1F2F36;
                    width: calc( 100% - 1rem - 3.76%);
                    border: none;
                }
            `}</style>
    </div>
  );
}

export default SearchLocationInput;