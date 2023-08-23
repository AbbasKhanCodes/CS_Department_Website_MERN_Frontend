import React from "react";

import EventBody1 from "../components/EventBody/EventBody1";
import EventBody2 from "../components/EventBody/EventBody2";
import EventBody3 from "../components/EventBody/EventBody3";

export default function Event() {
  const splitUrl = window.location.href.split("/");
  const eventPageNo = splitUrl[splitUrl.length - 1];

  return (
    <>
      {eventPageNo == 1 && <EventBody1 />}

      {eventPageNo == 2 && <EventBody2 />}

      {eventPageNo == 3 && <EventBody3 />}
    </>
  );
}
