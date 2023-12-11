import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Button from "@components/Button";
import configs from "@configs/index";
import { CategoryStatus } from "@utils/enum";
import { AddCategoryType } from "@ts/index";
import Heading from "../Heading";
import { AddCategoryStyled } from "./AddCategory.styled";

const AddCategory = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { control, handleSubmit, watch } = useForm<AddCategoryType>();

    const handleAddNewCategory = async (values: AddCategoryType) => {
        try {
            setLoading(true);

            const newValues = {
                ...values,
                slug: slugify(values.categoryName || values.slug, {
                    lower: true,
                }),
                status: Number(values.status),
                createdAt: serverTimestamp(),
            };
            const colRef = collection(configs.firebase.db, "categories");

            await addDoc(colRef, newValues);

            toast.success("Add new category successfully");
        } catch (error) {
            toast.error("Add new category failed");
        } finally {
            setLoading(false);
        }
    };

    const watchStatus = watch("status");

    return (
        <AddCategoryStyled>
            <Heading title="New category" subtitle="Add new category" />

            <form onSubmit={handleSubmit(handleAddNewCategory)}>
                <div className="form-layout">
                    <Field>
                        <Label htmlFor="categoryName">Name</Label>
                        <Input
                            type="text"
                            control={control}
                            id="categoryName"
                            name="categoryName"
                            placeholder="Enter your category name"
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                            type="text"
                            control={control}
                            id="slug"
                            name="slug"
                            placeholder="Enter your slug"
                        />
                    </Field>
                </div>

                <div className="form-layout">
                    <Field>
                        <Label htmlFor="status">Status</Label>
                        <div className="form__radio">
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) ===
                                    CategoryStatus.APPROVED
                                }
                                value={CategoryStatus.APPROVED}
                            >
                                Approved
                            </Radio>

                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) ===
                                    CategoryStatus.UN_APPROVED
                                }
                                value={CategoryStatus.UN_APPROVED}
                            >
                                Unapproved
                            </Radio>
                        </div>
                    </Field>
                </div>

                <Button variant="primary" isLoading={loading}>
                    Add new category
                </Button>
            </form>
        </AddCategoryStyled>
    );
};

export default AddCategory;
