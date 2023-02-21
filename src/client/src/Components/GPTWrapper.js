import React from "react";
import {
  Box,
  Button,
  Divider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import GPTResult from "./GPTResult";
import GPTHelper from "../Helpers/GPT";

const GPTWrapper = () => {
  const [description, setDescription] = React.useState("");
  const [includeHashtag, setIncludeHashtag] = React.useState(false);

  const [gptResult, setGptResult] = React.useState({
    caption: "",
    hashtags: "",
  });

  const generateCaption = () => {
    GPTHelper.getText("caption", description)
      .then((res) => res.json())
      .then((data) => {
        setGptResult({
          ...gptResult,
          caption: data.choices[0].text,
        });
      });
    if (includeHashtag) {
      GPTHelper.getText("hashtags", description)
        .then((res) => res.json())
        .then((data) => {
          setGptResult({
            ...gptResult,
            hashtags: data.choices[0].text,
          });
        });
    } else if(!includeHashtag) {
      setGptResult({
        ...gptResult,
        hashtags: "",
      });
    }
  };
  console.log({
    description,
    gptResult,
  });
  return (
    <Box sx={{ marginTop: 2 }}>
      <Typography variant="h5">Generate Caption</Typography>
      <Divider sx={{ marginBottom: 1, marginTop: 1 }} />

      <TextField
        name="caption"
        label="Desciption"
        variant="outlined"
        multiline
        onChange={(e) => setDescription(e.target.value)}
        id="outlined-multiline-static"
        defaultValue="Describe your photo"
        rows={2}
        sx={{ width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <label>
            Generate Hashtags
            <Switch onChange={(e) => setIncludeHashtag(e.target.checked)} />
          </label>
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="medium"
          endIcon={<CreateIcon />}
          onClick={generateCaption}
        >
          Generate
        </Button>
      </Box>
      {gptResult.caption && <GPTResult caption={gptResult.caption} hashtags={gptResult.hashtags} />}
    </Box>
  );
};

export default GPTWrapper;
