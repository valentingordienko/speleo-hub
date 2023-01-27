import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Norway.svg';

export function Norway(props: TBaseProps) {
  return (
    <Icon {...props} name="Norway">
      <SVG />
    </Icon>
  );
}
