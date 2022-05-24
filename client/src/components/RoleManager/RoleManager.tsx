import React, { FC } from 'react';
import styles from './RoleManager.module.scss';

//Bootstrap imports
import ListGroup from 'react-bootstrap/ListGroup'

interface RoleManagerProps {}

const RoleManager: FC<RoleManagerProps> = () => (
  <div className={styles.RoleManager}>
   <ListGroup as="ul">
  <ListGroup.Item as="li" active>
    Cras justo odio
  </ListGroup.Item>
  <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item as="li" disabled>
    Morbi leo risus
  </ListGroup.Item>
  <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
  </div>
);

export default RoleManager;
