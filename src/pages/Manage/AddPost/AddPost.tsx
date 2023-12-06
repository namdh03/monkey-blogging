import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { collection, getDocs, query, where } from "firebase/firestore";
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
import { useUpload } from "@hooks/index";
import { AddPostType, CategoryType } from "@ts/index";
import { PostStatus } from "@utils/enum";
import { AddPostStyled } from "./AddPost.styled";

const AddPost = () => {
    const { control, watch, setValue, handleSubmit, getValues } =
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
    const { image, progress, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues
    );
    const [categories, setCategories] = useState<CategoryType[]>([]);

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

    const handleAddPost = (values: AddPostType) => {
        const post = {
            ...values,
            status: Number(values.status),
            slug: slugify(values.slug || values.title),
        };

        console.log(post);
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
                            onChange={onSelectFile}
                            className="h-[250px]"
                            progress={progress}
                            image={image}
                            onDelete={onDelete}
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="category">Category</Label>
                        <Dropdown>
                            <Select placeholder="Select the category" />
                            <List>
                                {categories.length > 0 &&
                                    categories.map((category) => (
                                        <Option
                                            key={category.id}
                                            onClick={() =>
                                                setValue(
                                                    "categoryId",
                                                    category.id
                                                )
                                            }
                                        >
                                            {category.name}
                                        </Option>
                                    ))}
                            </List>
                        </Dropdown>
                    </Field>
                </div>

                <div className="form__group">
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

                <Button variant="secondary" type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </AddPostStyled>
    );
};

export default AddPost;
