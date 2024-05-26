import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { ImgType } from "./type";

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
			imgUrl: media.url,
		});
	};
	const [inputUrl, setInputUrl] = useState("");
	/**
	 * URL入力
	 * @param e
	 */
	const inputImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		const url = e.target.value;
		setInputUrl(url);
		setAttributes({
			...attributes,
			imgUrl: url,
		});
	};
	/**
	 *
	 */
	const changeImgType = (imgType: ImgType, url?: string) => {
		const result = {
			...attributes,
			imgType: imgType,
		};
		result.imgUrl = url ?? "";
		setAttributes(result);
	};

	useEffect(() => {
		if (attributes.imgType == ImgType.URL) setInputUrl(attributes.imgUrl);
	});

	const blockProps = useBlockProps();
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
							<ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
								<li>
									<input
										type="radio"
										name={`img-type-select-${blockProps.id}`}
										onChange={() => {
											changeImgType(ImgType.SELECT);
										}}
										defaultChecked={attributes.imgType == ImgType.SELECT}
									/>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={selectImage}
											allowedTypes={["image", "text/plain"]}
											render={({ open }) => (
												<Button
													onClick={open}
													style={{ fontSize: "1em", padding: 0 }}
													disabled={attributes.imgType != ImgType.SELECT}
												>
													ここをクリックで選択
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</li>
								<li>
									<input
										type="radio"
										name={`img-type-select-${blockProps.id}`}
										onChange={() => {
											changeImgType(ImgType.URL, inputUrl);
										}}
										defaultChecked={attributes.imgType == ImgType.URL}
									/>
									<input
										placeholder="URLを入力"
										style={{
											border: "none",
											background: "none",
											fontSize: "1em",
										}}
										onChange={inputImageUrl}
										value={inputUrl}
										disabled={attributes.imgType != ImgType.URL}
									/>
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<img
								style={{ maxHeight: "120px" }}
								src={attributes.imgUrl}
								alt=""
								onError={(e) => {
									(e.target as HTMLImageElement).alt = "画像が存在しません";
									(e.target as HTMLImageElement).onerror = null;
								}}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
