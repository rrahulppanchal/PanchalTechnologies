import React, { useEffect } from "react";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  });
  return <div>Blog</div>;
}
