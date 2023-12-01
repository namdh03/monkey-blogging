import { FC } from "react";
import { ImageProps } from "@ts/index";
import { ImageStyled } from "./Image.styled";

const Image: FC<ImageProps> = ({ url, ...props }) => {
    return <ImageStyled src={url} alt="unsplash" {...props} />;
};

export default Image;
