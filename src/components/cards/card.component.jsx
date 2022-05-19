

//components 
import Button from "../buttons/button.component";

//styles
import './card.styles.scss';

const Card = ({ className, otherProperties }) => {
  const {header , price , content,imgUrl , buttonType , buttonContent, width}= otherProperties
  return (
    <div className={className}>
      <div className={`${className}-img-container`}>
        <img src={imgUrl} alt={`${className} images`} />
        {price ? <></> : <h1>{header}</h1>}
      </div>
      <div className={`${className}-inner-flex`}>
        <div className={`${className}-inner-flex-content`}>
          {price ? <h1>{header}</h1> : <></>}
          {content ? <p>{content}</p> : <p>{price}</p>}
        </div>
        <Button buttonType={buttonType} width={width}>
          {buttonContent}
        </Button>
      </div>
    </div>
  );
};

export default Card;


// otherProperties
// expected Object 
// {
//     header,
//     price,
//     content,
//     imgUrl,
//     buttonContent,
//     buttonType,
//     width,
// }

// className={className}