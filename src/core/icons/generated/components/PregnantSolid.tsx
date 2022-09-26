import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PregnantSolid.svg';

export function PregnantSolid(props: TProps) {
  return (
    <Icon {...props} name="PregnantSolid">
      <SVG />
    </Icon>
  );
}
