import React, {
  PropsWithChildren,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Link.module.scss";
import cn from "classnames";

export interface LinkProps {
  children: string | ReactNode;
  href?: string;
  path?: string;
  className?: string;
}
export const Link: React.FC<PropsWithChildren<
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>> = ({ children, className, path, ...props }) => {
  const linkProps = {
    className: cn(styles.link, className),
    ...props,
  };

  return path ? (
    // <NavLink {...linkProps}>
    //   {children}
    // </NavLink>
    <></>
  ) : (
    <a {...linkProps} about="a link">
      {children}
    </a>
  );
};
