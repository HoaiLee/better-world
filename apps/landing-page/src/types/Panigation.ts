export type Pagination<Type> = {
	data: Type;
	meta: {
		pagination: {
			total: number;
			page: number;
			pageSize: number;
			pageCount: number;
		}
	}
}
