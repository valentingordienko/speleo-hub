import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Ghana.svg';

export function Ghana(props: TBaseProps) {
  return (
    <Icon {...props} name="Ghana">
      <SVG />
    </Icon>
  );
}
