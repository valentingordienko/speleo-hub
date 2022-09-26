import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StateOfPalestine.svg';

export function StateOfPalestine(props: TProps) {
  return (
    <Icon {...props} name="StateOfPalestine">
      <SVG />
    </Icon>
  );
}
