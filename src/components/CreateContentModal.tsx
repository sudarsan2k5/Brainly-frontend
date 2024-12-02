import { CrossIcons } from "../icons/CrossIcons";
import { Button } from "./Button";
import { Input } from "./Input";

export function CreateContentModal({open, onClose}){
    return <div>
            {open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
                <div className="flex flex-col justify-center">
                    <span className="bg-white opacity-100 p-4 rounded-md shadow-md">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcons/>
                            </div>
                        </div>
                        <div>
                            <Input placeholder={"Title"}/>
                            <Input placeholder={"Link"}/>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="primary" text="Submit"/>
                        </div>
                    </span>
                </div>
            </div>}
    </div>
}
