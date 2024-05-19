import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div
			{...useBlockProps.save()}
			style={{ width: "fit-content", display: "flex", flexFlow: "wrap" }}
		>
			<a
				href={attributes.linkUrl}
				style={{
					padding: "1rem",
					boxShadow: "1px 1px 4px 0px #444",
				}}
				rel="nofollow"
				target="_blank"
			>
				<p>{attributes.title}</p>
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
			</a>
		</div>
	);
}
