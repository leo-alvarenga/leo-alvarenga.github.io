import { ReactNode } from "react";
import LanguageSwitch from "./LanguageSwitch";
import ShellPS1 from "./Shell";

export interface PageProps {
  children?: ReactNode;
  disableShell?: boolean;
}

function Page({ children, disableShell }: PageProps) {
  return (
    <div className="flex justify-center min-h-[100vh] h-[100%] bg-background p-8 max-xl:p-4">
      <div className="flex items-center flex-col gap-4 w-[60%] max-xl:w-full h-fit p-4 mb-28 rounded-lg bg-black2 text-foreground">
        <div className="flex w-[100%] items-start">
          {!disableShell && <ShellPS1 />}
          <LanguageSwitch />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Page;

// o helper seria uma classe separado das duas
// esse reflection n sei o q é acho q oq ele tah dizendo é uniao
// string | int
// in ? tipo em -> 'id' in objeto
