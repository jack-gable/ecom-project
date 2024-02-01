"use client";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "@/constants";
import ShoeIndex from "@/components/ShoeIndex";

function Home() {
	const [sortId, setSortId] = React.useState("newest");

	return (
		<Main>
			<ShoeIndex sortId={sortId} setSortId={setSortId} />
		</Main>
	);
}

const Main = styled.main`
	padding: 32px;

	@media ${QUERIES.tabletAndSmaller} {
		padding: 48px 32px;
	}
	@media ${QUERIES.phoneAndSmaller} {
		padding: 48px 16px;
	}
`;

export default Home;
