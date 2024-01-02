import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  Action,
} from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
  loading: boolean;
  error: string | null;
};

export const fetchTodos = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>("todos/fetchTodos", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  const data = await response.json();
  return data;
});

export const addNewTodo = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string }
>("todos/addNewTodo", async function (text, { rejectWithValue }) {
  const todo = {
    title: text,
    completed: false,
    userId: 1,
  };
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  if (!response.ok) {
    return rejectWithValue("Cant add task. Server error");
  }
  return (await response.json()) as Todo;
});

export const toggleStatus = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todos: TodosState } }
>(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.list.find((todo) => todo.id === id);
    if (todo) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: !todo.completed }),
        }
      );
      if (!response.ok) {
        return rejectWithValue("Cant toggle status. Server error");
      }
      return (await response.json()) as Todo;
    }
    return rejectWithValue("No such todo in the list");
  }
);

export const deleteTodo = createAsyncThunk<
  string,
  string,
  { rejectValue: string; state: { todos: TodosState } }
>("todos/deleteTodo", async function (id, { rejectWithValue }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    return rejectWithValue("Cant delete task. Server error");
  }

  return id;
});

const initialState: TodosState = {
  list: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(addNewTodo.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledTodo = state.list.find(
          (todo) => todo.id === action.payload.id
        );
        if (toggledTodo) {
          toggledTodo.completed = !toggledTodo.completed;
        }
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((todo) => todo.id !== action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default todoSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith("rejected");
}

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { loadTodosFn } from "../services";
// import { getId } from "../utils";

// interface TodoItem {
//   id: number;
//   title: string;
//   done: boolean;
// }

// interface TodoState {
//   items: TodoItem[];
//   // not using statuses!
//   status: "init" | "loading" | "error" | "success";
// }

// const initialState: TodoState = {
//   items: [],
//   status: "init",
// };

// const slice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     // ERROR! mutate everything, no need to worry
//     addTodo(state, action: PayloadAction<{ title: string }>) {
//       /* state.items = [
//         ...state.items,
//         {
//           id: getId(),
//           title: action.payload.title,
//           done: false,
//         },
//       ]; */
//       state.items.push({
//         id: getId(),
//         title: action.payload.title,
//         done: false,
//       });
//     },

//     toggleTodoDone(state, action: PayloadAction<{ id: number }>) {
//       /* const newItems = state.items.map((item) => {
//         if (item.id !== action.payload.id) {
//           return item;
//         }

//         return { ...item, done: !item.done };
//       });

//       return { ...state, items: newItems }; */

//       const item = state.items.find((item) => item.id === action.payload.id);

//       if (!item) {
//         return;
//       }

//       item.done = !item.done;
//     },

//     deleteTodo(state, action: PayloadAction<{ id: number }>) {
//       // const newItems = state.items.filter(
//       //   (item) => item.id !== action.payload.id
//       // );

//       // return { ...state, items: newItems };

//       const index = state.items.findIndex(
//         (item) => item.id === action.payload.id
//       );

//       if (index === -1) {
//         return;
//       }

//       state.items.splice(index, 1);
//     },
//   },

//   // ERROR! using custom thunks with createAsyncThunk
//   extraReducers: (builder) =>
//     builder
//       .addCase(loadTodosThunk.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(loadTodosThunk.fulfilled, (state, action) => {
//         state.status = "success";
//         state.items = action.payload;
//       })
//       .addCase(loadTodosThunk.rejected, (state) => {
//         state.status = "error";
//       }),
// });

// export const loadTodosThunk = createAsyncThunk("todo/get", () => {
//   return loadTodosFn();
// });

// // ERROR! todo correct export of hole actions, not only one action!
// export const { reducer: todoReducer, actions: todoActions } = slice;
// // export const todoReducer = slice.reducer;
// // export const { addTodo, toggleTodoDone, deleteTodo } = slice.actions;
