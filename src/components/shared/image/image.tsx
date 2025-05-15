import {default as NextImg, ImageProps as NextImgProps } from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ImageProps extends NextImgProps {
}

export function Image(props: Omit<NextImgProps, "width">) {
    const className = props.className
    props = {className: "", ...props}

    return (
        <div className={className} style={{position: "relative", overflow: "hidden"}}>
            <NextImg fill {...props}/>
        </div>
    )
}