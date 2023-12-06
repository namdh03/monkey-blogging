import { Fragment } from "react";
import uploadImage from "@assets/img/img-upload.png";
import { UploadProps } from "@ts/index";
import { UploadStyled } from "./Upload.styled";

const Upload = (props: UploadProps) => {
    const {
        name,
        className,
        progress = 0,
        image = "",
        onDelete,
        ...rest
    } = props;

    return (
        <UploadStyled className={className}>
            {!image && progress === 0 && (
                <>
                    <input
                        type="file"
                        name={name}
                        className="hidden-input"
                        onChange={() => {}}
                        {...rest}
                    />

                    <div className="none-image-wrapper">
                        <img
                            src={uploadImage}
                            alt="upload-img"
                            className="none-image"
                        />
                        <p className="text">Choose photo</p>
                    </div>
                </>
            )}

            {image && (
                <Fragment>
                    <img src={image} className="image" alt="" />
                    <button
                        type="button"
                        className="delete-button"
                        onClick={onDelete}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                    </button>
                </Fragment>
            )}

            {!image && (
                <div
                    className="progress"
                    style={{
                        width: `${Math.ceil(progress)}%`,
                    }}
                ></div>
            )}
        </UploadStyled>
    );
};

export default Upload;
