import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UpSolid.svg';

export function UpSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="UpSolid">
      <SVG />
    </Icon>
  );
}
