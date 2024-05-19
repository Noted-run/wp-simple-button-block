import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";

export default function edit({ attributes, setAttributes }) {
	/**
	 * タイトルテキスト
	 * @param text タイトルテキスト
	 */
	const changeTitleText = (text: string) => {
		setAttributes({
			...attributes,
			title: text,
		});
	};
	/**
	 * リンク変更
	 * @param url リンクURL
	 */
	const changeLinkUrlText = (url: string) => {
		setAttributes({
			...attributes,
			linkUrl: url,
		});
	};
	/**
	 * 画像選択
	 * @param media
	 */
	const selectImage = (media: { id: number; url: string; title: string }) => {
		setAttributes({
			...attributes,
			mediaId: media.id,
			imgUrl: media.url,
			imgAlt: media.title,
		});
	};

	return (
		<div
			{...useBlockProps()}
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "center",
				flexFlow: "wrap",
				padding: "1rem",
				boxShadow: "1px 1px 4px 0px #444",
			}}
		>
			<div
				style={{
					display: "flex",
					width: "100%",
					gap: 12,
					flexFlow: "row wrap",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						minWidth: "120px",
						maxWidth: "240px",
						overflow: "hidden",
					}}
				>
					<img
						src={attributes.imgUrl}
						alt={attributes.imgAlt}
						style={{ width: "100%" }}
					/>
				</div>
				<div style={{ flex: "1 1 auto" }}>
					<TextControl
						label="title"
						value={attributes.title ?? ""}
						onChange={changeTitleText}
					/>
					<TextControl
						label="ad link"
						value={attributes.linkUrl ?? ""}
						onChange={changeLinkUrlText}
					/>
				</div>
			</div>
			<p style={{ width: "100%" }}>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={selectImage}
						allowedTypes={["image"]}
						value={attributes.mediaID ?? -1}
						render={({ open }) => (
							<Button onClick={open}>メディアライブラリを開く</Button>
						)}
					/>
				</MediaUploadCheck>
			</p>
		</div>
	);
}
