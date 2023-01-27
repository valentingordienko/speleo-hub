import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocProcessingSolid.svg';

export function DocProcessingSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocProcessingSolid">
      <SVG />
    </Icon>
  );
}
