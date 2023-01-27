import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Montenegro.svg';

export function Montenegro(props: TBaseProps) {
  return (
    <Icon {...props} name="Montenegro">
      <SVG />
    </Icon>
  );
}
