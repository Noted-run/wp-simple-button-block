export const ImgType = {
	SELECT: "select",
	URL: "url",
} as const;
export type ImgType = (typeof ImgType)[keyof typeof ImgType];
