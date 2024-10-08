import { Button, Carousel } from "antd";
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  width: "auto",
  padding: "30px 50px",
  borderRadius: "10px",
};

const carousel = [
  {
    id: 1,
    image: "./images/3.jpg",
    head: `Уроки корейского`,
    desctiprion: "Начать с корейского алфавита - Хангыль!",
    link: "/lessons/hangul",
    buttonText: "Начать!",
  },
  {
    id: 2,
    image: "./images/1.jpg",
    head: `Уроки корейского`,
    desctiprion: "Первый урок",
    link: "/lessons/hangul",
  },
  {
    id: 3,
    image: "./images/2.jpg",
    head: `Уроки корейского`,
    desctiprion: "Новый урок",
    link: "/lessons/hangul",
  },
];

export const MainPage = () => {
  const navigate = useNavigate();

  const onButtonClick = (link: string) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div>
      <Carousel dotPosition="top" arrows autoplay>
        {carousel.map(
          ({ id, head, desctiprion, link, image, buttonText = "Перейти" }) => (
            <div key={id}>
              <div
                className="background"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  height: "70vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={contentStyle}>
                  <Title>{head}</Title>
                  <Title level={5} style={{ paddingBottom: "15px" }}>
                    {desctiprion}
                  </Title>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button
                      onClick={() => onButtonClick(link)}
                      type="primary"
                      size="large"
                    >
                      {buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};
