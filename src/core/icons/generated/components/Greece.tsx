import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Greece.svg';

export function Greece(props: TProps) {
  return (
    <Icon {...props} name="Greece">
      <SVG />
    </Icon>
  );
}
