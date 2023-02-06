import { NavLink } from "react-router-dom";
import {
    ArrowNextIcon,
    ArrowPrevIcon,
    SearchIcon,
} from "../components/Icons/Icons";

import banner from "../assets/banner.png";
import Product from "../components/Product/Product";

const HomePage = () => {
    return (
        <>
            <section className="section catalog">
                <header className="section-header">
                    <h2 className="section__title">Все кроссовки</h2>

                    <div className="search-box">
                        <div>
                            <SearchIcon size={22} />
                        </div>
                        <input type="text" placeholder="Поиск..." />
                    </div>
                </header>

                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </section>
        </>
    );
};

export default HomePage;
