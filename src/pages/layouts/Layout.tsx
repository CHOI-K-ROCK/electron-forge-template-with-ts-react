import React from "react";

interface Props {
    children: React.ReactNode;
}


const MainLayout = (props: Props) => {
    const { children } = props;

    return (
        <div style={{
            margin: "5px",
            padding: "5px",
            backgroundColor: "#777",
            borderRadius : "10px"
        }}>
            <p style={{
                fontSize: 20,
                padding: "5px",
                fontWeight: 600,
                color: "#FFF"
            }}>
                Layout
            </p>
            <div style={{
                backgroundColor: "#FFF",
                margin: "5px",
                padding: "15px",
                borderRadius : "10px"
            }}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout;