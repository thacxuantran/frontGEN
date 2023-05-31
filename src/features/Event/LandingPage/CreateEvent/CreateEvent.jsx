import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button, Typography } from "@material-ui/core";
import InputFieldNormal from "./InputFieldNormal";
import DatePicker from "../DatePicker";
CreateEvent.propTypes = {};

function CreateEvent(props) {
  return (
    <div className="create-event">
      <div className="create-event__title">
        <p
          style={{
            fontFamily: "Samsung Sharp Sans",
            color: "#404040",
            fontSize: "22px",
          }}
        >
          Create Event
          <span
            style={{
              fontDamily: "Samsung Sharp Sans",
              color: "#0dab42",
              fontSize: "64px",
            }}
          >
            .
          </span>
        </p>
      </div>
      <div className="create-event__main">
        <div className="create-event__main__left">
          <div>
            <p
              style={{
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                fontSize: "14px",
              }}
            >
              Name
            </p>
            <InputFieldNormal className="input-field" />
          </div>
          <div style={{ marginTop: "8%" }}>
            <p
              style={{
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                fontSize: "14px",
              }}
            >
              Location
            </p>
            <InputFieldNormal className="input-field" />
          </div>
          <div className="create-event__main__left__date">
            <div className="create-event__main__left__date__start">
              <p
                style={{
                  fontFamily: "Samsung Sharp Sans",
                  color: "#404040",
                  fontSize: "14px",
                }}
              >
                Start
              </p>
              <DatePicker className="create-event__main__left__date__start__picker" />
            </div>
            <div className="create-event__main__left__date__end">
              <p
                style={{
                  fontFamily: "Samsung Sharp Sans",
                  color: "#404040",
                  fontSize: "14px",
                }}
              >
                End
              </p>
              <DatePicker className="create-event__main__left__date__end__picker" />
            </div>
          </div>
          <div className="create-event__main__left__update">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                fontSize: "14px",
              }}
            >
              Update
            </p>
            <img src="/upload.png" style={{ marginTop: "3%" }} />
          </div>
        </div>
        <div className="create-event__main__right">
          <div style={{ height: "100%" }}>
            <p
              style={{
                fontFamily: "Samsung Sharp Sans",
                color: "#404040",
                fontSize: "14px",
              }}
            >
              Description
            </p>
            <div className="description-field-event">
              <InputFieldNormal className="description-field-event__input" />
            </div>
          </div>
        </div>
      </div>
      <div className="create-event__button">
        <Button> Post</Button>
      </div>
    </div>
  );
}

export default CreateEvent;
