import './gallery.css';
import ReactImageGallery from 'react-image-gallery';

const images = require.context('../../../public/images/gallery', true)
const imageList = images.keys().map(image => ({ original: images(image) }));

console.log(imageList);

const images2 = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

console.log(images2);

export default function Gallery() {
  return (
    <ReactImageGallery items={imageList} />
  )
}
