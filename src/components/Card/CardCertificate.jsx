import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import VisibilityIcon from "@material-ui/icons/Visibility";

CardCertificate.propTypes = {
  title: PropTypes.string,
  certificates: PropTypes.array,
};

CardCertificate.defaultProps = {
  title: "",
  certificates: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
    borderRadius: "40px",
    padding: "0 1rem",
    width: "95%",
    marginTop: theme.spacing(8.3),
  },
  title: {
    textAlign: "center",

    "& > p": {
      display: "inline-block",
      backgroundColor: "#0DAB42",
      width: "252px",
      height: "50px",
      borderRadius: "0 0 40px 40px",
      textAlign: "center",
      color: "#FFF",
      lineHeight: "50px",
      boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
      fontWeight: "bolder",
    },
  },

  info: {
    margin: "25px",
    display: "flex",

    "& > div:last-child": {
      marginLeft: "20px",
      wordBreak: "break-word",

      "& > p": {
        marginBottom: theme.spacing(1),
        fontSize: "80%",
      },
      "& > p:first-child": {
        fontWeight: "bolder",
      },
    },
  },

  desc: {
    marginLeft: theme.spacing(3),

    "& > p": {
      marginBottom: theme.spacing(1),
      fontSize: "80%",
    },
    "& > p:first-child": {
      fontWeight: "bolder",
    },
  },

  titleDesc: {
    fontWeight: "bolder",
  },
}));

function CardCertificate({ title, certificates }) {
  const classes = useStyles();
  return (
		<Box className={classes.root}>
			<Box className={classes.title}>
				<Typography variant='body1'>{title}</Typography>
			</Box>
			{certificates.map((item, key) => (
				<Box className={classes.info}>
					<Box>
						<CardMembershipIcon color='primary' />
					</Box>
					<Box className={classes.desc}>
						<Typography variant='body1' color='primary'>
							{item.certificate.certificate_Title}
						</Typography>
						<Typography variant='body1' className={classes.titleDesc}>
							{item.certificate.issuing_Organization}
						</Typography>
						<Typography variant='body2'>
							{item.certificate.certificate_Description}
						</Typography>
					</Box>
					<Box>
						<a
							target='_blank'
							rel='noreferrer'
							href={item.certificate.certificate_Image_Link}>
							<VisibilityIcon color='primary' />
						</a>
					</Box>
				</Box>
			))}
		</Box>
	);
}

export default CardCertificate;
