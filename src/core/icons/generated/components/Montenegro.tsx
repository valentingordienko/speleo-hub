import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Montenegro.svg';

export function Montenegro(props: TProps) {
  return (
    <Icon {...props} name="Montenegro">
      <SVG />
    </Icon>
  );
}
