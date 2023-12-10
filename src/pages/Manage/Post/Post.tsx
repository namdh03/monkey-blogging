import Dropdown from "@components/Dropdown";
import Select from "@components/Select";
import Table from "@components/Table";
import Button from "@components/Button";
import Heading from "../Heading";
import { PostStyled } from "./Post.styled";

const Post = () => {
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
                    />
                </div>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Post</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>01</td>
                        <td>
                            <div className="post__image">
                                <img
                                    src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                                    alt=""
                                    className="post__image-img"
                                />
                                <div className="post__desc">
                                    <h3>One Special 4K Camera</h3>
                                    <time className="post__text">
                                        Date: 25 Oct 2021
                                    </time>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="post__text">Camera Gear</span>
                        </td>
                        <td>
                            <span className="post__text">Evondev</span>
                        </td>
                        <td>
                            <div className="post__actions post__text">
                                <span className="post__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                                <span className="post__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                        />
                                    </svg>
                                </span>
                                <span className="post__icon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <div className="post__pagination">
                <Button variant="default" className="post__btn">
                    See more+
                </Button>
            </div>
        </PostStyled>
    );
};

export default Post;
