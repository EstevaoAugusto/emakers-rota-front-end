import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Carrossel = () => {
    const imgStyle = {
        width: "50%",
        height: "75%",
    };

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
        <Carousel responsive={responsive}>
            <img src="src\assets\images\posters\BattleForBikiniBottom.png" 
            alt="Jogo Spongebob SquarePants: Battle For Bikini Bottom Rehydrated" srcset="" 
            style={imgStyle} />
            <img src="src\assets\images\posters\DeathStranding.png" 
            alt="Jogo Death Stranding" srcset="" style={imgStyle} />
            <img src="src\assets\images\posters\GodOfWar2016.png" 
            alt="Jogo God Of War (2016)" srcset="" style={imgStyle} />
            <img src="src\assets\images\posters\Mars.png" 
            alt="Jogo Deliver Us Mars" srcset="" style={imgStyle} />
            <img src="src\assets\images\posters\Perish.png" 
            alt="Jogo Perish" srcset="" style={imgStyle} />
            <img src="src\assets\images\posters\SpellForce.png" 
            alt="Jogo SpellForce" srcset="" style={imgStyle} />
        </Carousel>
    )
}

export default Carrossel;