import { useState } from "react";

export default function useCopyToClipboard() {
    const [copiedOpen, setCopiedOpen] = useState(false);
  
    const handleCopy = () => {
      setTimeout(() => {
        setCopiedOpen(true);
      }, 200);
      setTimeout(() => {
        setCopiedOpen(false);
      }, 1000);
    };
  
    return { copiedOpen, handleCopy };
  }