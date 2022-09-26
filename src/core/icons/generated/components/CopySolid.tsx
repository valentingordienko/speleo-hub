import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CopySolid.svg';

export function CopySolid(props: TProps) {
  return (
    <Icon {...props} name="CopySolid">
      <SVG />
    </Icon>
  );
}
