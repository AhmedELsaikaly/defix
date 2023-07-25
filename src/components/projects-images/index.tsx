import { Col, Row } from 'reactstrap';
import styles from './index.module.scss';

interface ProjectsImagesProps {
  images: string[];
}

const ProjectsImages = ({ images }: ProjectsImagesProps) => {
  return (
    <div>
      <Row className='gy-4'>
        <Col lg='8'>
          <div
            className={styles.imgWrapper}
            data-aos='zoom-in'
            data-aos-delay='150'
          >
            <img className='img-full' src={images[0]} alt='المشروع الأول' />
          </div>
        </Col>
        <Col lg='4'>
          <div
            data-aos='zoom-in'
            data-aos-delay='150'
            className={styles.imgWrapper}
          >
            <img className='img-full' src={images[1]} alt='المشروع الأول' />
          </div>
        </Col>
        <Col lg='8'>
          <Row>
            <Col lg='7'>
              <div
                data-aos='zoom-in'
                data-aos-delay='150'
                className={styles.imgWrapper2}
              >
                <img className='img-full' src={images[2]} alt='المشروع الأول' />
              </div>
            </Col>
            <Col data-aos='zoom-in' data-aos-delay='150' lg='5'>
              <div className={styles.imgWrapper2}>
                <img className='img-full' src={images[3]} alt='المشروع الأول' />
              </div>
            </Col>
          </Row>
        </Col>

        <Col lg='4'>
          <div
            data-aos='zoom-in'
            data-aos-delay='150'
            className={styles.imgWrapper2}
          >
            <img className='img-full' src={images[4]} alt='المشروع الأول' />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsImages;
