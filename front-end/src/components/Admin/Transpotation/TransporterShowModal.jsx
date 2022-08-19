import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function TransporterShowModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Kasun Perera
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5></h5>
                <p>
                    Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka . Nowadays this place is very famous for hiking and camping.
                    Sanjeewani in Hindu mythology is a magical herb with super natural powers which of them considered be growing at dark and believing to cure any disease This legend also explains the abundance of Ayurvedic herbs in this area, was one reason to build the Arankale ancient forest monastery during the period of Anuradhapura.
                    The route to Dolukanda mountain is from Colombo - Nittambuwa - Kurunegala 10th mile post on Hiripitiya road - Hunupola - Dolukanda.It is better to contact a local person who know the trek when traveling to this mountain.This is a bit hard trek and not recommend for senior citizens and travelers with kids. While climbing Dolukanda you will see a lot of gum on the way. There are also huge russet trees and large herbaceous plants.
                    Among these are rare herbs called Gardi Raja. It is noteworthy that the herb grows on another plant. At the same time, the black stone ruins can be seen along the way as evidence that there were buildings. Many treasures can be seen being destroyed by thieves. Adviceable to bring 2 Lts of water / snacks but ensure to bring back all plastics you bring.It is not dangerous to climb but make sure to go as a group. Beware of wild boars / insects.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TransporterShowModal;