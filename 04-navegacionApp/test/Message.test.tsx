import React from 'react';
import { render } from '@testing-library/react-native';
import Message from '../src/components/Message';




describe('Testing of Message', () => {
	it('renders correctly', () => {
		const { getByText } = render(<Message />);
		const helloText = getByText('');
		expect(helloText).toBeTruthy();
	});

	it('render correctly with props mensaje ', () => {
		const mensaje = 'Mi prueba'
		const { getByText } = render(<Message mensaje={mensaje} />);
		const helloText = getByText(mensaje);
		expect(helloText).toBeTruthy();
	});

	it('render correctly with props mensaje change ', () => {
		const mensaje = 'Mi prueba'
		const { getByText, rerender } = render(<Message mensaje={mensaje} />);
		const helloText = getByText(mensaje);
		expect(helloText).toBeTruthy();

		// Rerender the component with a different message
		const nuevoMensaje = '¡Hola a todos!';
		rerender(<Message mensaje={nuevoMensaje} />);
		const nuevoMensajeText = getByText(nuevoMensaje);
		expect(nuevoMensajeText).toBeTruthy();
	})

	it('matches snapshot', () => {
		const { toJSON } = render(<Message />);
		expect(toJSON()).toMatchSnapshot();
	});
});