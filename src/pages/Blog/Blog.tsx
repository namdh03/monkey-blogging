import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    collection,
    doc,
    getDoc,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import swal from "sweetalert";
import parse from "html-react-parser";
import NotFound from "@pages/NotFound";
import Heading from "@components/Heading";
import Image from "@components/Image";
import Category from "@components/Category";
import Meta from "@components/Meta";
import Post from "@components/Post";
import configs from "@configs/index";
import { AddPostType, CategoryType, UserType } from "@ts/index";
import { BlogStyled } from "./Blog.styled";

const Blog = () => {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<AddPostType>({} as AddPostType);
    const [category, setCategory] = useState<CategoryType>({} as CategoryType);
    const [user, setUser] = useState<UserType>({} as UserType);

    useEffect(() => {
        (async () => {
            try {
                if (!slug) return;

                const colRef = query(
                    collection(configs.firebase.db, "posts"),
                    where("slug", "==", slug)
                );

                onSnapshot(colRef, (snapshot) => {
                    snapshot.forEach((doc) => {
                        doc.data() && setBlog(doc.data() as AddPostType);
                    });
                });
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            }
        })();
    }, [slug]);

    useEffect(() => {
        (async () => {
            try {
                if (!blog.categoryId) return;

                const colRef = doc(
                    configs.firebase.db,
                    "categories",
                    blog.categoryId
                );
                const docSnap = await getDoc(colRef);

                setCategory(docSnap.data() as CategoryType);
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            }
        })();
    }, [blog.categoryId]);

    useEffect(() => {
        (async () => {
            try {
                if (!blog.userId) return;

                const colRef = doc(configs.firebase.db, "users", blog.userId);
                const docSnap = await getDoc(colRef);

                setUser(docSnap.data() as UserType);
            } catch (error) {
                swal("Failed!", "Something went wrong!", "error");
            }
        })();
    }, [blog.userId]);

    if (!blog.title) return <NotFound />;

    return (
        <BlogStyled>
            <div className="container">
                <div className="post-header">
                    <Image url={blog.url} className="post-feature" />
                    <div className="post-info">
                        <Category variant="primary" className="post-category">
                            {category.categoryName}
                        </Category>
                        <h1 className="post-heading">{blog.title}</h1>
                        <Meta
                            author={user.username}
                            time={new Date(
                                blog.createdAt?.seconds * 1000
                            ).toLocaleDateString("vi-VN")}
                        />
                    </div>
                </div>
                <div className="post-content">
                    <div className="entry-content">
                        {parse(blog.content || "")}
                    </div>

                    <div className="blog-author">
                        <div className="blog-author-image">
                            <img src={user.avatar} alt="" />
                        </div>
                        <div className="blog-author-content">
                            <h3 className="blog-author-name">
                                {user.fullname}
                            </h3>
                            <p className="blog-author-desc">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Dignissimos non animi porro
                                voluptates quibusdam optio nulla quis nihil ipsa
                                error delectus temporibus nesciunt, nam officiis
                                adipisci suscipit voluptate eum totam!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="post-related">
                    <Heading>Bài viết liên quan</Heading>
                    <div className="grid-layout grid-layout--primary">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
            </div>
        </BlogStyled>
    );
};

export default Blog;
