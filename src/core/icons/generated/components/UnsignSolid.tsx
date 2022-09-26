import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnsignSolid.svg';

export function UnsignSolid(props: TProps) {
  return (
    <Icon {...props} name="UnsignSolid">
      <SVG />
    </Icon>
  );
}
