import { merge, responsiveMerge } from "@/core/style";
import { ButtonBaseProps } from "./ButtonBaseProps";
import { ButtonBaseVariants } from "./ButtonBaseVariants";

const ButtonBase = ({ children, className, template, size, xs, sm, md, lg, xl, xxl }: ButtonBaseProps): JSX.Element => {
  let variants = ButtonBaseVariants({ template, size, className });
  let responsive = responsiveMerge({ xs, sm, md, lg, xl, xxl });

  return <button className={merge(variants, responsive)}>{children}</button>;
};

export default ButtonBase;
