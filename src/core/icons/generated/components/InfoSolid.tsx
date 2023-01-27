import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InfoSolid.svg';

export function InfoSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="InfoSolid">
      <SVG />
    </Icon>
  );
}
