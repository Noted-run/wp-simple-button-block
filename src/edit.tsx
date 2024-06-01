import { __ } from "@wordpress/i18n";
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function edit({ attributes, setAttributes }) {
	/**
	 * 画像URL入力
	 * @param e
	 */
	const inputImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		const url = e.target.value;
		setAttributes({
			...attributes,
			inputedImageUrl: url,
			imgUrl: url,
		});
	};

	/**
	 * 画像選択
	 * @param media
	 */
	const selectImage = (media: { id: number; url: string; title: string }) => {
		setAttributes({
			...attributes,
			selectedImageUrl: media.url,
			imgUrl: media.url,
		});
	};

	/**
	 * 画像リセット
	 */
	const resetSelectedImage = () => {
		setAttributes({
			...attributes,
			selectedImageUrl: "",
			imgUrl: "",
		});
	};

	/**
	 * タイトルテキスト変更
	 * @param e イベント
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
					margin: "0 0 50px 0",
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
						<th
							style={{
								fontWeight: 600,
								maxWidth: "160px",
								minWidth: "160px",
								textAlign: "left",
							}}
						>
							Image URL:
						</th>
						<td
							style={{
								display: "flex",
								width: "100%",
								border: "none",
								background: "none",
								fontSize: "1em",
								alignItems: "center",
								gap: "2rem",
							}}
						>
							<ul
								style={{
									margin: 0,
									padding: 0,
									listStyle: "none",
									flex: "1 1 auto",
								}}
							>
								<li style={{ width: "100%" }}>
									<input
										style={{
											background: "none",
											fontSize: "1em",
											width: "100%",
											boxSizing: "border-box",
										}}
										onChange={inputImageUrl}
										value={attributes.inputedImageUrl}
										disabled={!!attributes.selectedImageUrl}
									/>
								</li>
								<li
									style={{
										width: "100%",
										textAlign: "right",
									}}
								>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={selectImage}
											allowedTypes={["image", "text/plain"]}
											render={({ open }) => (
												<Button
													onClick={open}
													style={{
														fontSize: "1em",
														padding: 0,
														textDecoration: "underline",
														fontWeight: 600,
													}}
													disabled={!!attributes.inputedImageUrl}
												>
													Insert from Media Library
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</li>
							</ul>
							<div
								style={{
									position: "relative",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									minHeight: "100%",
									height: "100%",
									maxHeight: "100%",
									aspectRatio: "1/1",
									border: "1px solid #000",
								}}
							>
								{attributes.imgUrl && (
									<img
										style={{
											maxHeight: "100%",
											maxWidth: "59px",
											height: "auto",
											width: "auto",
										}}
										src={attributes.imgUrl}
										alt=""
										onError={(e) => {
											(e.target as HTMLImageElement).alt = "画像が存在しません";
											(e.target as HTMLImageElement).onerror = null;
										}}
									/>
								)}
								<button
									style={{
										position: "absolute",
										display: !!attributes.selectedImageUrl ? "flex" : "none",
										justifyContent: "center",
										alignItems: "center",
										left: "calc(100% - 0.5em)",
										bottom: "calc(100% - 0.5em)",
										borderRadius: "50%",
										fontSize: "1.5rem",
										height: "1em",
										width: "1em",
										backgroundColor: "#000",
										color: "white",
									}}
									onClick={resetSelectedImage}
								>
									×
								</button>
							</div>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th
							style={{
								fontWeight: 600,
								maxWidth: "160px",
								minWidth: "160px",
								textAlign: "left",
							}}
						>
							Title:
						</th>
						<td style={{ width: "100%" }}>
							<input
								value={attributes.title ?? ""}
								style={{
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								onChange={changeTitleText}
							/>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th
							style={{
								fontWeight: 600,
								maxWidth: "160px",
								minWidth: "160px",
								textAlign: "left",
							}}
						>
							Button Text:
						</th>
						<td style={{ flex: "1 1 auto" }}>
							<input
								value={attributes.linkText ?? ""}
								style={{
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								onChange={changeLinkText}
							/>
						</td>
					</tr>
					<tr style={{ display: "flex", gap: 20 }}>
						<th
							style={{
								fontWeight: 600,
								maxWidth: "160px",
								minWidth: "160px",
								textAlign: "left",
							}}
						>
							URL:
						</th>
						<td style={{ width: "100%" }}>
							<input
								style={{
									background: "none",
									width: "100%",
									fontSize: "1em",
								}}
								value={attributes.linkUrl ?? ""}
								onChange={changeLinkUrlText}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
