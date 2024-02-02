import React from "react";
import SHOES from "@/data";
import ShoeArticle from "@/components/ShoeArticle";

function ShoePage({ params }) {
	const shoeData = SHOES.filter((shoe) => shoe.slug === params.slug);

	return <ShoeArticle data={shoeData[0]} />;
}

export default ShoePage;
