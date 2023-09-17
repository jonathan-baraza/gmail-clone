import React from "react";
import EmailItem from "./EmailItem";

const EmailContainer = () => {
  return (
    <div>
      <EmailItem
        subject={"Meta Learning Program"}
        body={"Final learning week!!!You have been added to week 7!!"}
        time={"12:14"}
        isImportant={false}
        isStarred={false}
      />
    </div>
  );
};

export default EmailContainer;
