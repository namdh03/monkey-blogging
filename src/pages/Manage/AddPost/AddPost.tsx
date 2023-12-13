import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Dropdown from "@components/Dropdown";
import Option from "@components/Option";
import Button from "@components/Button";
import Upload from "@components/Upload";
import Toggle from "@components/Toggle";
import Select from "@components/Select";
import List from "@components/List/List";
import configs from "@configs/index";
import { useAuth, useUpload } from "@hooks/index";
import { AddPostType, CategoryType } from "@ts/index";
import { PostStatus } from "@utils/enum";
import Heading from "../Heading";
import { AddPostStyled } from "./AddPost.styled";

const AddPost = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { control, watch, setValue, handleSubmit, getValues, reset } =
        useForm<AddPostType>({
            defaultValues: {
                title: "",
                slug: "",
                categoryId: "",
                status: PostStatus.PENDING,
                image: "",
                top: 0,
            },
        });
    const watchStatus = watch("status");
    const watchTop = watch("top");
    const { image, progress, onReset, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues
    );
    const [loading, setLoading] = useState<boolean>(false);
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryType>();

    useEffect(() => {
        (async () => {
            const result: CategoryType[] = [];
            const colRef = collection(configs.firebase.db, "categories");
            const q = query(colRef, where("status", "==", 1));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                result.push({
                    ...(doc.data() as CategoryType),
                    id: doc.id,
                });
            });

            setCategories(result);
        })();
    }, []);

    const handleAddPost = async (values: AddPostType) => {
        try {
            setLoading(true);

            const post = {
                ...values,
                status: Number(values.status),
                slug: slugify(values.slug || values.title, { lower: true }),
            };

            const cofRef = collection(configs.firebase.db, "posts");
            await addDoc(cofRef, {
                ...post,
                url: image,
                userId: user?.uid,
                createdAt: serverTimestamp(),
            });
            toast.success("Add new post successfully!");
            reset();
            onReset();
            setSelectedCategory(undefined);
            navigate(configs.routes.managePost);
        } catch (error) {
            toast.error("Add new post failed!");
        } finally {
            setLoading(false);
        }
    };

    const handleSelectOption = (category: CategoryType) => {
        setValue("categoryId", category.id);
        setSelectedCategory(category);
    };

    return (
        <AddPostStyled>
            <Heading title="Add post" subtitle="Add new post" />
            <form onSubmit={handleSubmit(handleAddPost)}>
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
                </div>

                <div className="form__btn">
                    <Button
                        variant="secondary"
                        type="submit"
                        className="mx-auto"
                        isLoading={loading}
                    >
                        Add new post
                    </Button>
                </div>
            </form>
        </AddPostStyled>
    );
};

export default AddPost;
