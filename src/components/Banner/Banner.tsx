import bannerImg from "@assets/img/banner.png";
import { BannerStyled, ButtonStyled } from "./Banner.styled";

const Banner = () => {
    return (
        <BannerStyled>
            <div className="content">
                <h1 className="title">Monkey Blogging</h1>
                <p className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga qui quidem eligendi quas veniam necessitatibus ad fugit
                    nemo at aspernatur, sit tenetur consequuntur vel, quis sed.
                    Expedita sit laudantium molestiae.
                </p>

                <ButtonStyled variant="primary">Get Started</ButtonStyled>
            </div>

            <figure className="media">
                <img
                    src={bannerImg}
                    alt="Monkey Blogging"
                    className="media__img"
                />
            </figure>
        </BannerStyled>
    );
};

export default Banner;
