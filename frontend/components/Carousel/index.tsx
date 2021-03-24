import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

type Props = {
  images: {img: string, caption: string}[];
};

const Carousel = ({ images }: Props) => {


  const carouselItems = images.map((item) => (
    
      <figure className="flex flex-col items-center justify-center max-w-full">
        <CardContent>
          <img
            src={item.img}
            style={{ maxHeight: "40rem", minHeight: "30rem" }}
            className="object-cover"
          />
        </CardContent>
        <CardContent>
          <figcaption className="text-center">
            <Typography variant="h6">{item.caption}</Typography>
          </figcaption>
        </CardContent>
      </figure>

  ));
  return (
    <div className="max-w-sm md:max-w-4xl">
      <AliceCarousel
        autoPlay
        autoHeight
        autoWidth
        infinite
        autoPlayInterval={5000}
        mouseTracking
        items={carouselItems}
      />
    </div>
  );
};

export default Carousel;
