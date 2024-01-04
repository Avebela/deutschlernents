import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  Action,
} from "@reduxjs/toolkit";

type Type = {
  id: string;
  name: string;
  isactive: boolean;
};

type TypesState = {
  list: Type[];
  loading: boolean;
  error: string | null;
};

export const fetchTypes = createAsyncThunk<
  Type[],
  undefined,
  { rejectValue: string }
>("types/fetchTypes", async function (_, { rejectWithValue }) {
  const response = await fetch(
    // "https://jsonplaceholder.typicode.com/todos?_limit=10"
    `http://localhost:5000/api/type`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    return rejectWithValue("Server error");
  }
  const data = await response.json();
  return data;
});

export const addNewType = createAsyncThunk<
  Type,
  string,
  { rejectValue: string }
>("types/addNewType", async function (text, { rejectWithValue }) {
  const type = {
    name: text,
  };
  const response = await fetch(`http://localhost:5000/api/type`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(type),
  });
  if (!response.ok) {
    return rejectWithValue("Cant add type. Server error");
  }
  return (await response.json()) as Type;
});

export const toggleStatus = createAsyncThunk<
  Type,
  string,
  { rejectValue: string; state: { types: TypesState } }
>(
  "types/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const type = getState().types.list.find((type) => type.id === id);
    if (type) {
      const response = await fetch(`http://localhost:5000/api/type/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isactive: !type.isactive }),
      });
      if (!response.ok) {
        return rejectWithValue("Cant edit status. Server error");
      }
      return (await response.json()) as Type;
    }
    return rejectWithValue("No such todo in the list");
  }
);

// export const deleteTodo = createAsyncThunk<
//   string,
//   string,
//   { rejectValue: string; state: { todos: TodosState } }
// >("todos/deleteTodo", async function (id, { rejectWithValue }) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`,
//     {
//       method: "DELETE",
//     }
//   );
//   if (!response.ok) {
//     return rejectWithValue("Cant delete task. Server error");
//   }

//   return id;
// });

const initialState: TypesState = {
  list: [],
  loading: false,
  error: null,
};

const typeSlice = createSlice({
  name: "types",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(addNewType.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewType.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        const toggledType = state.list.find(
          (type) => type.id === action.payload.id
        );
        if (toggledType) {
          toggledType.isactive = !toggledType.isactive;
        }
      })
      // .addCase(deleteTodo.fulfilled, (state, action) => {
      //   state.list = state.list.filter((todo) => todo.id !== action.payload);
      // })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default typeSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith("rejected");
}
