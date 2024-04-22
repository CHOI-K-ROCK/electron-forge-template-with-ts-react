import React from "react";
import CloseAppButton from "../../components/CloseAppButton";

interface Props {
    children: React.ReactNode;
}


const Layout = (props: Props) => {
    const { children } = props;

    return (
        <div style={{
            margin: "5px",
            padding: "5px",
            backgroundColor: "#777",
            borderRadius: "10px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",

                padding: "5px",
            }}>
                <p style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#FFF"
                }}>
                    Layout
                </p>
                <CloseAppButton />
            </div>
            <div style={{
                backgroundColor: "#FFF",
                margin: "5px",
                padding: "15px",
                borderRadius: "10px"
            }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;