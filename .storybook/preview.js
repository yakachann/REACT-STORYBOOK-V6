import React from 'react';
//import Center from '../src/components/Center/Center';
import { withConsole } from '@storybook/addon-console'
import { CSSReset, theme, ThemeProvider, Box } from '@chakra-ui/react';
// @type { import('@storybook/react').Preview } 
/**optionの追加によりアルファベット順に並び替え（通常はimport順） */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


/**CSSResetを使用することでブラウザのデフォルトのCSSスタイルがリセットされる */
/**Boxコンポーネントは指定したスタイルを持つ<div>要素を生成。mはmerginの略で4はマージンの値を指定している */
export const decorators = [(Story) => <ThemeProvider theme={theme}><CSSReset /><Box m='4'></Box> <Story /></ThemeProvider>
  , (storyFn, context) => withConsole()(storyFn)(context)]


export default preview;