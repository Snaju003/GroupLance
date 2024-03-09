import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Typography, IconButton, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Mypost(props) {
  const theme = useTheme();
  const { color, groupName, groupImage, postdesc } = props;
  const [rating, setRating] = useState(0);

  const handleRating = (starCount) => {
    setRating(starCount);
  };

  return (
    <>
      <Card sx={{ display: "flex", maxWidth: "100%" }}>
        {groupImage && groupImage.trim() !== "" && (
          <CardMedia
            component="img"
            sx={{ margin: "5rem", width: "25%", height: "50%", borderRadius: "0" }}
            image={groupImage}
            alt="Group Image"
          />
        )}
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {groupName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {postdesc}
            </Typography>
          </CardContent>
          <Box display="flex" alignItems="center" marginBottom={15} >
            {[1, 2, 3, 4, 5].map((star) => (
              <IconButton
                key={star}
                onClick={() => handleRating(star)}
                color={star <= rating ? "warning" : "inherit"}
              >
                <StarIcon />
              </IconButton>
            ))}
            <Typography variant="body1" style={{ color: "black" }}>
              Rated: {rating} stars
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default Mypost;
