import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocs } from "../../utils/firebase";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// export const fetchCatoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesArray = await getCategoriesAndDocs();

//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed());
//   }
// };

export function* fetchCatoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocs, "categories");

    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCatoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
