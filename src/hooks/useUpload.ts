import { ChangeEvent, useState } from "react";
import { UseFormGetValues, UseFormSetValue } from "react-hook-form";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
    getStorage,
} from "firebase/storage";
import { AddPostType } from "@ts/index";

export default function useUpload(
    setValue: UseFormSetValue<AddPostType>,
    getValues: UseFormGetValues<AddPostType>
) {
    const [progress, setProgress] = useState<number>(0);
    const [image, setImage] = useState<string>("");

    const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setValue("image", file.name);
        handleUploadImage(file);
    };

    const onReset = () => {
        setValue("image", "");
        setImage("");
        setProgress(0);
    }

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

    const onDelete = () => {
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

    return {
        progress,
        image,
        onReset,
        onSelectFile,
        onDelete,
    };
}
