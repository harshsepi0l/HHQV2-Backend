import Carousel from "../Components/Carousel/Carousel";

const CarouselPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // stack elements vertically
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px", // space between elements
      }}
    >
      <Carousel />
    </div>
  );
};

export default CarouselPage;
