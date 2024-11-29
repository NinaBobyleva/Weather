import { ReactNode } from "react";

export function Wrapper({children}: {children: ReactNode}) {
    return (
        <main className="flex flex-wrap justify-center">
            {children}
        </main>
    );
}