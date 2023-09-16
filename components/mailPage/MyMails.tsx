import React from "react";
import MailsHead from "./mails/MailsHead";
import MailsTabs from "./mails/MailsTabs";
import EmailsContainer from "./mails/email/EmailsContainer";

const MyMails = () => {
  return (
    <div className="w-full pr-4 h-full">
      <div className="h-full w-full bg-white rounded-t-2xl pt-[5px]">
        <MailsHead />
        <MailsTabs/>
        <EmailsContainer/>
      </div>
    </div>
  );
};

export default MyMails;
