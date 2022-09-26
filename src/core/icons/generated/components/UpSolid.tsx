import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UpSolid.svg';

export function UpSolid(props: TProps) {
  return (
    <Icon {...props} name="UpSolid">
      <SVG />
    </Icon>
  );
}
