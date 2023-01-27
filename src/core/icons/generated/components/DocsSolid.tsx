import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocsSolid.svg';

export function DocsSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocsSolid">
      <SVG />
    </Icon>
  );
}
