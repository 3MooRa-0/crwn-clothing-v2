import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocs } from "../../utils/firebase";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCatoriesAsync() {
  try {
    const categoriesArray = yield* call(getCategoriesAndDocs);

    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCatoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
