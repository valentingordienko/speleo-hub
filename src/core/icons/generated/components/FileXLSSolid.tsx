import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FileXLSSolid.svg';

export function FileXLSSolid(props: TProps) {
  return (
    <Icon {...props} name="FileXLSSolid">
      <SVG />
    </Icon>
  );
}
