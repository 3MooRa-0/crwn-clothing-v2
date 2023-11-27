import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import {
  fetchCatoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";
import { CATEGORIES_ACTION_TYPES } from "../categories.types";
import { getCategoriesAndDocs } from "../../../utils/firebase";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../categories.action";

const mockCategoriesArray = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
];

describe("category saga", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCatoriesAsync
      );
  });

  //   test("fetchCatoriesAsync success", () => {
  //     return expectSaga(fetchCatoriesAsync)
  //       .provide([[call(getCategoriesAndDocs), mockCategoriesArray]])
  //       .put(fetchCategoriesSuccess(mockCategoriesArray))
  //       .run();
  //   });

  //   test("fetchCatoriesAsync failure", () => {
  //     const mockError = new Error("An error occurred");

  //     return expectSaga(fetchCatoriesAsync)
  //       .provide([[call(getCategoriesAndDocs, throwError(mockError))]])
  //       .put(fetchCategoriesFailed(mockError))
  //       .run();
  //   });
});
