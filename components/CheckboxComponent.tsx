import React, { FC, useState } from "react";

type CheckboxComponentProps = {
  name: string;
  value: string;
  text: string;
  disabled: boolean;
  checked: boolean;
  handleChangeStatus: (event: string) => void;
};

const CheckboxComponent: FC<CheckboxComponentProps> = ({
  name,
  value,
  text,
  disabled,
  handleChangeStatus,
  checked,
}) => {
  const [check, setCheck] = useState<boolean>(false);

  const handlerCheck = (event: string) => {
      handleChangeStatus(event);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id="terms2"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={(event: any) => handlerCheck(event.target.value)}
      />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
};

export default CheckboxComponent;
