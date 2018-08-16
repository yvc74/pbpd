import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//Proprietary Components and Page Links
import { LocationForm } from '../utils/importUtils';

class NewStoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className="mb-2" color="info" onClick={this.toggle}>New Store</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New Store Form</ModalHeader>
          <ModalBody>
            <LocationForm></LocationForm>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NewStoreModal;