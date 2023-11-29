import { FC } from "react";
import { LoadingProps } from "@ts/index";
import { LoadingStyled } from "./Loading.styled";

const Loading: FC<LoadingProps> = ({ size = "40px", thickness = 3.6 }) => {
    return <LoadingStyled $size={size} $thickness={thickness} />;
};

export default Loading;
