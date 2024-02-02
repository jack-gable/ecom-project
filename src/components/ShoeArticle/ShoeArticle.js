"use client";
import React from "react";
import styled from "styled-components";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import { WEIGHTS } from "@/constants";
import CartButtons from "../CartButtons";
import Spacer from "../Spacer";

function ShoeArticle({ data }) {
	const [count, setCount] = React.useState(1);
	const [isOpen, setIsOpen] = React.useState(false);

	const {
		name,
		imageSrc,
		price,
		salePrice,
		releaseDate,
		numOfColors,
		thumbnails,
	} = data;

	const variant =
		typeof salePrice === "number"
			? "on-sale"
			: isNewShoe(releaseDate)
			? "new-release"
			: "default";

	return (
		<Wrapper>
			<div>
				<Image src={imageSrc[0]} alt="" />
				<Spacer size={22} />
				<Row>
					{thumbnails.map((thumbnail, index) => (
						<Thumbnail key={index} src={thumbnail} alt="" />
					))}
				</Row>
			</div>
			<InfoContainer>
				<div>
					<Name>{name}</Name>
					<Row>
						<ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
						{variant === "on-sale" && <SaleFlag>Sale</SaleFlag>}
						{variant === "new-release" && <NewFlag>Just released!</NewFlag>}
					</Row>
					<div>
						<Price
							style={{
								"--color":
									variant === "on-sale" ? "var(--color-gray-700)" : undefined,
								"--text-decoration":
									variant === "on-sale" ? "line-through" : undefined,
							}}
						>
							{formatPrice(price)}
						</Price>
						{variant === "on-sale" ? (
							<SalePrice>{formatPrice(salePrice)}</SalePrice>
						) : undefined}
					</div>
				</div>
				<CartButtons count={count} setCount={setCount} />
			</InfoContainer>
		</Wrapper>
	);
}

const Wrapper = styled.article`
	display: flex;
	justify-content: center;
	gap: 60px;
	margin-top: 60px;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding-bottom: 56px;
`;

const Image = styled.img`
	display: block;
	width: 500px;
	aspect-ratio: 3/2;
	border-radius: 20px;
`;

const Thumbnail = styled.img`
	display: block;
	width: 110px;
	aspect-ratio: 3/2;
	border-radius: 8px;
`;

const Name = styled.h3`
	font-weight: ${WEIGHTS.bold};
	color: var(--color-gray-900);
	padding-bottom: 18px;
`;

const Price = styled.span`
	color: var(--color);
	text-decoration: var(--text-decoration);
	font-size: 1.2rem;
	font-weight: ${WEIGHTS.normal};
	padding-right: 12px;
`;

const Row = styled.div`
	font-size: 1rem;
	display: flex;
	justify-content: space-between;
`;

const ColorInfo = styled.p`
	color: var(--color-gray-700);
	padding-bottom: 18px;
`;

const SalePrice = styled.span`
	font-weight: ${WEIGHTS.medium};
	color: var(--color-primary);
	font-size: 1.2rem;
`;

const Flag = styled.div`
	background: red;
	height: 32px;
	line-height: 32px;
	padding: 0 10px;
	font-size: ${14 / 18}rem;
	font-weight: ${WEIGHTS.bold};
	color: var(--color-white);
	border-radius: 2px;
`;

const SaleFlag = styled(Flag)`
	background-color: var(--color-primary);
`;
const NewFlag = styled(Flag)`
	background-color: var(--color-secondary);
`;

export default ShoeArticle;
