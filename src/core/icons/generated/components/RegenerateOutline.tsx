import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RegenerateOutline.svg';

export function RegenerateOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RegenerateOutline">
      <SVG />
    </Icon>
  );
}
