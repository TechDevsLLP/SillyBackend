const getUrl = (location, name) =>
	`${process.env.IMAGES_BASE_URL}/${location}/gallery/${name}.webp`;

const delhiImagesMeta = [
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "10",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "11",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "12",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "13",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "14",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "15",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "16",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "17",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "18",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "19",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "2",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "20",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "21",
		priority: true,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "22",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "23",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "24",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "3",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2563.204005006258,
		alt: "4",
		priority: undefined,
	},
	{
		width: 3840,
		height: 2883.1534490849367,
		alt: "5",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "6",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "7",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "8",
		priority: undefined,
	},
	{
		width: 3840,
		height: 5769.014084507042,
		alt: "9",
		priority: undefined,
	},
];

const delhiImagesMetaSubset = [
	{
		name: "10",
		alt: "10",
		width: 2397,
		height: 1600,
	},
	{
		name: "13",
		alt: "13",
		width: 1065,
		height: 1600,
	},
	{
		name: "16",
		alt: "16",
		width: 1065,
		height: 1600,
	},
	{
		name: "21",
		alt: "21",
		width: 1065,
		height: 1600,
	},
	{
		name: "4",
		alt: "4",
		width: 2397,
		height: 1600,
	},
];

export const photosDelhi = delhiImagesMeta.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl("delhi", photo.alt);
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
	const url = getUrl("delhi", photo.alt);
	const alt = photo.alt;

	return {
		src: url,
		width,
		height,
		alt,
	};
});

const mumbaiImagesMeta = [
	{
		name: "1",
		width: 1080,
		height: 1920,
		alt: "1",
		priority: true,
	},
	{
		name: "10",
		width: 1080,
		height: 1920,
		alt: "10",
	},
	{
		name: "11",
		width: 1080,
		height: 1920,
		alt: "11",
	},
	{
		name: "12",
		width: 1080,
		height: 1920,
		alt: "12",
	},
	{
		name: "13",
		width: 1080,
		height: 1920,
		alt: "13",
	},
	{
		name: "14",
		width: 1080,
		height: 1920,
		alt: "14",
	},
	{
		name: "15",
		width: 1080,
		height: 1920,
		alt: "15",
	},
	{
		name: "16",
		width: 1080,
		height: 1920,
		alt: "16",
	},
	{
		name: "17",
		width: 1080,
		height: 1920,
		alt: "17",
	},
	{
		name: "18",
		width: 1080,
		height: 1920,
		alt: "18",
	},
	{
		name: "19",
		width: 1080,
		height: 1920,
		alt: "19",
	},
	{
		name: "2",
		width: 1080,
		height: 1920,
		alt: "2",
		priority: true,
	},
	{
		name: "3",
		width: 1080,
		height: 1920,
		alt: "3",
		priority: true,
	},
	{
		name: "4",
		width: 1080,
		height: 1920,
		alt: "4",
	},
	{
		name: "5",
		width: 1080,
		height: 1920,
		alt: "5",
	},
	{
		name: "6",
		width: 1080,
		height: 1920,
		alt: "6",
	},
	{
		name: "7",
		width: 1080,
		height: 1920,
		alt: "7",
	},
	{
		name: "8",
		width: 1080,
		height: 1920,
		alt: "8",
	},
	{
		name: "9",
		width: 1080,
		height: 1920,
		alt: "9",
	},
];

const mumbaiImagesMetaSubset = [
	{
		name: "1",
		width: 1080,
		height: 1920,
		alt: "1",
	},
	{
		name: "11",
		width: 1080,
		height: 1920,
		alt: "11",
	},
	{
		name: "14",
		width: 1080,
		height: 1920,
		alt: "14",
	},
	{
		name: "2",
		width: 1080,
		height: 1920,
		alt: "2",
	},
	{
		name: "3",
		width: 1080,
		height: 1920,
		alt: "3",
	},
];

export const photosMumbai = mumbaiImagesMeta.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl("mumbai", photo.alt);
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

export const photosMumbaiSubset = mumbaiImagesMetaSubset.map((photo) => {
	const width = 2400;
	const height = (photo.height / photo.width) * width;
	const url = getUrl("mumbai", photo.alt);
	const alt = photo.alt;

	return {
		src: url,
		width,
		height,
		alt,
	};
});
