import {RouteObject} from "react-router-dom";
import {Counter} from "../Pages/Counter.tsx";
import {CursorHandler} from "../Pages/CursorHandler.tsx";
import {HideText} from "../Pages/HideText.tsx";
import {TabsPage} from "../Pages/Tabs.tsx";
import {News} from "../Pages/News.tsx";
import {Progress} from "../Pages/Progress.tsx";

type NamedRouteObject = RouteObject & {
    name: string,
};

export const routes: NamedRouteObject[] = [
    {
        path: "/",
        element: <Counter />,
        name: "Random number",
    },
    {
        path: "/cursor",
        element: <CursorHandler />,
        name: "Cursor",
    },
    {
        path: "/hide-text",
        element: <HideText />,
        name: "Hide text",
    },
    {
        path: "/tabs",
        element: <TabsPage />,
        name: "Tabs",
    },
    {
        path: "/delete-news",
        element: <News />,
        name: "News",
    },
    {
        path: "/progress",
        element: <Progress />,
        name: "Progress bar",
    },
];