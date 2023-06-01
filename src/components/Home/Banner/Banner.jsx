import "./Banner.scss";
// import BannerImg from "../../../assets/banner-img.png";
import BannerImg from "../../../assets/products/headphone-prod-3.webp";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est accusamus officiis aperiam explicabo consectetur.</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img src={BannerImg} className="banner-img" alt="banner_img" />
        </div>
    </div>;
};

export default Banner;
