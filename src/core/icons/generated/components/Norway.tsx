import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Norway.svg';

export function Norway(props: TProps) {
  return (
    <Icon {...props} name="Norway">
      <SVG />
    </Icon>
  );
}
