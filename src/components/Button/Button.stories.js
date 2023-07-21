import React from "react";
import Button from "./Button";
//import Center from "../Center/Center";

/**argsをdefaultで追加すると全てに反映される（ただし各要素でargsを書いた場合は上書きされる） */
/**decoratorとはstoryを描画する際に、そのストーリーをラップした上位コンポーネントのこと 
 * 配列で定義するため、複数定義することもでき、その場合はアロー関数を複数書いて反映させる*/
export default {
  title: 'Form/Button',
  component: Button,
  //decorators: [story => <Center>{story()}</Center>]
  // args: {
  //   children: 'Button'
  // }
}

/**Buttonコンポーネントのstory */
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>success</Button>
export const Danger = () => <Button variant='danger'>danger</Button>

// const Template = args => <Button {...args} />

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: 'primary',
//   //children: 'Primary Args'
// }

// export const LongPrimaryA = Template.bind({});
// LongPrimaryA.args = {
//   ...PrimaryA.args,
//   //children: 'Long Primary Args'
// }

// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: 'secondary',
//   //children: 'Secondary Args'
// }
