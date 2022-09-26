import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ghana.svg';

export function Ghana(props: TProps) {
  return (
    <Icon {...props} name="Ghana">
      <SVG />
    </Icon>
  );
}
