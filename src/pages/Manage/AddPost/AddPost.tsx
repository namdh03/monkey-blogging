import { useForm } from "react-hook-form";
import { AddPostStyled } from "./AddPost.styled";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Dropdown from "@components/Dropdown";
import Option from "@components/Option";
import Button from "@components/Button";
import { AddPostType } from "@ts/index";

const AddPost = () => {
    const { control, watch, setValue } = useForm<AddPostType>();
    const watchStatus = watch("status");

    return (
        <AddPostStyled>
            <h1 className="dashboard-heading">Add new post</h1>
            <form>
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
                        <Label htmlFor="status">Status</Label>
                        <div className="form__radio">
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === "approved"}
                                onClick={() => setValue("status", "approved")}
                                value="approved"
                            >
                                Approved
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === "pending"}
                                onClick={() => setValue("status", "pending")}
                                value="pending"
                            >
                                Pending
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === "reject"}
                                onClick={() => setValue("status", "reject")}
                                value="reject"
                            >
                                Reject
                            </Radio>
                        </div>
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
                        <Label htmlFor="category">Category</Label>
                        <Dropdown>
                            <Option>Knowledge</Option>
                            <Option>Blockchain</Option>
                            <Option>Setup</Option>
                            <Option>Nature</Option>
                            <Option>Developer</Option>
                        </Dropdown>
                    </Field>
                    <Field />
                </div>

                <Button variant="secondary" type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </AddPostStyled>
    );
};

export default AddPost;
