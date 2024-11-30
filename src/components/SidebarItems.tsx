import { ReactElement } from "react";

export function SidebarItems({text, icon}: {
    text: string;
    icon: ReactElement
}){
    return <div className="flex pl-4 items-center cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
        <div className="pl-2">
            {icon}
        </div>
        <div>
            {text} 
        </div>
         
    </div>
}