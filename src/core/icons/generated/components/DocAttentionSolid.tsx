import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAttentionSolid.svg';

export function DocAttentionSolid(props: TProps) {
  return (
    <Icon {...props} name="DocAttentionSolid">
      <SVG />
    </Icon>
  );
}
