import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IType, TypesState } from "../../models/models";

export const typeApi = createApi({
  reducerPath: "typeApi",
  tagTypes: ["Type"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
  }),
  // refetchOnFocus: true,
  endpoints: (build) => ({
    // searchTypes: build.query<IType[], string>({
    //   query: (search: string) => ({
    //     // "search/users",
    //     url: "type/",
    //     params: {
    //       q: search,
    //       per_page: 10,
    //     },
    //   }),
    //   transformResponse: (response: Server) => response.items,
    // }),
    getTypes: build.query<IType[], void>({
      query: () => ({
        url: `type`,
      }),
      providesTags: ["Type"],
    }),
    // getTypes: build.query<any, void>({
    //   query: () => `type`,
    // }),
    // createUser: build.mutation<any, void>({query: () => `url` })

    addType: build.mutation({
      query: (body) => ({
        url: `type`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Type"],
    }),
    deleteType: build.mutation({
      query: (id) => ({
        url: `type/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Type"],
    }),
  }),
});

export const {
  useGetTypesQuery,
  useAddTypeMutation,
  useDeleteTypeMutation,
  //useLazyGetUserReposQuery,
  // useCreateUserMutation
} = typeApi;
