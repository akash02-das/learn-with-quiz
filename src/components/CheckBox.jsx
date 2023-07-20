const CheckBox = ({ text, labelClass, ...rest }) => {
  return (
    <label className={labelClass}>
      <input type='checkbox' {...rest} /> <span>{text}</span>
    </label>
  );
};

export default CheckBox;
