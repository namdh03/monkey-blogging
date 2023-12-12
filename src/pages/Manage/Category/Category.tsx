import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import Button from "@components/Button";
import Table from "@components/Table";
import { Actions } from "@components/Actions";
import Tag from "@components/Tag";
import configs from "@configs/index";
import { CategoryStatus } from "@utils/enum";
import { CategoryType } from "@ts/index";
import Heading from "../Heading";
import { CategoryStyled } from "./Category.styled";

const Category = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        const colRef = collection(configs.firebase.db, "categories");

        onSnapshot(colRef, (snapshot) => {
            const results: CategoryType[] = [];

            snapshot.forEach((doc) => {
                results.push({
                    ...doc.data(),
                    id: doc.id,
                } as CategoryType);
            });

            setCategories(results);
        });
    }, []);

    return (
        <CategoryStyled>
            <Heading title="Categories" subtitle="Manage your category">
                <Button to={configs.routes.addCategory} variant="default">
                    Create category
                </Button>
            </Heading>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {categories &&
                        categories.map((category) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.categoryName}</td>
                                <td>
                                    <span className="category-name">
                                        {category.slug}
                                    </span>
                                </td>
                                <td>
                                    {category.status ===
                                        CategoryStatus.APPROVED && (
                                        <Tag variant="success">Approved</Tag>
                                    )}

                                    {category.status ===
                                        CategoryStatus.UN_APPROVED && (
                                        <Tag variant="warning">Unapproved</Tag>
                                    )}
                                </td>
                                <td>
                                    <div className="actions">
                                        <Actions.View />
                                        <Actions.Edit />
                                        <Actions.Delete />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </CategoryStyled>
    );
};

export default Category;
