import Axios from "axios";

const initialState = {
  posts: [],
  loading: false
}

const GET_ALL_RATINGS = "GET_ALL_RATINGS";
const ADD_RATING = "ADD_RATING";
const EDIT_RATING = "EDIT_RATING";
const GET_ALL_RATINGS_BY_USER_ID = "GET_ALL_RATINGS_BY_CATEGORY_NAME";

export function getAllRatings() {
  return {
    type: GET_ALL_RATINGS,
    payload: Axios.get("/api/ratings")
  }
}

export function addRating(rating) {
  return {
    type: ADD_RATING,
    payload: Axios.post("/api/ratings", rating)
  }
}

export function editRating(post_id, updated_rating) {
  return {
    type: EDIT_RATING,
    payload: Axios.put(`/api/ratings/${post_id}`, updated_rating)
  }
}


export function getAllRatingsByUserId(user_id) {
  return {
    type: GET_ALL_RATINGS_BY_USER_ID,
    payload: Axios.get(`/api/ratings/${user_id}`)
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${GET_ALL_RATINGS}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${GET_ALL_RATINGS}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data
      }
    }
    case `${ADD_RATING}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${ADD_RATING}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data
      }
    }
    case `${EDIT_RATING}_PENDING`: {
      return {
        ...state,
        loading: true
      }
    }
    case `${EDIT_RATING}_FULFILLED`: {
      return {
        ...state,
        posts: payload.data,
        loading: false
      }
    }
    default:
      return state;
  }
}