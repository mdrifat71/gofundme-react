import { Grid, Link } from "@material-ui/core";
import React from "react";
import { GoFundMeButton, GoFundMeVideoButton } from "../../style";

import { FiPlayCircle } from "react-icons/fi";
function GFMButtonGroup({ videoToggleHandler }) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={4}>
          <GoFundMeButton minWidth="20rem">
            <Link to="/start">Start a GoFundMe</Link>
          </GoFundMeButton>
        </Grid>
        <Grid
          item
          xs={0}
          md={1}
          style={{ textAlign: "center", alignItems: "center" }}
        >
          <span
            style={{
              marginTop: "1rem",
              display: "inline-block",
              borderLeft: "1px solid #ddd",
              height: "3rem",
            }}
          ></span>
        </Grid>
        <Grid item xs={12} md={7}>
          <GoFundMeVideoButton
            onClick={() => {
              videoToggleHandler();
              console.log("dfdf");
            }}
          >
            <FiPlayCircle />
            See how GoFundMe works
          </GoFundMeVideoButton>
        </Grid>
      </Grid>
    </>
  );
}

export default GFMButtonGroup;
