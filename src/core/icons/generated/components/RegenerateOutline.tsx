import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RegenerateOutline.svg';

export function RegenerateOutline(props: TProps) {
  return (
    <Icon {...props} name="RegenerateOutline">
      <SVG />
    </Icon>
  );
}
