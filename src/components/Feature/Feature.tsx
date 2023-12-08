import { FC, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import configs from "@configs/index";
import Category from "@components/Category";
import Title from "@components/Title";
import Meta from "@components/Meta";
import Image from "@components/Image";
import { AddPostType, CategoryType, UserType } from "@ts/index";
import { FeatureStyled } from "./Feature.styled";

const Feature: FC<{ data: AddPostType }> = ({ data }) => {
    const [category, setCategory] = useState<CategoryType>();
    const [user, setUser] = useState<UserType>();

    // Get category
    useEffect(() => {
        if (!data.categoryId) return;

        (async () => {
            const docRef = doc(
                configs.firebase.db,
                "categories",
                data.categoryId
            );
            const docSnap = await getDoc(docRef);

            setCategory(docSnap.data() as CategoryType);
        })();
    }, [data.categoryId]);

    // Get user
    useEffect(() => {
        if (!data.userId) return;

        (async () => {
            const docRef = doc(configs.firebase.db, "users", data.userId);
            const docSnap = await getDoc(docRef);

            setUser(docSnap.data() as UserType);
        })();
    }, [data.userId]);

    console.log(user);

    return (
        <FeatureStyled>
            <Image url={data.url} />
            <div className="post-overlay"></div>
            <div className="post-content">
                <div className="post-top">
                    <Category
                        to={configs.routes.home}
                        variant="primary"
                        className="post-category"
                    >
                        {category && category.name}
                    </Category>
                    <Meta
                        time="Mar 23"
                        author={user && user.fullname}
                        className="post-info"
                    />
                </div>
                <Title to={configs.routes.home} size="large">
                    {data.title}
                </Title>
            </div>
        </FeatureStyled>
    );
};

export default Feature;
