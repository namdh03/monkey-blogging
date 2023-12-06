import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
    getStorage,
} from "firebase/storage";

import { AddPostStyled } from "./AddPost.styled";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Dropdown from "@components/Dropdown";
import Option from "@components/Option";
import Button from "@components/Button";
import Upload from "@components/Upload";
import { AddPostType } from "@ts/index";
import { PostStatus } from "@utils/enum";

const AddPost = () => {
    const { control, watch, setValue, handleSubmit, getValues } =
        useForm<AddPostType>();
    const watchStatus = watch("status");
    const [progress, setProgress] = useState<number>(0);
    const [image, setImage] = useState<string>("");

    const handleAddPost = (values: AddPostType) => {
        const post = {
            ...values,
            status: Number(values.status),
            slug: slugify(values.slug || values.title),
        };

        console.log(post);
    };

    const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setValue("image", file.name);
        handleUploadImage(file);
    };

    const handleUploadImage = async (file: File) => {
        const storage = getStorage();

        // Create the file metadata
        /** @type {any} */
        const metadata = {
            contentType: "image/jpeg",
        };

        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case "storage/unauthorized":
                        // User doesn't have permission to access the object
                        break;
                    case "storage/canceled":
                        // User canceled the upload
                        break;

                    // ...

                    case "storage/unknown":
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setImage(downloadURL);
                });
            }
        );
    };

    const handleDeleteImage = () => {
        const storage = getStorage();

        // Create a reference to the file to delete
        const imageRef = ref(storage, "images/" + getValues("image"));

        // Delete the file
        deleteObject(imageRef)
            .then(() => {
                // File deleted successfully
                setImage("");
                setProgress(0);
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log("handleDeleteImage ~ error", error);
                console.log("Can not delete image");
            });
    };

    return (
        <AddPostStyled>
            <h1 className="dashboard-heading">Add new post</h1>
            <form onSubmit={handleSubmit(handleAddPost)}>
                <div className="form__group">
                    <Field>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            control={control}
                            placeholder="Enter your title"
                            name="title"
                            id="title"
                            type="text"
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                            id="slug"
                            type="text"
                        />
                    </Field>
                </div>

                <div className="form__group">
                    <Field>
                        <Label htmlFor="image">Image</Label>
                        <Upload
                            onChange={handleSelectFile}
                            className="h-[250px]"
                            progress={progress}
                            image={image}
                            onDelete={handleDeleteImage}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="author">Author</Label>
                        <Input
                            id="author"
                            name="author"
                            type="text"
                            control={control}
                            placeholder="Find the author"
                        />
                    </Field>
                </div>

                <div className="form__group">
                    <Field>
                        <Label htmlFor="status">Status</Label>
                        <div className="form__radio">
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === PostStatus.APPROVED
                                }
                                value={PostStatus.APPROVED}
                            >
                                Approved
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === PostStatus.PENDING
                                }
                                value={PostStatus.PENDING}
                            >
                                Pending
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === PostStatus.REJECTED
                                }
                                value={PostStatus.REJECTED}
                            >
                                Reject
                            </Radio>
                        </div>
                    </Field>

                    <Field>
                        <Label htmlFor="category">Category</Label>
                        <Dropdown>
                            <Option>Knowledge</Option>
                            <Option>Blockchain</Option>
                            <Option>Setup</Option>
                            <Option>Nature</Option>
                            <Option>Developer</Option>
                        </Dropdown>
                    </Field>
                </div>

                <Button variant="secondary" type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </AddPostStyled>
    );
};

export default AddPost;
