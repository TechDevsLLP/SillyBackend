const getUrl = (i) => `${process.env.IMAGES_BASE_URL}/delhi/gallery/${i}.webp`;

const delhiImagesMeta = [
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/10.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "10",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/11.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "11",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/12.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "12",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/13.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "13",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/14.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "14",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/15.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "15",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/16.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "16",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/17.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "17",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/18.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "18",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/19.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "19",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/2.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "2",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/20.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "20",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/21.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "21",
		priority: true,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/22.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "22",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/23.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "23",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/24.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "24",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/3.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "3",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/4.webp",
		width: 3840,
		height: 2563.204005006258,
		alt: "4",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/5.webp",
		width: 3840,
		height: 2883.1534490849367,
		alt: "5",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/6.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "6",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/7.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "7",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/8.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "8",
		priority: undefined,
	},
	{
		src: "https://d2z1dzs2ko3lo7.cloudfront.net/delhi/gallery/9.webp",
		width: 3840,
		height: 5769.014084507042,
		alt: "9",
		priority: undefined,
	},
];

const delhiImagesMetaSubset = [
	{
		name: "10",
		width: 2397,
		height: 1600,
		priority: true,
	},
	{
		name: "13",
		width: 1065,
		height: 1600,
	},
	{
		name: "16",
		width: 1065,
		height: 1600,
	},
	{
		name: "21",
		width: 1065,
		height: 1600,
	},
	{
		name: "4",
		width: 2397,
		height: 1600,
	},
];

export const photosDelhi = delhiImagesMeta.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl(photo.alt);
	const alt = photo.alt;
	const priority = photo.priority;

	return {
		src: url,
		width,
		height,
		alt,
		priority,
	};
});

export const photosDelhiSubset = delhiImagesMetaSubset.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl(photo.alt);
	const alt = photo.alt;

	return {
		src: url,
		width,
		height,
		alt,
	};
});

export const photosMumbai = delhiImagesMeta.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl(photo.alt);
	const alt = photo.alt;
	const priority = photo.priority;

	return {
		src: url,
		width,
		height,
		alt,
		priority,
	};
});

export const photosMumbaiSubset = delhiImagesMetaSubset.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl(photo.alt);
	const alt = photo.alt;

	return {
		src: url,
		width,
		height,
		alt,
	};
});
