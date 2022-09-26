import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocProcessingSolid.svg';

export function DocProcessingSolid(props: TProps) {
  return (
    <Icon {...props} name="DocProcessingSolid">
      <SVG />
    </Icon>
  );
}
