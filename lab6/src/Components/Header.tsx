import React from "react";
import {routes} from "../router/routes.tsx";
export const Header: React.FC = () => {
    return (
        <div className={"p-4 bg-violet-600 rounded-b-lg text-gray-100 fixed t-0 w-full"}>
            <ul className={"flex flex-row justify-center"}>
                {routes.map((link) =>
                    link.path == location.pathname ?
                        <li className={"px-4 text-white border-4 border-transparent border-solid border-b-white cursor-default"} key={link.id}>{link.name}</li> :
                    <li className={"px-4 hover:text-white border-4 border-transparent border-solid hover:border-b-white active:border-b-violet-800 active:text-violet-800"} key={link.id}>
                        <a href={link.path as string}>{link.name}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}