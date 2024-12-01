import { ReactNode } from "react";

export function Wrapper({children}: {children: ReactNode}) {
    return (
        <main className="padding sm:paddingSM md:paddingMD">
            {children}
        </main>
    );
}