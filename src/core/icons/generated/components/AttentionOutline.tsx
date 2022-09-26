import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AttentionOutline.svg';

export function AttentionOutline(props: TProps) {
  return (
    <Icon {...props} name="AttentionOutline">
      <SVG />
    </Icon>
  );
}
