import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

type Props = {
  content: string;
};

const Carousel = ({ content }: Props) => {
  const imgRex = /<figure.*>.*<img.*?src="(.*?)"[^>]+>.*<figcaption>(.*?)<\/figcaption><\/figure>/g;

  const images = [];

  let img;

  while ((img = imgRex.exec(content))) {
    images.push({
      img: img[1],
      caption: img[2]
        .replace(`&#8217;`, "'")
        .replace(`&#8220;`, "'")
        .replace(`&#8221;`, "'"),
    });
  }

  const carouselItems = images.map((item) => (
    <Card>
      <figure className="flex flex-col items-center justify-center">
        <CardContent>
          <img
            src={item.img}
            style={{ maxHeight: "40rem" }}
            className="object-cover"
          />
        </CardContent>
        <CardContent>
          <figcaption className="text-center">
            <Typography variant="h6">{item.caption}</Typography>
          </figcaption>
        </CardContent>
      </figure>
    </Card>
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
