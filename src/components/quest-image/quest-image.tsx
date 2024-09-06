import { CoverImg, PreviewImg } from '../../type/quest';
import { ImageSize } from '../../const';

const { Preview, Cover } = ImageSize;

type QuestCardImageProps = PreviewImg & Partial<CoverImg>

function QuestCardImage({previewImg, previewImgWebp, coverImg, coverImgWebp}: QuestCardImageProps): JSX.Element {
  const sourseSrcSet = coverImgWebp ? `, ${coverImgWebp} 2x` : '';
  const imgSrcSet = coverImg ? {srcSet: `${coverImg} 2x`} : '';
  const isForCover = !!coverImg;

  return (
    <picture>
      <source type="image/webp" srcSet={`${previewImgWebp}${sourseSrcSet}`}></source>
      <img src={previewImg} {...imgSrcSet} width={`${isForCover ? Cover.WIDTH : Preview.WIDTH}`} height={`${isForCover ? Cover.HEIGHT : Preview.HEIGHT}`} alt='Image'></img>
    </picture>
  );
}

export default QuestCardImage;
