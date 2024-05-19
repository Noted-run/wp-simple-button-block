import { registerBlockType } from "@wordpress/blocks";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	title: metadata.title,
	category: metadata.category,
	attributes: {
		title: {
			type: "string",
			default: null,
		},
		linkUrl: {
			type: "string",
			default: null,
		},
		mediaId: {
			type: "number",
			default: null,
		},
		imgUrl: {
			type: "string",
			default: null,
		},
		imgAlt: {
			type: "string",
			default: null,
		},
	},
	edit,
	save,
});
