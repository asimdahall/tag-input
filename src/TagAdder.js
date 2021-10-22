import React from "react";

const defaultTags = [
  "asim",
  "manish",
  "hamdi",
  "samdi",
  "asim",
  "manish",
  "hamdi",
  "samdi"
];

const TagAdder = () => {
  const [tags, setTags] = React.useState(defaultTags);
  const inputRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target?.["tag-input"]?.value || "";
    e.target.reset();
    setTags((tags) => [...tags, value]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      onClick={() => inputRef.current.focus()}
    >
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
      <input
        ref={inputRef}
        name="tag-input"
        className="tagInput"
        style={{
          flex: "1",
          height: "20px",
          border: "none",
          outline: "none"
        }}
      />
    </form>
  );
};

export default TagAdder;
