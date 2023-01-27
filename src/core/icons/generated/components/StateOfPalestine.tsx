import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/StateOfPalestine.svg';

export function StateOfPalestine(props: TBaseProps) {
  return (
    <Icon {...props} name="StateOfPalestine">
      <SVG />
    </Icon>
  );
}
