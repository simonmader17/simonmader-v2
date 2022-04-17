import { useRef, useState } from "react";

const ContentEditable = ({ value, onChange = (...props) => {}, ...props }) => {
  const ref = useRef({ value, prevValue: null, key: null });

  if (ref.current.prevValue !== value) {
    ref.current.value = value;
    ref.current.key = Date.now();
  }

  const handleInput = (e) => {
    const value = e.target.innerText;
    ref.current.prevValue = value;
    onChange(value);
  };

  return (
    <span
      {...props}
      key={ref.current.key}
      contentEditable
      dangerouslySetInnerHTML={{ __html: ref.current.value }}
      onInput={handleInput}
    />
  );
};

const Test = () => {
  const [value, setValue] = useState("test");

  return <ContentEditable value={value} onChange={setValue} />;
};

export { ContentEditable };

export default Test;
