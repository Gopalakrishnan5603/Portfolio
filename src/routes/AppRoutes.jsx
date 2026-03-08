import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import Portfolio from "../pages/Portfolio";

function AppRoutes() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Portfolio />} />
            </Routes>
        </Layout>
    );
}

export default AppRoutes;