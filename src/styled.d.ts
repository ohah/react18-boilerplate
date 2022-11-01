/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITheme } from 'store/recoil/theme/atom';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
