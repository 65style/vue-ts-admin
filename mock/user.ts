import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body);
      return {
        code: 0,
        message: 'ok',
        data: ['tom', 'jerry'],
      };
    },
  },
] as MockMethod[];