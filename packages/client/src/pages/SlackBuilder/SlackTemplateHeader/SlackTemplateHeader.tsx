import { useState } from "react";
import { Divider, FormControl } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListItemIcon from "@mui/material/ListItemIcon";
import { GenericButton, Select, Input } from "components/Elements";

import { BackButtonIcon } from "../../../components/Icons/Icons";
import { useNavigate } from "react-router-dom";

export interface IEmailHeaderProps {
  onPersonalizeClick: (e: any) => void;
  onSave: (e: any) => void;
  templateName: string;
  handleTemplateNameChange: (e: any) => void;
}

const SlackTemplateHeader = (props: IEmailHeaderProps) => {
  const navigate = useNavigate();
  const { onPersonalizeClick, templateName, handleTemplateNameChange, onSave } =
    props;
  const [activeJourney, setActiveJourney] = useState("Slack");
  const [titleEdit, setTitleEdit] = useState<boolean>(false);

  const handleTitleEdit = () => {
    setTitleEdit(!titleEdit);
  };

  const handleTitleEnter = (e: any) => {
    if (e.key === "Enter") {
      handleTitleEdit();
    }
  };

  const goToEmailBuilder = () => {
    navigate("/email-builder");
    return;
  };

  const handleActiveJourney = (e: any) => {
    if (e.target.value === "Email") goToEmailBuilder();
    setActiveJourney(e.target.value);
  };

  return (
    <div>
      <div className="flex text-center justify-between ml-[10px] h-[80px]">
        <h6 className="font-[Poppins] font-medium text-[14px] leading-[30px] flex items-center">
          <ListItemIcon sx={{ minWidth: "16px", paddingRight: "16px" }}>
            {BackButtonIcon()}
          </ListItemIcon>
          {!titleEdit ? (
            <h3 className="flex items-center gap-[10px]">
              {templateName}
              <EditIcon
                sx={{ fontSize: "25px", cursor: "pointer" }}
                onClick={handleTitleEdit}
              />
            </h3>
          ) : (
            <Input
              value={templateName}
              placeholder={"Enter segment title"}
              name="title"
              id="title"
              onChange={handleTemplateNameChange}
              onKeyDown={handleTitleEnter}
              autoFocus
              inputProps={{
                style: {
                  padding: "0px",
                  background: "#fff",
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "25px",
                  color: "#28282E",
                },
              }}
            />
          )}
        </h6>
        <Divider />

        <div className="flex text-center justify-between w-[400px] pr-[50px]">
          <div>
            <FormControl
              sx={{ maxWidth: "300px", paddingLeft: "15px", minWidth: "112px" }}
            >
              <Select
                id="activeJourney"
                value={activeJourney}
                options={[{ value: "Email" }, { value: "Slack" }]}
                onChange={handleActiveJourney}
                displayEmpty
                // sx={ border: "1px solid #D1D5DB"}
              />
            </FormControl>
          </div>
          <div>
            <GenericButton
              onClick={onSave}
              style={{
                maxWidth: "158px",
                maxHeight: "48px",
                "background-image":
                  "linear-gradient(to right, #6BCDB5 , #307179, #122F5C)",
              }}
            >
              Save Draft
            </GenericButton>
          </div>
          <div>
            <GenericButton
              data-slackexporttemplate
              onClick={onPersonalizeClick}
              style={{
                maxWidth: "158px",
                maxHeight: "48px",
                "background-image":
                  "linear-gradient(to right, #6BCDB5 , #307179, #122F5C)",
              }}
            >
              Personalize
            </GenericButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlackTemplateHeader;
