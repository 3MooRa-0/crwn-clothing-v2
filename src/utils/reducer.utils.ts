import { AnyAction } from "redux";

//check if the type is in the same action and return it
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"]; //get the type value
  match(action: AnyAction): action is ReturnType<AC>;
};

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

//#########################################################################

//functions overloading:
export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

//the used function
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}

//#########################################################################

//function overloading:
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//the used function
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type, 
    match(action: AnyAction) {
      return action.type === type
    }
  })
}