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
import Dropdown from "@components/Dropdown";
import Select from "@components/Select";
import Table from "@components/Table";
import Button from "@components/Button";
import { Actions } from "@components/Actions";
import Tag from "@components/Tag";
import { useDebounce } from "@hooks/index";
import configs from "@configs/index";
import { AddPostType } from "@ts/index";
import { PostStatus } from "@utils/enum";
import Heading from "../Heading";
import { PostStyled } from "./Post.styled";

const Post = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<AddPostType[]>([]);
    const [lastDoc, setLastDoc] =
        useState<QueryDocumentSnapshot<DocumentData, DocumentData>>();
    const [totalPage, setTotalPage] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const searchDebounce = useDebounce(search, 500);

    useEffect(() => {
        (async () => {
            const colRef = collection(configs.firebase.db, "posts");
            const searchColRef = searchDebounce
                ? query(
                      colRef,
                      where("title", ">=", searchDebounce),
                      where("title", "<=", `${searchDebounce}\uf8ff`),
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
                const results: AddPostType[] = [];

                snapshot.forEach((doc) => {
                    results.push({
                        ...doc.data(),
                        id: doc.id,
                    } as AddPostType);
                });

                setPosts(results);
            });
        })();
    }, [searchDebounce]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    const handleLoadMore = async () => {
        try {
            // Construct a new query starting at this document,
            const next = query(
                collection(configs.firebase.db, "posts"),
                startAfter(lastDoc || 0),
                limit(1)
            );
            const documentSnapshots = await getDocs(next);
            const lastVisible =
                documentSnapshots.docs[documentSnapshots.docs.length - 1];

            onSnapshot(next, (snapshot) => {
                const results: AddPostType[] = [];

                snapshot.forEach((doc) => {
                    results.push({
                        ...doc.data(),
                        id: doc.id,
                    } as AddPostType);
                });

                setPosts([...posts, ...results]);
            });

            setLastDoc(lastVisible);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeletePost = async (id: string) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                await deleteDoc(doc(configs.firebase.db, "posts", id));
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

    const renderStatusPost = (status: number) => {
        switch (status) {
            case PostStatus.APPROVED:
                return <Tag variant="success">Approved</Tag>;
            case PostStatus.PENDING:
                return <Tag variant="warning">Pending</Tag>;
            case PostStatus.REJECTED:
                return <Tag variant="danger">Rejected</Tag>;
        }
    };

    return (
        <PostStyled>
            <Heading title="All posts" subtitle="Manage all posts" />

            <div className="post__heading">
                <div className="post__category">
                    <Dropdown>
                        <Select placeholder="Category" />
                    </Dropdown>
                </div>
                <div className="post__search">
                    <input
                        type="text"
                        className="post__search-input"
                        placeholder="Search post..."
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Post</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>
                                <div className="post__image">
                                    <img
                                        src={post.url}
                                        alt={post.title}
                                        className="post__image-img"
                                    />
                                    <div className="post__desc">
                                        <h3>{post.title}</h3>
                                        <time className="post__text">
                                            {new Date(
                                                post.createdAt.seconds * 1000
                                            ).toLocaleDateString("vi-VN")}
                                        </time>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="post__text">
                                    {post.categoryId}
                                </span>
                            </td>
                            <td>
                                <span className="post__text">
                                    {post.userId}
                                </span>
                            </td>
                            <td>{renderStatusPost(post.status)}</td>
                            <td>
                                <div className="post__actions post__text">
                                    <Actions.View
                                        onClick={() =>
                                            navigate(
                                                `${configs.routes.blog}/${post.slug}`
                                            )
                                        }
                                    />
                                    <Actions.Edit
                                        onClick={() =>
                                            navigate(
                                                `${configs.routes.updatePost}?id=${post.id}`
                                            )
                                        }
                                    />
                                    <Actions.Delete
                                        onClick={() =>
                                            handleDeletePost(post.id)
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {posts.length < totalPage && (
                <div className="post__pagination">
                    <Button
                        variant="default"
                        className="post__btn"
                        onClick={handleLoadMore}
                    >
                        See more+
                    </Button>
                </div>
            )}
        </PostStyled>
    );
};

export default Post;
