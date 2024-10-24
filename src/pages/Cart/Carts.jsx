import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Carts.css'

function Carts({ carts, setCarts }) {
    return (
        <div className='carts-container'>
            <div className='products-itemps-container'>
                {carts.map((cart) => {
                    return (

                        <Card style={{ width: '18rem' }} key={cart.id}>
                            <Card.Img variant="top" src={cart.thumbnailUrl} />
                            <Card.Body>
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text><b>${cart.price.toFixed(2)}</b></Card.Text>
                                <Button variant="outline-danger"
                                    onClick={() =>
                                        setCarts(carts.filter((c) => c.id !== cart.id))
                                    }
                                >Remove from Carts</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            <h5 className='info-carts'>Products:
                <span className='badge bg-danger'>
                    {carts.length} items
                </span>
                - Total Price:
                <span className='badge bg-success'>$
                    {carts.reduce((prev, cart) => {
                        return prev + cart.price
                    }, 0).toFixed(2)}
                </span>
            </h5>
            <button className='btn btn-warning checkout'>Checkout <i class="bi bi-credit-card"></i></button>
        </div>
    );
}

export default Carts;