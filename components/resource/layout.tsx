import React from "react";
import { PlusIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

export interface LayoutProps {
  title: string;
  buttonAddLabel?: string;
  onClickButton?: () => void;
  hideButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Layout = (props: LayoutProps) => {
  const {
    title,
    buttonAddLabel = "Add",
    onClickButton = () => {},
    hideButton = false,
    children,
    className,
  } = props;
  return (
    <div
      className={`rounded-[0.5rem] border bg-background p-8 shadow ${className}`}
    >
      <div className="mb-8 flex justify-between">
        <div className="align-left flex flex-col items-start gap-2">
          <h1 className="text-2xl font-bold tracking-tight">
            {title} Management
          </h1>
          <p className="text-muted-foreground">
            Create, Read, Update, and Delete {title}
          </p>
        </div>
        {!hideButton ? (
          <div>
            <Button onClick={onClickButton} type="submit">
              <PlusIcon className="mr-2" />
              {buttonAddLabel}
            </Button>
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default Layout;
