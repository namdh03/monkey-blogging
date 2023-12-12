import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { toast } from "react-toastify";
import slugify from "slugify";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Field from "@components/Field";
import Label from "@components/Label";
import Input from "@components/Input";
import Radio from "@components/Radio";
import Button from "@components/Button";
import configs from "@configs/index";
import { AddCategoryType } from "@ts/index";
import { CategoryStatus } from "@utils/enum";
import Heading from "../Heading";

const UpdateCategory = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const { control, handleSubmit, watch, reset } = useForm<AddCategoryType>();
    const [loading, setLoading] = useState<boolean>(false);
    const watchStatus = watch("status");
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                if (!id) return null;

                setLoading(true);

                const docRef = doc(configs.firebase.db, "categories", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    reset(docSnap.data());
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

    const handleUpdateCategory = async (values: AddCategoryType) => {
        try {
            if (!id) return null;

            setLoading(true);

            const colRef = doc(configs.firebase.db, "categories", id);

            await updateDoc(colRef, {
                ...values,
                status: Number(values.status),
                slug: slugify(values.slug || values.categoryName, {
                    lower: true,
                }),
            });
            navigate(configs.routes.manageCategory)
            toast.success("Update category successfully");
        } catch (error) {
            swal("Failed!", "Something went wrong!", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section>
            <Heading
                title="Update category"
                subtitle={`Update your category - id: ${id}`}
            />

            <form onSubmit={handleSubmit(handleUpdateCategory)}>
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
                        <Radio
                            name="status"
                            control={control}
                            checked={
                                Number(watchStatus) === CategoryStatus.APPROVED
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
                    </Field>
                </div>

                <Button variant="default" isLoading={loading}>
                    Update category
                </Button>
            </form>
        </section>
    );
};

export default UpdateCategory;
