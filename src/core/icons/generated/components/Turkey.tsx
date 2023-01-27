import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Turkey.svg';

export function Turkey(props: TBaseProps) {
  return (
    <Icon {...props} name="Turkey">
      <SVG />
    </Icon>
  );
}
