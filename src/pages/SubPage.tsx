import React from "react";
import { useNavigate } from "react-router-dom";

const SubPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(-1)}>go back</button>

            <p style={{
                fontSize: 20,
                fontWeight: 700
            }}>
                SubPage
            </p>
        </div>
    )
}

export default SubPage;