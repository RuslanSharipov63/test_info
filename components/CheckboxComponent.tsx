import { Checkbox } from "@/components/ui/checkbox";
import { FC } from "react";

type CheckboxComponentProps = {
    name: string;
    value: string;
    checked: boolean;
    text: string;
   /*  disabled: boolean */
}


const CheckboxComponent: FC<CheckboxComponentProps> = ({name, value, text, checked/* , disabled */}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" name={name} value={value} checked={checked} /* disabled={disabled} *//>
      <label
        htmlFor="terms2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
       {text}
      </label>
    </div>
  );
};

export default CheckboxComponent;
