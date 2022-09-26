import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InvalidSolid.svg';

export function InvalidSolid(props: TProps) {
  return (
    <Icon {...props} name="InvalidSolid">
      <SVG />
    </Icon>
  );
}
