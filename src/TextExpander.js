import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  buttonInline = true,
  expanded = false,
  className = "",
  children,
}) {
  const [isOpen, setIsOpen] = useState(expanded);
  const text = isOpen
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  function handleExpand() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={className}>
      <span>
        {text}
        {!buttonInline ? <br /> : null}
      </span>
      <span
        style={{ color: buttonColor, cursor: "pointer" }}
        onClick={handleExpand}
      >
        {isOpen ? collapseButtonText : expandButtonText}
      </span>
    </div>
  );
}
