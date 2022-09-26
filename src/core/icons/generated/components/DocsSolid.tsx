import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocsSolid.svg';

export function DocsSolid(props: TProps) {
  return (
    <Icon {...props} name="DocsSolid">
      <SVG />
    </Icon>
  );
}
