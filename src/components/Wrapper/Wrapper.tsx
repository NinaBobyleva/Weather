import { ReactNode } from "react";

export function Wrapper({children}: {children: ReactNode}) {
    return (
        <main className="px-[140px] py-[120px]">
            {children}
        </main>
    );
}