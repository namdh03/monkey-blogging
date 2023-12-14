import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import swal from "sweetalert";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Upload from "@components/Upload";
import Dropdown from "@components/Dropdown";
import Select from "@components/Select";
import List from "@components/List/List";
import Option from "@components/Option";
import Toggle from "@components/Toggle";
import Radio from "@components/Radio";
import Button from "@components/Button";
import configs from "@configs/index";
import { useUpload } from "@hooks/index";
import { PostStatus } from "@utils/enum";
import { AddPostType, CategoryType } from "@ts/index";
import Heading from "../Heading";
import { UpdatePostStyled } from "./UpdatePost.styled";

const UpdatePost = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const { handleSubmit, control, reset, setValue, getValues, watch } =
        useForm<AddPostType>();
    const watchStatus = watch("status");
    const watchTop = watch("top");
    const imageUrl = getValues("url");
    const imageName = getValues("image");
    const { image, setImage, progress, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues,
        imageName,
        handleDeletePostImg
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>();
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            try {
                if (!id) return null;

                setLoading(true);

                const docRef = doc(configs.firebase.db, "posts", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const cofRef = doc(
                        configs.firebase.db,
                        "categories",
                        docSnap.data()?.categoryId
                    );
                    const cofSnap = await getDoc(cofRef);

                    reset(docSnap.data());
                    setSelectedCategory(cofSnap.data() as CategoryType);
                } else {
                    // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            } finally {
                setLoading(false);
            }
        })();
    }, [id, reset]);

    useEffect(() => {
        (async () => {
            const result: CategoryType[] = [];
            const colRef = collection(configs.firebase.db, "categories");
            const querySnapshot = await getDocs(colRef);

            querySnapshot.forEach((doc) => {
                result.push({
                    ...(doc.data() as CategoryType),
                    id: doc.id,
                });
            });

            setCategories(result);
        })();
    }, []);

    useEffect(() => {
        setImage(imageUrl);
    }, [imageUrl, setImage]);

    async function handleDeletePostImg() {
        if (!id) return null;

        const colRef = doc(configs.firebase.db, "posts", id);

        await updateDoc(colRef, {
            image: "",
            url: "",
        });
    }

    const handleSelectOption = (category: CategoryType) => {
        setValue("categoryId", category.id);
        setSelectedCategory(category);
    };

    const handleUpdatePost = async (values: AddPostType) => {
        console.log(values);
        if (!id) return null;

        try {
            const colRel = doc(configs.firebase.db, "posts", id);

            await updateDoc(colRel, {
                content,
            });
            swal("Success!", "Update post successfully!", "success");
        } catch (error) {
            swal("Failed!", "Something went wrong!", "error");
        }
    };

    return (
        <UpdatePostStyled>
            <Heading title="Update post" subtitle="Update post content" />

            <form onSubmit={handleSubmit(handleUpdatePost)}>
                <div className="form-layout">
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

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="image">Image</Label>
                        <Upload
                            onChange={onSelectFile}
                            progress={progress}
                            image={image}
                            onDelete={onDelete}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="category">Category</Label>
                        <Dropdown>
                            <Select
                                placeholder={`${
                                    selectedCategory?.categoryName ||
                                    "Select the category"
                                }`}
                            />
                            <List>
                                {categories.length > 0 &&
                                    categories.map((category) => (
                                        <Option
                                            key={category.id}
                                            onClick={() =>
                                                handleSelectOption(category)
                                            }
                                        >
                                            {category.categoryName}
                                        </Option>
                                    ))}
                            </List>
                        </Dropdown>
                        {selectedCategory?.categoryName && (
                            <span className="tag">
                                {selectedCategory.categoryName}
                            </span>
                        )}
                    </Field>
                </div>

                <div className="form-layout form-layout--full">
                    <Field>
                        <Label htmlFor="content">Content</Label>
                        <div className="entry-content quill">
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                            />
                        </div>
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="top">Top</Label>
                        <Toggle
                            on={watchTop}
                            onClick={() =>
                                setValue("top", watchTop === 1 ? 0 : 1)
                            }
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="status">Status</Label>
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
                            checked={Number(watchStatus) === PostStatus.PENDING}
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
                    </Field>
                </div>

                <Button
                    variant="secondary"
                    type="submit"
                    className="mx-auto"
                    isLoading={loading}
                >
                    Update post
                </Button>
            </form>
        </UpdatePostStyled>
    );
};

export default UpdatePost;
