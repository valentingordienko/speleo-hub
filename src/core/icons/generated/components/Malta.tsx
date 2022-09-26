import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Malta.svg';

export function Malta(props: TProps) {
  return (
    <Icon {...props} name="Malta">
      <SVG />
    </Icon>
  );
}
