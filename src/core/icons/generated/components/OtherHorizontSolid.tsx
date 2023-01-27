import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherHorizontSolid.svg';

export function OtherHorizontSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="OtherHorizontSolid">
      <SVG />
    </Icon>
  );
}
