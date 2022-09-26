import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttentionSolid.svg';

export function AttentionSolid(props: TProps) {
  return (
    <Icon {...props} name="AttentionSolid">
      <SVG />
    </Icon>
  );
}
