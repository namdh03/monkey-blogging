import { useForm } from "react-hook-form";
import Field from "@components/Field";
import Input from "@components/Input";
import Label from "@components/Label";
import Button from "@components/Button";
import { AddPostType } from "@ts/index";
import { AddPostStyled } from "./AddPost.styled";

const AddPost = () => {
    const { control } = useForm<AddPostType>();

    return (
        <AddPostStyled>
            <h1 className="dashboard-heading">Add new post</h1>
            <form>
                <div className="form__group">
                    <Field>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text"
                            control={control}
                            placeholder="Enter your title"
                            name="title"
                            id="title"
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            type="text"
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                            id="slug"
                        />
                    </Field>
                </div>
                <div className="form__group">
                    <Field>
                        <Label htmlFor="">Status</Label>
                    </Field>
                    <Field>
                        <Label htmlFor="">Author</Label>
                    </Field>
                </div>
                <div className="form__group">
                    <Field>
                        <Label htmlFor="">Category</Label>
                    </Field>
                    <Field></Field>
                </div>
                <Button variant="secondary" type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </AddPostStyled>
    );
};

export default AddPost;
