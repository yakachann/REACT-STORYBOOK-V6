import React from "react";
import { Button } from '@chakra-ui/react';
import { action, actions } from '@storybook/addon-actions';

/**argTypesでコンポーネントの引数のコントロールを定義。storybookのUI上で調整可能になる */
export default {
  title: 'Chakra/Button',
  component: Button,
  // argTypes: {
  //   colorScheme: {control: 'text'},
  //   children: {control: 'text'},
  //   onClick: {action: 'clicked'}
  // } 
}

/**引数で指定したプロパティがButtonコンポーネントに渡されるようにしている */
//const Template = args => <Button {...args} />

/**Templateへのバインド。各ストーリーのデフォルトプロパティを定義している。 */
// export const Success = Template.bind({});
// Success.args = {
//   colorScheme: 'green',
//   children: 'Success'
// }
// export const Danger= Template.bind({});
// Danger.args = {
//   colorScheme: 'red',
//   children: 'Danger'
// }

/** colorSchemeはテーマに含まれるカラースキームの指定が可能*/
export const Success = () => <Button onClick={action('Click handler')} colorScheme='green'>Success</Button>
export const Danger = () => <Button {...actions('onClick', 'onMouseOver')} colorScheme='red'>Danger</Button>

/**Logの表示 */
export const Log = () => <Button colorScheme="green" onClick={() => console.log('Button clicked')}>Log</Button>
