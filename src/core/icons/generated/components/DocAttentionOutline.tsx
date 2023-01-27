import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DocAttentionOutline.svg';

export function DocAttentionOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="DocAttentionOutline">
      <SVG />
    </Icon>
  );
}
