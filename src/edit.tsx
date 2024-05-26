import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function edit({ attributes, setAttributes }) {
	/**
	 * タイトルテキスト
	 *  @param e イベント
	 */
	const changeTitleText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setAttributes({
			...attributes,
			title: text,
		});
	};
	/**
	 * リンクテキスト変更
	 *  @param e イベント
	 */
	const changeLinkText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;
		setAttributes({
			...attributes,
			linkText: text,
		});
	};
	/**
	 * リンクURL変更
	 * @param e イベント
	 */
	const changeLinkUrlText = (e: React.ChangeEvent<HTMLInputElement>) => {
		const url = e.target.value;
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
			style={{ padding: "25px", backgroundColor: "#F3F3F3" }}
		>
			<p
				style={{
					fontSize: "1.5em",
					fontWeight: 600,
					lineHeight: "1.5em",
					margin: "0 0 20px 0",
				}}
			>
				Simple Button Block
			</p>
			<table style={{ width: "100%" }}>
				<tbody
					style={{
						display: "flex",
						flexFlow: "column",
						gap: "20px",
						border: "none",
					}}
				>
					<tr style={{ display: "flex", gap: 20 }}>
						<th style={{ fontWeight: 400 }}>Title:</th>
						<td style={{ width: "100%" }}>
							<input
								value={attributes.title ?? ""}
								style={{
									border: "none",
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								onChange={changeTitleText}
								placeholder="ここに入力"
							/>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th style={{ fontWeight: 400 }}>Link Text:</th>
						<td style={{ flex: "1 1 auto" }}>
							<input
								value={attributes.linkText ?? ""}
								style={{
									border: "none",
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								onChange={changeLinkText}
								placeholder="ここに入力"
							/>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th style={{ fontWeight: 400 }}>URL:</th>
						<td style={{ width: "100%" }}>
							<input
								style={{
									border: "none",
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								value={attributes.linkUrl ?? ""}
								onChange={changeLinkUrlText}
								placeholder="ここに入力"
							/>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th style={{ fontWeight: 400 }}>Image:</th>
						<td
							style={{
								display: "flex",
								width: "100%",
								border: "none",
								background: "none",
								fontSize: "1em",
								alignItems: "center",
								gap: "1em",
							}}
						>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={selectImage}
									allowedTypes={["image"]}
									value={attributes.mediaID ?? -1}
									render={({ open }) => (
										<Button
											onClick={open}
											style={{ fontSize: "1em", padding: 0 }}
										>
											ここをクリックで選択
										</Button>
									)}
								/>
							</MediaUploadCheck>
							もしくは
							<input
								placeholder="URLを入力"
								style={{
									border: "none",
									background: "none",
									fontSize: "1em",
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
