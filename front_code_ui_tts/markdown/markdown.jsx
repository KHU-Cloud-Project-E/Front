import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

const MarkdownComp = ({ markdownContent }) => {
  return <ReactMarkdown className={"mark"} remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>;
};

export default MarkdownComp;
