import React from 'react';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";

class BootstrapTable extends React.Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Plunder Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Wins</th>
                                        <th>Kills</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Blue</td>
                                        <td>1</td>
                                        <td>1487</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Lady Redhood</td>
                                        <td>0</td>
                                        <td>962</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Xyaa</td>
                                        <td>3</td>
                                        <td>1858</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default BootstrapTable;