import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/UnsignSolid.svg';

export function UnsignSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="UnsignSolid">
      <SVG />
    </Icon>
  );
}
