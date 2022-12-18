import { Layout } from "antd";
import { useState } from "react";
import AppHeader from "../components/Header";
import AppFooter from "../components/Footer";
import products from "../json/products.json";
import FeedbackLayout from "../components/FeedbackLayout";

const { Header, Content, Footer } = Layout;

function Feedback(){
    const [open, setopen] = useState(false);

    return(
        <Layout className="main-layout">
        {/* <NavBar open = {open} /> container*/}
        <Layout>
        {/* <HamMenu
          onClick={() => setopen(!open)}
          open={open}
        /> */}
            <Header className="layout-header">
                <AppHeader />
            </Header> 
            <Content className="layout-content">
                {/* <ProductList products={products}/> */}
                <FeedbackLayout/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
            </Layout>
        </Layout>
    );
}

export default Feedback;