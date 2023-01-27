import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAttentionSolid.svg';

export function DocAttentionSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="DocAttentionSolid">
      <SVG />
    </Icon>
  );
}
