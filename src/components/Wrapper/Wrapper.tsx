import { ReactNode } from "react";

export function Wrapper({children}: {children: ReactNode}) {
    return (
        <main className="flex justify-center">
            {children}
        </main>
    );
}