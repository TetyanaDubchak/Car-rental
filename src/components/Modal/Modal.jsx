import {useDispatch ,useSelector } from "react-redux";
import { selectIsModalOpen } from "../../redux/catalog/selectors";
import { closeModal } from "../../redux/catalog/modalSlice";
import Modal from 'react-modal';

export const ModalItem = ({ item }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0',
            border: 'none',
            maxWidth: 'calc (100vw - 48px)',
            maxHeight: 'calc(100vh - 24px)',
            overflow: 'none',
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            overflow: 'hidden',
            zIndex: '1101',
        },
    };

    Modal.setAppElement('#root');
    
    const isModalOpen = useSelector(selectIsModalOpen);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <Modal
            style={customStyles}
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
        >

            <button onClick = {handleCloseModal}>X</button>
            <img src={item.img} alt="" />
            <h3>{item.make}<span> {item.model}</span>, {item.year}</h3>
            <ul>
                <li>{ item.address.split(', ')[1]}</li>
                <li>{ item.address.split(', ')[2]}</li>
                <li>Id: { item.id }</li>
                <li>Year: {item.year }</li>
                <li>Type: { item.type}</li>
                <li>Fuel Consumption: {item.fuelConsumption }</li>
                <li>Engine Size: { item.engineSize}</li>
            </ul>
            <p>{item.description}</p>
            <h5>Accessories and functionalities:</h5>
            <ul>
                <li>{item.accessories[0]}</li>
                <li>{item.accessories[1]}</li>
                <li>{item.accessories[2]}</li>
                <li>{item.functionalities[0]}</li>
                <li>{item.functionalities[1]}</li>
                <li>{item.functionalities[2]}</li>
            </ul>
            <h4>Rental Conditions: </h4>
            <ul>
                <li>Minimum age: <span>{parseInt(item.rentalConditions.split("Minimum age: ")[1], 10) }</span></li>
                <li>Valid driver’s license</li>
                <li>Security deposite required </li>
                <li>Mileage: { item.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</li>
                <li>Price: {item.rentalPrice}</li>
            
            </ul>
            <a href="tel:+380730000000">Rental car</a>
            
        </Modal>
    )
}