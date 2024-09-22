import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'

const Hero = () => {
   const slide = [
    {
        url: "https://www.sayastationery.com/slider_1.jpg",
    },
    {
      url: "https://www.sayastationery.com/slider_2.jpg",
    },
     {
       url: "https://www.sayastationery.com/slider_3.jpg",
     },
     {
       url: "https://www.sayastationery.com/slider_4.jpg",
     },
   ];

    return (
      <div>
        <Fade>
          {slide.map((image, index) => (
            <div
              key={index}
              style={{backgroundImage: `url(${image.url})` }} className='md:min-h-[600px] md:bg-cover min-h-[150px] bg-cover'>
              
            </div>
          ))}
        </Fade>
      </div>
    );
}
export default Hero;