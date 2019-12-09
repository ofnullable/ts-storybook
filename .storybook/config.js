import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.(js|mdx)
configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);
