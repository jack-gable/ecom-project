import React from "react";
import styled, { keyframes } from "styled-components";
import { Loader } from "react-feather";

function Spinner({ color = "black", size = 24, opacity = 0.5, speed = 1200 }) {
	return (
		<Wrapper
			style={{
				opacity,
				"--speed": `${speed}ms`,
				width: size,
				height: size,
			}}
		>
			<Loader color={color} size={size} />
		</Wrapper>
	);
}

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.span`
	display: block;
	animation: ${Spin} var(--speed) linear infinite;

	& svg {
		/*
    Ensure that the child is block so
    that it spins symmetrically
  */
		display: block;
	}
`;

export default Spinner;
