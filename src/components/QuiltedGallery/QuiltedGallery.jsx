import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


import i2 from '../../images/screenshots/homeImgs/2.jpg';
import i3 from '../../images/screenshots/homeImgs/3.jpg';
import i4 from '../../images/screenshots/homeImgs/4.jpg';
import i5 from '../../images/screenshots/homeImgs/5.jpg';
import i6 from '../../images/screenshots/homeImgs/6.jpg';
import i7 from '../../images/screenshots/homeImgs/7.jpg';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const homeImgsData = [
  {
    img: i3,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: i5,
    title: 'Burger',
  },
  {
    img: i7,
    title: 'Camera',
  },
]

function QuiltedGallery({ className, ...props }) {
  const homeImgsData = props.imgsData || homeImgsData; // example data
  
  return (
    <div id="" className={className}>
      <ImageList
        // "masonry" | "standard" | "woven" | "quilted"
        variant="quilted"
        cols={4}
      >
        {homeImgsData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
             {...srcset(item.img, 121, item.rows, item.cols)}
              // src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default QuiltedGallery;
