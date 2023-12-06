import { useForm } from "react-hook-form";
import slugify from "slugify";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Dropdown from "@components/Dropdown";
import Option from "@components/Option";
import Button from "@components/Button";
import Upload from "@components/Upload";
import Toggle from "@components/Toggle";
import useUpload from "@hooks/useUpload";
import { AddPostType } from "@ts/index";
import { PostStatus } from "@utils/enum";
import { AddPostStyled } from "./AddPost.styled";

const AddPost = () => {
    const { control, watch, setValue, handleSubmit, getValues } =
        useForm<AddPostType>({
            defaultValues: {
                title: "",
                slug: "",
                category: "",
                status: PostStatus.PENDING,
                author: "",
                image: "",
                top: false,
            },
        });
    const watchStatus = watch("status");
    const watchTop = watch("top");
    const { image, progress, onSelectFile, onDelete } = useUpload(
        setValue,
        getValues
    );

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

                    <Field>
                        <Label htmlFor="top">Top</Label>
                        <Toggle
                            on={watchTop}
                            onClick={() => setValue("top", !watchTop)}
                        />
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
