import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownComp = ({ markdownContent }) => {
  return <ReactMarkdown className={"mark"}>{markdownContent}</ReactMarkdown>;
};

export default MarkdownComp;
