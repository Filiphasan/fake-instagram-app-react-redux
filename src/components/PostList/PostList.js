import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos, addPhoto, getComments, addComment } from "../../store/actions/action";
import {
    BrowserRouter as Router,
    Link,
    withRouter,

} from "react-router-dom";

const PostList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos());
    }, []);

    const photos = useSelector((state) => state.postsReducer.data);

    return (
        <div className="center">
            <div className="navbar">
                <button>
                    <img
                        className="camera"
                        src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
                        alt="camera"
                        width="15%"
                    />
                </button>
                <img
                    className="insta"
                    src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
                    alt="logo"
                    width="25%"
                />
                <button>
                    <img
                        className="send"
                        src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
                        alt="dm"
                    />{" "}
                </button>
            </div>

            <div className="profile">
                {photos.length > 0 &&
                    photos.map((photo, index) => (
                        <>
                            <p className="photo-info">
                                <Link key={index} to="/post" onClick={
                                    () => dispatch(addPhoto(photo.download_url))}>
                                    <img src={photo.download_url} alt="images" width="100%" /></Link>
                            </p>
                        </>
                    ))}
            </div>

            <div className="navbar2">
                <img className="bar" />
            </div>
        </div>
    )
}

export default PostList
