import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InvalidSolid.svg';

export function InvalidSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="InvalidSolid">
      <SVG />
    </Icon>
  );
}
