import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PregnantSolid.svg';

export function PregnantSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PregnantSolid">
      <SVG />
    </Icon>
  );
}
