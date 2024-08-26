import React, { useState } from 'react';
import { Alert, Button, Container, Form, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

const QuadraticaForm = () => {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
   
    const Warning = (message) => {
        Swal.fire({
            icon: 'warning',
            title: 'Ups...',
            text: message,
        });
    };

    const Resultado = (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: message,
        });
    };

    
    const handleSubmit = (event) => {
        event.preventDefault();

        const aNum = parseFloat(a);
        const bNum = parseFloat(b);
        const cNum = parseFloat(c);

        if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
            Warning('Introduce valores correctos para a, b y c.');
            return;
        }

        const discriminante = bNum * bNum - 4 * aNum * cNum;
        if (discriminante > 0) {
            const x1 = (-bNum + Math.sqrt(discriminante)) / (2 * aNum);
            const x2 = (-bNum - Math.sqrt(discriminante)) / (2 * aNum);
            Resultado(`Los valores son X1: ${x1} y  X2: ${x2}.`);
        } else if (discriminante === 0) {
            const x = -bNum / (2 * aNum);
            Resultado(`Los valores son para ambas X:  ${x}.`);
        } else {
            Warning('La ecuación no tiene resultado en los números reales');
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Ejercicios con la Fórmula Cuadrática</h1>
            <Form onSubmit={handleSubmit}>
            <Row className="mb-3 align-items-center">
                    <Col xs={4} className="text-end">
                        <Form.Label className="mb-0">Valor A:</Form.Label>
                    </Col>
                    <Col xs={8}>
                        <Form.Control
                            type="number"
                            step="any"
                            value={a}
                            onChange={(e) => setA(e.target.value)}
                            placeholder="Introduce el valor de A"
                        />
                    </Col>
                </Row>
                <Row className="mb-3 align-items-center">
                    <Col xs={4} className="text-end">
                        <Form.Label className="mb-0">Valor B:</Form.Label>
                    </Col>
                    <Col xs={8}>
                        <Form.Control
                            type="number"
                            step="any"
                            value={b}
                            onChange={(e) => setB(e.target.value)}
                            placeholder="Introduce el valor de B"
                        />
                    </Col>
                </Row>
                <Row className="mb-3 align-items-center">
                    <Col xs={4} className="text-end">
                        <Form.Label className="mb-0">Valor C:</Form.Label>
                    </Col>
                    <Col xs={8}>
                        <Form.Control
                            type="number"
                            step="any"
                            value={c}
                            onChange={(e) => setC(e.target.value)}
                            placeholder="Introduce el valor de C"
                        />
                    </Col>
                </Row>

                <Button variant="primary" type="submit">
                    Calcular
                </Button>
            </Form>
        </Container>
    );
};

export default QuadraticaForm;
