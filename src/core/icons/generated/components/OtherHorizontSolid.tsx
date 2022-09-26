import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/OtherHorizontSolid.svg';

export function OtherHorizontSolid(props: TProps) {
  return (
    <Icon {...props} name="OtherHorizontSolid">
      <SVG />
    </Icon>
  );
}
