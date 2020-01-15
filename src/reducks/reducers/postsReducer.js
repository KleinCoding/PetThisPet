import Axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  currentPost_id: 0
}

const GET_ALL_POSTS = "GET_ALL_POSTS";
const GET_CURRENT_POST = "GET_CURRENT_POST"
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const GET_ALL_POSTS_BY_CATEGORY_NAME = "GET_ALL_POSTS_BY_CATEGORY_NAME";

export function getAllPosts() {
  return {
    type: GET_ALL_POSTS,
    payload: Axios.get("/api/posts")
  }
}

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: Axios.post("/api/posts", post)
  }
}
export function getCurrentPost(post_id) {
  return{
  type: GET_CURRENT_POST,
  payload: Axios.get(`/api/post/${post_id}`)
  }
}
export function editPost(post_id, updated_post) {
  return {
    type: EDIT_POST,
    payload: Axios.put(`/api/posts/${post_id}`, updated_post)
  }
}

export function deletePost(post_id) {
  return {
    type: DELETE_POST,
    payload: Axios.delete(`/api/posts/${post_id}`)
  }
}

export function getAllPostsByCategoryName(category_name) {
  return {
    type: GET_ALL_POSTS_BY_CATEGORY_NAME,
    payload: Axios.get(`/api/posts/${category_name}`)
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_POSTS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_ALL_POSTS}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data
      }
    }
    case `${GET_CURRENT_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_CURRENT_POST}_FULFILLED`: {
      return {
        ...state,
        currentPost_id: payload.data
      }
    }
    case `${ADD_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${ADD_POST}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data
      }
    }
    case `${EDIT_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${EDIT_POST}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data,
        loading: false
      }
    }
    case `${DELETE_POST}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${DELETE_POST}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data
      }
    }
    default:
      return state;
  }
}