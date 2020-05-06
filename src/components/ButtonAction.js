// Dependencies
import React from "react";

// MaterialUI
import { Typography, Icon, CircularProgress } from "@material-ui/core";
import { red, green, blue, blueGrey } from "@material-ui/core/colors";

const actionValidation = (handleChangeFolder, color) => {
  const { id, idSelected, oldFolder, action } = handleChangeFolder;
  const newFolder =
    color === "blue"
      ? "new"
      : color === "green"
      ? "saved"
      : color === "red" && "deleted";
  console.log(id, idSelected, oldFolder, newFolder);
  if (idSelected === "" && oldFolder !== newFolder) {
    console.log(id, oldFolder, newFolder);
    action(id, oldFolder, newFolder);
  }
};

const ButtonActions = (props) => {
  const { id, idSelected, newFolder } = props.handleChangeFolder;
  const { color } = props;

  return (
    <div
      style={{
        cursor: props.disabled ? "pointer" : "no-drop",
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        color: !props.disabled
          ? blueGrey[200]
          : color === "blue"
          ? blue[500]
          : color === "green"
          ? green["A400"]
          : color === "red" && red[500],
      }}
      onClick={() => actionValidation(props.handleChangeFolder, color)}
    >
      <div
        style={{
          width: 40,
          height: 40,
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          borderRadius: 10,
          backgroundColor: !props.disabled
            ? blueGrey[50]
            : color === "blue"
            ? blue[100]
            : color === "green"
            ? green["A100"]
            : color === "red" && red[100],
        }}
      >
        {idSelected === id &&
        ((newFolder === "new" && color === "blue") ||
          (newFolder === "saved" && color === "green") ||
          (newFolder === "deleted" && color === "red")) ? (
          <CircularProgress
            size={20}
            color={
              color === "blue"
                ? blue[100]
                : color === "green"
                ? green["A100"]
                : color === "red" && red[100]
            }
          />
        ) : (
          <Icon
            style={{
              fontSize: 20,
              color: !props.disabled
                ? blueGrey[200]
                : color === "blue"
                ? blue[500]
                : color === "green"
                ? green["A400"]
                : color === "red" && red[500],
            }}
          >
            {color === "blue"
              ? "add"
              : color === "green"
              ? "save_alt"
              : color === "red" && "delete"}
          </Icon>
        )}
      </div>
      <Typography variant="caption">{props.text}</Typography>
    </div>
  );
};

export default ButtonActions;
