export const pagination_helper = (
  page: any,
  limit: any,
  count: any,
  rows: any,
) => {
  return {
    pagination: {
      page: page ? Number(page) : 1,
      lastPage: limit ? Math.ceil(count / limit) : 1,
    },
    count,
    rows,
  };
};
