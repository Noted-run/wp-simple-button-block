import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()} className="noted-simple-button-block">
			<div className="thumbnail">
				<img src={attributes.imgUrl} alt={attributes.imgAlt} />
			</div>
			<div className="detail">
				<p>{attributes.title}</p>
				<a href={attributes.linkUrl} rel="nofollow" target="_blank">
					{attributes.linkText}
				</a>
			</div>
		</div>
	);
}
