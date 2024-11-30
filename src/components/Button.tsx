import { ReactElement } from "react"

interface ButtonProps{
    variant: "primary" | "secondary",
    text: string,
    startIcon: ReactElement,
    onClick?: () => void;
}

const variantClass = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600"
}

const defaultStyle = "px-4 py-2 rounded-md font-light flex item-center"

export function Button({variant, text, startIcon, onClick}: ButtonProps){
    return <button onClick={onClick} className={variantClass[variant] + " " + defaultStyle} >
    <div className="pr-2">
    {startIcon }
    </div>
    {text}

    </button>
}



























// import { ReactElement } from "react";


// type Variants = "primary" | "secondary"

// interface ButtonProps{
//     variant: Variants;
//     size: "sm" | "md" | "lg";
//     text: string;
//     startIcon?: ReactElement;
//     endIcon?: ReactElement;
//     onClick: () => void;
// }

// const variantStyle = {
//     "primary": "bg-purple-600 text-white",
//     "secondary": "bg-purple-300 text-purple-600"
// }

// const sizeStyle = {
//     "sm": "py-1 px-2",
//     "md": "py-2 px-4",
//     "lg": "py-4 px-6"
// }

// const defaultStyle = "rounded-md flex"

// export const Button = (props: ButtonProps) => {
//     return <button className={`${variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>
//         {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon ? <div>
//             {props.endIcon}
//         </div> : null}
//     </button>
// }

// <Button variant="primary" size="md" onClick={() => {}} text="hello" />