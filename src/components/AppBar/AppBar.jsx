import { Navigation } from "../Navigation/Navigation";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const AppBar = () => {

    return (
        <div>
            <header>
                <Navigation/>
            </header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet/>
            </Suspense>            
        </div>

    )
}