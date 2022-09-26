import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Turkey.svg';

export function Turkey(props: TProps) {
  return (
    <Icon {...props} name="Turkey">
      <SVG />
    </Icon>
  );
}
