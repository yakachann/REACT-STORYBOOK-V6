import React from "react";
import { Primary } from "../components/Button/Button.stories";
import { Large } from "../components/Input/Input.stories";

export default {
  title: 'form/Subscription'
};

/**フラグメントは複数の要素を1つの親要素で囲むために使用 */
export const PrimarySubscription = () => (
  <>
  <Large />
  <Primary />
  </>
)