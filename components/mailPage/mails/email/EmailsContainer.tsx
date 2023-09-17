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
        isViewed={false}
      />
      <EmailItem
        subject={"PWC Offer and Contract"}
        body={
          "Strictly private and confidetial! We are excited to have you join the PwC family where you will have an opportunity to learn, develop and charter your career."
        }
        time={"12:14"}
        isImportant={false}
        isStarred={false}
        isViewed={false}
      />
    </div>
  );
};

export default EmailContainer;
