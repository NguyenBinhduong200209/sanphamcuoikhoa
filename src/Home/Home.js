import React from "react";

export const Home = () => {
  return (
    <div>
      {/* home section starts  */}
      <section className="home" id="home">
        <div className="content">
          <span data-aos="fade-up" data-aos-delay={150}>
            Let's Start
          </span>
          <h3 data-aos="fade-up" data-aos-delay={300}>
            World Tour With Us
          </h3>
          <p data-aos="fade-up" data-aos-delay={450}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quia illum quod perspiciatis harum
          </p>
          <a data-aos="fade-up" data-aos-delay={600} href="#" className="btn">
            Đặt Chuyến đi
          </a>
        </div>
      </section>
      {/* home section ends */}
      {/* booking form section starts  */}
      <section className="book-form" id="book-form">
        <form action>
          <div data-aos="zoom-in" data-aos-delay={150} className="inputBox">
            <span>Điểm đến của bạn ?</span>
            <input type="text" placeholder="" value={"Đã có"} />
          </div>
          <div data-aos="zoom-in" data-aos-delay={300} className="inputBox">
            <span>Thời gian khởi hành dự kiến ?</span>
            <input type="date" defaultValue />
          </div>
          <div data-aos="zoom-in" data-aos-delay={450} className="inputBox">
            <span>Nhóm bạn có bao nhiêu người</span>
            <input
              type="number"
              placeholder="4"
              defaultValue
            />
          </div>
          <input
            data-aos="zoom-in"
            data-aos-delay={600}
            type="submit"
            defaultValue="find now"
            className="btn"
          />
        </form>
      </section>
      {/* booking form section ends */}
      {/* about section starts  */}
      <section className="about" id="about">
        <div
          className="video-container"
          data-aos="fade-right"
          data-aos-delay={300}
        >
          <video src="images/about.mp4" muted autoPlay loop className="video" />
        </div>
        <div className="content" data-aos="fade-left" data-aos-delay={600}>
          <span>Chúng tôi là ai ?</span>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde fugit
            repellat error deserunt nam aperiam odit libero quos provident.
            Nostrum?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
      {/* services section start */}
      <section className="services" id="services">
        <div className="heading">
          <span>các dịch vụ của chúng tôi</span>
          <h1>Cost Effective</h1>
        </div>
        <div className="box-container">
          <div className="box" data-aos="zoom-in-up" data-aos-delay={150}>
            <i className="fas fa-globe" />
            <h3>Toàn cầu</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={300}>
            <i className="fas fa-hiking" />
            <h3>Thám hiểm</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={450}>
            <i className="fas fa-utensils" />
            <h3>Ẩm Thực</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={600}>
            <i className="fas fa-hotel" />
            <h3>Khách Sạn</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={750}>
            <i className="fas fa-wallet" />
            <h3>Không lo về giá</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
          <div className="box" data-aos="zoom-in-up" data-aos-delay={900}>
            <i className="fas fa-headset" />
            <h3>Hỗ trợ</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              cumque.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
