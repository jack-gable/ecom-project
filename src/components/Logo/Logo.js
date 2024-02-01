import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { WEIGHTS } from "@/constants";

function Logo({ ...props }) {
	return (
		<StyledLink href="/">
			<Wrapper {...props}>Athletic&nbsp;Sole</Wrapper>
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const Wrapper = styled.h1`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.bold};
`;

export default Logo;
