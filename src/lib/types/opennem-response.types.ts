export type OpenNemHistory = {
	data: number[];
	interval: string;
	start: string;
	last: string;
};

export type OpenNemData = {
	code: string;
	data_type: string;
	id: string;
	network: string;
	type: string;
	units: string;
	history: OpenNemHistory;
};
