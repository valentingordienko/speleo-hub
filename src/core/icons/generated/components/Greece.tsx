import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Greece.svg';

export function Greece(props: TBaseProps) {
  return (
    <Icon {...props} name="Greece">
      <SVG />
    </Icon>
  );
}
