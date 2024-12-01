import { BrainIcon } from "../icons/BrainIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItems } from "./SidebarItems";

export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="pt-8">
            <div className="flex text-2xl pl-8 items-center">
                <div className="pr-2 text-purple-600">
                    <BrainIcon/>
                </div>
                Brainly
            </div>
            <div className="mt-8 pl-8">
                <SidebarItems text="Twitter" icon={<TwitterIcon/>}/>
                <SidebarItems text="Youtube" icon={<YoutubeIcon/>}/>
            </div>
        </div>
    </div>
}