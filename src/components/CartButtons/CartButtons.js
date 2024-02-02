"use client";
import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "@/constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

function CartButtons({ count, setCount }) {
	return (
		<Wrapper>
			<CountWrapper>
				<CountBtn
					onClick={() => setCount((prevCount) => prevCount - 1)}
					disabled={count > 1 ? false : true}
				>
					<Icon id="decrease" size={18} color={"var(--color-secondary)"} />
				</CountBtn>
				<Number>{count}</Number>
				<CountBtn
					onClick={() => setCount((prevCount) => prevCount + 1)}
					disabled={count < 10 ? false : true}
				>
					<Icon id="increase" size={18} color={"var(--color-secondary)"} />
				</CountBtn>
			</CountWrapper>
			<AddBtn>
				<Icon id="shopping-cart" size={16} />
				Add to cart
			</AddBtn>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	gap: 16px;
`;

const AddBtn = styled.button`
	border: none;
	border-radius: 6px;
	padding: 6px 16px;
	background-color: var(--color-secondary);
	color: var(--color-white);
	font-weight: ${WEIGHTS.medium};
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;

	&:focus,
	&:hover {
		opacity: 0.8;
	}
`;

const CountBtn = styled(UnstyledButton)`
	&:disabled {
		cursor: not-allowed;
	}
`;

const CountWrapper = styled(Wrapper)`
	align-items: center;
	background-color: var(--color-gray-100);
	border-radius: 6px;
	padding: 6px 16px;
	gap: 20px;
`;

const Number = styled.div`
	font-size: 1.2rem;
	font-weight: ${WEIGHTS.medium};
`;

export default CartButtons;
