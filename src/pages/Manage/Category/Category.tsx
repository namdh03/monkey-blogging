import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    DocumentData,
    QueryDocumentSnapshot,
    collection,
    deleteDoc,
    doc,
    getDocs,
    limit,
    onSnapshot,
    query,
    startAfter,
    where,
} from "firebase/firestore";
import swal from "sweetalert";
import Button from "@components/Button";
import Table from "@components/Table";
import { Actions } from "@components/Actions";
import Tag from "@components/Tag";
import configs from "@configs/index";
import { CategoryStatus } from "@utils/enum";
import { CategoryType } from "@ts/index";
import { useDebounce } from "@hooks/index";
import Heading from "../Heading";
import { CategoryStyled } from "./Category.styled";

const Category = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [search, setSearch] = useState<string>("");
    const searchDebounce = useDebounce(search, 500);
    const [lastDoc, setLastDoc] =
        useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
    const [totalPage, setTotalPage] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const colRef = collection(configs.firebase.db, "categories");
            const searchColRef = searchDebounce
                ? query(
                      colRef,
                      where("categoryName", ">=", searchDebounce),
                      where("categoryName", "<=", `${searchDebounce}\uf8ff`),
                      limit(1)
                  )
                : query(colRef, limit(1));
            const documentSnapshots = await getDocs(searchColRef);
            // Get the last visible document
            const lastVisible =
                documentSnapshots.docs[documentSnapshots.docs.length - 1];

            setLastDoc(lastVisible);

            onSnapshot(colRef, (snapshot) => {
                setTotalPage(snapshot.size);
            });

            onSnapshot(searchColRef, (snapshot) => {
                const results: CategoryType[] = [];

                snapshot.forEach((doc) => {
                    results.push({
                        ...doc.data(),
                        id: doc.id,
                    } as CategoryType);
                });

                setCategories(results);
            });
        })();
    }, [searchDebounce]);

    const handleDeleteCategory = async (id: string) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                await deleteDoc(doc(configs.firebase.db, "categories", id));
                swal(
                    "Deleted!",
                    "Your imaginary file has been deleted!",
                    "success"
                );
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            }
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    const handleLoadMore = async () => {
        try {
            // Construct a new query starting at this document,
            const next = query(
                collection(configs.firebase.db, "categories"),
                startAfter(lastDoc || 0),
                limit(1)
            );
            const documentSnapshots = await getDocs(next);
            const lastVisible =
                documentSnapshots.docs[documentSnapshots.docs.length - 1];

            onSnapshot(next, (snapshot) => {
                const results: CategoryType[] = [];

                snapshot.forEach((doc) => {
                    results.push({
                        ...doc.data(),
                        id: doc.id,
                    } as CategoryType);
                });

                setCategories([...categories, ...results]);
            });

            setLastDoc(lastVisible);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CategoryStyled>
            <Heading title="Categories" subtitle="Manage your category">
                <div className="category-heading">
                    <div className="category-search">
                        <input
                            type="text"
                            className="category-input"
                            placeholder="Search post..."
                            value={search}
                            onChange={handleSearch}
                        />
                    </div>
                    <Button to={configs.routes.addCategory} variant="default">
                        Create category
                    </Button>
                </div>
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
                                        <Actions.Edit
                                            onClick={() =>
                                                navigate(
                                                    `${configs.routes.updateCategory}?id=${category.id}`
                                                )
                                            }
                                        />
                                        <Actions.Delete
                                            onClick={() =>
                                                handleDeleteCategory(
                                                    category.id
                                                )
                                            }
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>

            {totalPage > categories.length && (
                <Button
                    variant="default"
                    className="category-btn"
                    onClick={handleLoadMore}
                >
                    Load more
                </Button>
            )}
        </CategoryStyled>
    );
};

export default Category;
