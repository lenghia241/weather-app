export interface WeatherProps {
	city: {
		id: number;
		name: string;
	};
	temp: number;
	weather: Array<WeatherMainProps>;
}

export interface WeatherMainProps {
	description: string;
	icon: string;
	id: number;
	main: string;
}

export interface WeatherContent {
	city: {
		id: number;
		name: string;
	};
	weather: any;
	temp: number;
}

export interface IconProps {
	type: string;
}
