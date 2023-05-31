import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Button, Grid } from "@material-ui/core";
import EventCard from "../LandingPage/EventCard/EventCard";
ViewDetailEvent.propTypes = {};

function ViewDetailEvent(props) {
  return (
    <div className="detailevent-root">
      <div className="detailevent-banner">
        <img
          style={{
            objectFit: "cover",
            width: "65%",
            borderRadius: "15px",
          }}
          src="/event1.jpg"
        />
      </div>
      <div className="detailevent-main">
        <div className="detailevent-main__left">
          <p
            style={{
              fontFamily: "Samsung Sharp Sans Bold",
              color: "#0dab42",
              fontSize: "24px",
            }}
          >
            STUDENT ACHIEVEMENT AWARDS
          </p>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans Regular",
              color: "#404040",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            By FPT University
          </p>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans Regular",
              color: "#404040",
              fontSize: "16px",
              marginTop: "20px",
            }}
          >
            Ngu Hanh Son District, Da Nang
          </p>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans",
              color: "#404040",
              fontSize: "20px",
              marginTop: "40px",
            }}
          >
            Description
          </p>
          <div className="detailevent-main__left__des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet et et,
            eget non nulla sed pulvinar hendrerit blandit. At tempor nisl sed eu
            odio ultricies. Donec tellus mi ante ut. Fermentum quam sed amet,
            aliquet vel aenean. Lorem in neque enim platea vel malesuada egestas
            faucibus. Convallis ut elit, euismod posuere erat sit gravida vitae
            gravida. Integer orci in risus commodo tincidunt nec gravida. Neque
            orci sodales nunc sit ut elementum nunc habitant. Aliquam eu, proin
            volutpat amet sit. Varius elementum tellus ut cursus mi, ac. Egestas
            et turpis neque mi. Tempus nec, in quis platea sed sit. Tempus
            vestibulum pulvinar id placerat fermentum. Diam nisl, donec ut
            pellentesque. Eget urna non lacinia gravida ultricies cursus dictum
            lectus tincidunt. Id adipiscing laoreet phasellus lacinia eget odio
            maecenas. Posuere ultricies odio nunc nisl, sociis tellus. At
            elementum consequat imperdiet fermentum odio feugiat sagittis
            tellus. Eu ac egestas massa, tellus. Sed pellentesque arcu sodales
            non eu dictumst. Pretium mattis id tempor felis, pellentesque sed
            magna. Phasellus aliquam, nisl a blandit id. Sapien erat augue
            eleifend adipiscing sed magnis. Quis nec cursus porttitor proin
            pellentesque. Lacus elementum elementum est bibendum aliquet in enim
            at et. Egestas nulla odio nulla amet. Id fringilla porttitor sit
            enim tellus. Arcu fermentum iaculis egestas
          </div>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans",
              color: "#404040",
              fontSize: "20px",
              marginTop: "40px",
            }}
          >
            Other Event You May Like
          </p>
        </div>
        <div className="detailevent-main__right">
          <div className="detailevent-main__right__date">
            <div className="detailevent-main__right__date__title">
              <p
                style={{
                  fontFamily: "Samsung Sharp Sans",
                  color: "#404040",
                  fontSize: "18px",
                }}
              >
                Date & Time
              </p>
              <p
                style={{
                  fontFamily: "Samsung Sharp Sans Regular",
                  color: "#404040",
                  fontSize: "15px",
                  marginTop: "40px",
                }}
              >
                Start:{" "}
                <span
                  style={{
                    fontFamily: "Samsung Sharp Sans",
                    color: "#0DAB42",
                    fontSize: "15px",
                  }}
                >
                  14:00 26/06/2021
                </span>
              </p>
              <p
                style={{
                  fontFamily: "Samsung Sharp Sans Regular",
                  color: "#404040",
                  fontSize: "15px",
                  marginTop: "20px",
                }}
              >
                End:{" "}
                <span
                  style={{
                    fontFamily: "Samsung Sharp Sans ",
                    color: "#0DAB42",
                    fontSize: "15px",
                  }}
                >
                  14:00 27/06/2021
                </span>
              </p>
            </div>
            <div className="detailevent-main__right__date__button">
              <Button> Join</Button>
            </div>
          </div>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans",
              color: "#404040",
              fontSize: "20px",
              marginTop: "40px",
            }}
          >
            Share with friends
          </p>
          <div className="detailevent-main__right__social">
            <img
              src="/ins.png"
              style={{ width: "30px", height: "30px", marginRight: "20px" }}
            />
            <img
              src="/fb.png"
              style={{ width: "30px", height: "30px", marginRight: "20px" }}
            />
            <img
              src="/tw.png"
              style={{ width: "30px", height: "30px", marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
      <div className="detailevent-other">
        <div className="detailevent-other__main">
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard img="/event1.jpg" title="Student Achievement Awards" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard
                img="/eventcard2.jpeg"
                title="AXIE INFINITY - Hanh Trinh Ty Do"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard img="/eventcard3.jpeg" title="POWER OF VOICE" />
            </Grid>
          </Grid>
        </div>
        <div className="detailevent-other__main">
          <Grid container>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard img="/eventcard1.png" title="Olympic from home" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard img="/eventcard5.jpeg" title="Oh I Know!" />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={4}>
              <EventCard img="/eventcard6.jpeg" title="Convince Us" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ViewDetailEvent;
