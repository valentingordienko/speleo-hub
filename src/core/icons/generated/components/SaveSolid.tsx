import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SaveSolid.svg';

export function SaveSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="SaveSolid">
      <SVG />
    </Icon>
  );
}
