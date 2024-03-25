import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => `tasks`,
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (note) => ({
        url: `tasks`,
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `tasks/${task.id}`,
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: { ...task },
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
  useAddTaskMutation,
} = tasksApi;
