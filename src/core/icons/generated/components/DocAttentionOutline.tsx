import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAttentionOutline.svg';

export function DocAttentionOutline(props: TProps) {
  return (
    <Icon {...props} name="DocAttentionOutline">
      <SVG />
    </Icon>
  );
}
