import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherVertSolid.svg';

export function OtherVertSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="OtherVertSolid">
      <SVG />
    </Icon>
  );
}
