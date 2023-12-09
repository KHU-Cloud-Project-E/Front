import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import "./github-markdown-light.min.css";

const MarkdownComp = ({ markdownContent }) => {
  return <ReactMarkdown className={"markdown-body"} remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>;
};

export default MarkdownComp;
