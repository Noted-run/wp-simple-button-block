import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import { ImgType } from "./type";

registerBlockType(metadata.name, {
	title: metadata.title,
	category: metadata.category,
	attributes: {
		title: {
			type: "string",
			default: null,
		},
		linkText: {
			type: "string",
			default: null,
		},
		linkUrl: {
			type: "string",
			default: null,
		},
		imgUrl: {
			type: "string",
			default: null,
		},
		imgType: {
			type: "string",
			default: ImgType.SELECT,
		},
	},
	edit,
	save,
});
