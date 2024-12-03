import { ReactNode } from "react";

export function Wrapper({children}: {children: ReactNode}) {
    return (
        <main className="padding sm:paddingSM md-xl:paddingMD xl:px-[112px]">
            {children}
        </main>
    );
}