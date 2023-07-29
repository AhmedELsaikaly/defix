import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import styles from './index.module.scss';
import { CloseIcon } from '../icons';

interface IModalData {
  title: string;
  desc: string;
  imgLink: string;
  iconLink?: string;
}

interface DetailsModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  data: IModalData;
  withIcon?: boolean;
  onClosed?: () => void;
}
const DetailsModal = ({
  toggleModal,
  isOpen,
  data,
  withIcon = false,
  onClosed,
}: DetailsModalProps) => {
  return (
    <Modal
      centered
      isOpen={isOpen}
      toggle={toggleModal}
      className={styles.detailsModal}
      backdrop
      keyboard
      onClosed={onClosed}
    >
      <ModalBody>
        <button className={styles.close} onClick={toggleModal} type='button'>
          <CloseIcon />
        </button>

        <Row className='gy-4'>
          <Col lg='6'>
            <div className={styles.detailsModalContent}>
              <h2 className={styles.detailsModalTitle}>
                {withIcon && (
                  <div className={styles.icon}>
                    <img
                      width={30}
                      height={30}
                      src={data?.iconLink}
                      alt={data?.title}
                      title={data?.title}
                    />
                  </div>
                )}

                <span>{data?.title}</span>
              </h2>
              <p>{data?.desc}</p>
            </div>
          </Col>
          <Col lg='6'>
            <div className={styles.detailsModalImg}>
              <img
                className='img-full img-bg '
                src={data?.imgLink}
                alt={data?.title}
                title={data?.title}
              />
            </div>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default DetailsModal;
