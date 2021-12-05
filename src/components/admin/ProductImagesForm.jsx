import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Carousel } from "infinite-react-carousel";
import { Box } from "@mui/system";

//firebase
import storage from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Input = styled("input")({
  display: "none",
});

const ProductImagesForm = (handleSendImages) => {
  const allInputs = [];

  const [imagesAsFiles, setImagesAsFiles] = useState(allInputs);
  const [imagesAsUrls, setImagesAsUrls] = useState(allInputs);

  const handleUploadToFirebase = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    console.log(imagesAsFiles);
  }, [imagesAsFiles]);

  const handleImagesAsFiles = (e) => {
    for (let index = 0; index < e.target.files.length; index++) {
      const image = e.target.files[index];

      if (image.type !== "image/jpeg") {
        console.log(`Type not valid -> ${image.name}, ignored`);
        continue;
      }

      setImagesAsFiles((prevImages) => {
        const current = [...prevImages, image];
        return current;
      });
    }
  };

  return (
    <div>
      <Typography variant="h6">Imágenes:</Typography>
      {/* <form onSubmit={handleUploadToFirebase}> */}
      <label htmlFor="icon-button-file">
        <Input
          accept="image/*"
          id="icon-button-file"
          type="file"
          multiple={true}
          onChange={handleImagesAsFiles}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
        <Box>
          {imagesAsFiles ? (
            imagesAsFiles.map((image, idx) => (
              <span key={idx}>
                <img
                  style={{ height: "300px", width: "auto", margin: '1rem' }}
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                />
              </span>
            ))
          ) : (
            <span></span>
          )}
        </Box>
      </label>
      {/* </form> */}
    </div>
  );
};

export default ProductImagesForm;
