import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttentionSolid.svg';

export function AttentionSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AttentionSolid">
      <SVG />
    </Icon>
  );
}
